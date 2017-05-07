import resolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'module.js',
	moduleName: 'transitions',
	plugins: [ resolve() ],
	targets: [
		{ dest: 'index.js', format: 'cjs' },
		{ dest: 'dist/svelte-transitions.js', format: 'umd' }
	]
};