# AFrame-Lamina

Automated port of Lamina to AFrame

```html
<a-lamina geometry="" material="shader:lamina;color:white;lighting:basic;" position="-1 0.5 -3" rotation="0 45 0">
	<a-entity lamina-color="color:red;mode:screen;"></a-entity>
	<a-entity lamina-normal="mode:multiply;alpha:0.5;"></a-entity>
	<a-entity lamina-depth="mode:multiply;mapping:vector;near:0.5;far:2;origin:0 0 1;"></a-entity>
</a-lamina>
```

<!--DOCS-->
### lamina component

| Property | Type     | Description                                                                   | Default |
| :------- | :------- | :---------------------------------------------------------------------------- | :------ |
| layers   | selector | Element that contains the layers, defautls to this element.                   |         |
| color    | color    | Base color                                                                    | "white" |
| alpha    | number   | Alpha                                                                         | 1       |
| lighting | string   | Shading model to use.. One of phong, physical, toon, basic, lambert, standard | "basic" |

### &lt;a-lamina&gt;

**Default Components:**

| Default component | Settings         |
| :---------------- | :--------------- |
| material          | "shader:lamina;" |

**Entity Attribute Mappings:**

| Property | Mapping             |
| :------- | :------------------ |
| color    | "material.color"    |
| alpha    | "material.alpha"    |
| lighting | "material.lighting" |

### lamina-color component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| color    | color   |                                                                                                                  | "red"    |
| alpha    | number  |                                                                                                                  | 1        |

### &lt;lamina-color&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-color      | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                |
| :------- | :--------------------- |
| mode     | "lamina-color.mode"    |
| visible  | "lamina-color.visible" |
| color    | "lamina-color.color"   |
| alpha    | "lamina-color.alpha"   |

### lamina-depth component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| near     | number  |                                                                                                                  | 2        |
| far      | number  |                                                                                                                  | 10       |
| origin   | object  |                                                                                                                  | {}       |
| colorA   | color   |                                                                                                                  | "white"  |
| colorB   | color   |                                                                                                                  | "black"  |
| alpha    | number  |                                                                                                                  | 1        |
| mapping  | string  | . One of vector, world, camera                                                                                   | "vector" |

### &lt;lamina-depth&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-depth      | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                |
| :------- | :--------------------- |
| mode     | "lamina-depth.mode"    |
| visible  | "lamina-depth.visible" |
| near     | "lamina-depth.near"    |
| far      | "lamina-depth.far"     |
| origin   | "lamina-depth.origin"  |
| color-a  | "lamina-depth.colorA"  |
| color-b  | "lamina-depth.colorB"  |
| alpha    | "lamina-depth.alpha"   |
| mapping  | "lamina-depth.mapping" |

### lamina-fresnel component

| Property  | Type    | Description                                                                                                      | Default  |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode      | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible   | boolean |                                                                                                                  | true     |
| color     | color   |                                                                                                                  | "white"  |
| alpha     | number  |                                                                                                                  | 1        |
| bias      | number  |                                                                                                                  |          |
| intensity | number  |                                                                                                                  | 1        |
| power     | number  |                                                                                                                  | 2        |
| factor    | number  |                                                                                                                  | 1        |

### &lt;lamina-fresnel&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-fresnel    | ""       |

**Entity Attribute Mappings:**

| Property  | Mapping                    |
| :-------- | :------------------------- |
| mode      | "lamina-fresnel.mode"      |
| visible   | "lamina-fresnel.visible"   |
| color     | "lamina-fresnel.color"     |
| alpha     | "lamina-fresnel.alpha"     |
| bias      | "lamina-fresnel.bias"      |
| intensity | "lamina-fresnel.intensity" |
| power     | "lamina-fresnel.power"     |
| factor    | "lamina-fresnel.factor"    |

### lamina-gradient component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| colorA   | color   |                                                                                                                  | "white"  |
| colorB   | color   |                                                                                                                  | "black"  |
| alpha    | number  |                                                                                                                  | 1        |
| start    | number  |                                                                                                                  | 1        |
| end      | number  |                                                                                                                  | -1       |
| contrast | number  |                                                                                                                  | 1        |
| axes     | string  | . One of x, y, z                                                                                                 | "x"      |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"  |

