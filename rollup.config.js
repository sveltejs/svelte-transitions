import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'module.js',
	plugins: [resolve()],
	output: [
		{ file: 'index.js', format: 'cjs' },
		{ file: 'dist/svelte-transitions.js', format: 'umd', name: 'svelte.transitions' }
	]
};