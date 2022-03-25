import { terser } from "rollup-plugin-terser";
import strip from '@rollup/plugin-strip';
import replace from 'rollup-plugin-replace-imports-with-vars';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const globals = {
	// 'three': 'window.THREE',
}

export default [
	{	
		input: "src/aframe-lamina.js",
		external: ['three'],
		output: {
			format: "iife",
			sourcemap: true,
			file: 'build/aframe-lamina.js',
			globals: {
				three: 'THREE'
			}
		},
		plugins: [
			resolve(),
			commonjs({
				include: ["node_modules/**"],
			}),
			// replace({ varType: 'const', replacementLookup: globals })
		]
	},
	{
		input: "src/aframe-lamina.js",
		external: ['three'],
		output: {
			format: "iife",
			sourcemap: true,
			file: 'build/aframe-lamina.min.js',
			globals: {
				three: 'THREE'
			}
		},
		plugins: [
			resolve(),
			commonjs({
				include: ["node_modules/**"],
			}),
			// replace({ varType: 'const', replacementLookup: globals }),
			strip({labels: ['documentation']}),
			terser()
		]
	},
];
