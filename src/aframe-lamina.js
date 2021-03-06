/* jshint esversion: 9 */
/* For dealing with spline curves */
/* global THREE, AFRAME */

import { LayerMaterial } from 'lamina/vanilla';
import * as lamina from 'lamina/vanilla';
const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
// const textureLoader = new THREE.TextureLoader();
AFRAME.registerShader('lamina', {
	schema: {
		layers: {
			type: 'selector',
			description: 'Element that contains the layers, defautls to this element.'
		},
		color: {
			type: 'color',
			default: 'white',
			description: 'Base color'
		},
		alpha: {
			default: 1,
			description: 'Alpha'
		},
		lighting: {
			oneOf: ['phong', 'physical', 'toon', 'basic', 'lambert', 'standard'],
			default: 'basic',
			description: 'Shading model to use.'
		}
	},

	init: function (data) {
		const layers = data.layers || this.el;
		this.rendererSystem = this.el.sceneEl.systems.renderer;
		this.material = new LayerMaterial({
			color: new THREE.Color(data.color).convertSRGBToLinear(),
			layers: Array.from(layers.children).map(el => el.laminaLayer).filter(l => !!l),
			lighting: data.lighting
		});
	},

	update: function (data) {
		this.material.color.set(data.color);
		this.material.alpha = data.alpha;
		this.material.lighting = data.lighting;
		this.material.layers.splice(0);
		this.material.needsUpdate = true;
	}
});

AFRAME.registerPrimitive('a-lamina', {
	mappings: {
		color: "material.color",
		alpha: "material.alpha",
		lighting: "material.lighting",
	},
	defaultComponents: {
		material: "shader:lamina;"
	}
});

const defaultSchema = {
	mode: {
		default: 'normal',
		oneOf: [
			'normal',
			'divide',
			'add',
			'overlay',
			'subtract',
			'screen',
			'multiply',
			'softlight',
			'lighten',
			'reflect',
			'darken',
			'negation'
		]
		// blend mode
	},
	visible: {
		default: true
	}
};

const schemas = {};
for (const layer of [
	'Color',
	'Depth',
	'Fresnel',
	'Gradient',
	'Matcap',
	'Noise',
	'Normal',
	'Texture',
	'Displace'
]) {
	const schemaIn = new lamina[layer]().schema;
	const schema = {};
	for (const schemumIn of schemaIn) {
		const schemum = Object.assign({}, schemumIn);
		if (!schemum.value && schemum.options) schemum.value = schemum.options[0];
		let type = typeof schemum.value;
		if (type === "object") {
			type = schemum.value.constructor.name;
			if (type === "Vector3") type = "vec3";
			if (type === "Vector2") type = "vec1";
			if (type === "Matrix4") type = "mat4";
		}
		if (schemum.label.startsWith('color')) {
			type = 'color'
		}
		if (schemum.label.endsWith('Map') || schemum.label.endsWith('map')) {
			type = 'map'
		}
		const out = { type };
		if (schemum.value) out.default = schemum.value;
		if (schemum.options) out.oneOf = schemum.options;
		schema[schemum.label] = out;
	}
	schemas[layer] = schema;
}

for (const [name, schemapart] of Object.entries(schemas)) {
	const schema = Object.assign(Object.assign({}, defaultSchema), schemapart);
	AFRAME.registerComponent('lamina-' + name.toLowerCase(), {
		schema,
		init() {
			const config = {};
			const self = this;
			for (const [prop, value] of Object.entries(this.data)) {
				let parsedVal = value;
				if (schema[prop].type === 'color') {
					parsedVal = new THREE.Color(value).convertSRGBToLinear();
				}
				if (schema[prop].type === 'map') {
					this.el.sceneEl.systems.material.loadTexture(value, { src: value }, function textureLoaded (texture) {
						self.el.laminaLayer[prop] = texture;
						AFRAME.utils.material.handleTextureEvents(self.el, texture);
					});
				}
				config[prop] = parsedVal;
			}
			const layer = new lamina[name](config);
			this.el.laminaLayer = layer;
		},
		update(oldData) {
		}
	})
	
	const mappings = {};
	for (const propName of Object.keys(schema)) {
		mappings[kebabize(propName)] = `${'lamina-' + name.toLowerCase()}.${propName}`
	}
	AFRAME.registerPrimitive('lamina-' + name.toLowerCase(), {
		mappings,
		defaultComponents: {
			['lamina-' + name.toLowerCase()]: ""
		}
	})
}