### &lt;lamina-gradient&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-gradient   | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                    |
| :------- | :------------------------- |
| mode     | "lamina-gradient.mode"     |
| visible  | "lamina-gradient.visible"  |
| color-a  | "lamina-gradient.colorA"   |
| color-b  | "lamina-gradient.colorB"   |
| alpha    | "lamina-gradient.alpha"    |
| start    | "lamina-gradient.start"    |
| end      | "lamina-gradient.end"      |
| contrast | "lamina-gradient.contrast" |
| axes     | "lamina-gradient.axes"     |
| mapping  | "lamina-gradient.mapping"  |

### lamina-matcap component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| alpha    | number  |                                                                                                                  | 1        |
| map      | map     |                                                                                                                  |          |

### &lt;lamina-matcap&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-matcap     | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                 |
| :------- | :---------------------- |
| mode     | "lamina-matcap.mode"    |
| visible  | "lamina-matcap.visible" |
| alpha    | "lamina-matcap.alpha"   |
| map      | "lamina-matcap.map"     |

### lamina-noise component

| Property | Type    | Description                                                                                                      | Default   |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :-------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal"  |
| visible  | boolean |                                                                                                                  | true      |
| colorA   | color   |                                                                                                                  | "#666666" |
| colorB   | color   |                                                                                                                  | "#666666" |
| colorC   | color   |                                                                                                                  | "#FFFFFF" |
| colorD   | color   |                                                                                                                  | "#FFFFFF" |
| alpha    | number  |                                                                                                                  | 1         |
| scale    | number  |                                                                                                                  | 1         |
| offset   | object  |                                                                                                                  | {}        |
| type     | string  | . One of perlin, simplex, cell, curl, white                                                                      | "perlin"  |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"   |

### &lt;lamina-noise&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-noise      | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                |
| :------- | :--------------------- |
| mode     | "lamina-noise.mode"    |
| visible  | "lamina-noise.visible" |
| color-a  | "lamina-noise.colorA"  |
| color-b  | "lamina-noise.colorB"  |
| color-c  | "lamina-noise.colorC"  |
| color-d  | "lamina-noise.colorD"  |
| alpha    | "lamina-noise.alpha"   |
| scale    | "lamina-noise.scale"   |
| offset   | "lamina-noise.offset"  |
| type     | "lamina-noise.type"    |
| mapping  | "lamina-noise.mapping" |

### lamina-normal component

| Property  | Type    | Description                                                                                                      | Default  |
| :-------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode      | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible   | boolean |                                                                                                                  | true     |
| alpha     | number  |                                                                                                                  | 1        |
| direction | object  |                                                                                                                  | {}       |

### &lt;lamina-normal&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-normal     | ""       |

**Entity Attribute Mappings:**

| Property  | Mapping                   |
| :-------- | :------------------------ |
| mode      | "lamina-normal.mode"      |
| visible   | "lamina-normal.visible"   |
| alpha     | "lamina-normal.alpha"     |
| direction | "lamina-normal.direction" |

### lamina-texture component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| alpha    | number  |                                                                                                                  | 1        |
| map      | map     |                                                                                                                  |          |

### &lt;lamina-texture&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-texture    | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                  |
| :------- | :----------------------- |
| mode     | "lamina-texture.mode"    |
| visible  | "lamina-texture.visible" |
| alpha    | "lamina-texture.alpha"   |
| map      | "lamina-texture.map"     |

### lamina-displace component

| Property | Type    | Description                                                                                                      | Default  |
| :------- | :------ | :--------------------------------------------------------------------------------------------------------------- | :------- |
| mode     | string  | . One of normal, add, subtract, multiply, lighten, darken, divide, overlay, screen, softlight, negation, reflect | "normal" |
| visible  | boolean |                                                                                                                  | true     |
| strength | number  |                                                                                                                  | 1        |
| scale    | number  |                                                                                                                  | 1        |
| offset   | object  |                                                                                                                  | {}       |
| type     | string  | . One of perlin, simplex, cell, curl, white                                                                      | "perlin" |
| mapping  | string  | . One of local, world, uv                                                                                        | "local"  |

### &lt;lamina-displace&gt;

**Default Components:**

| Default component | Settings |
| :---------------- | :------- |
| lamina-displace   | ""       |

**Entity Attribute Mappings:**

| Property | Mapping                    |
| :------- | :------------------------- |
| mode     | "lamina-displace.mode"     |
| visible  | "lamina-displace.visible"  |
| strength | "lamina-displace.strength" |
| scale    | "lamina-displace.scale"    |
| offset   | "lamina-displace.offset"   |
| type     | "lamina-displace.type"     |
| mapping  | "lamina-displace.mapping"  |

<!--DOCS_END-->
