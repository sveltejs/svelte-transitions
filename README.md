# svelte-transitions

Officially supported transitions plugin for [Svelte](https://svelte.technology). Includes the following:

* [fade](https://github.com/sveltejs/svelte-transitions-fade)
* [fly](https://github.com/sveltejs/svelte-transitions-fly)
* [slide](https://github.com/sveltejs/svelte-transitions-slide)

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-transitions
```

Then add the plugins you need to your Svelte component's exported definition:

```html
<label>
  <input type='checkbox' bind:checked='visible'> visible
</label>

{{#if visible}}
  <!-- use `in`, `out`, or `transition` (bidirectional) -->
  <div transition:fade>hello!</div>
{{/if}}

<script>
  import { fade } from 'svelte-transitions';

  export default {
    transitions: { fade }
  };
</script>
```

## Tree-shaking

If you're using a module bundler that supports tree-shaking, such as [Rollup](https://rollupjs.org), only the transitions your components use will be included in your app.


## Universal module definition

If you *really* need it, a UMD build is available at [svelte-transitions/dist/svelte-transitions.js](https://unpkg.com/svelte-transitions/dist/svelte-transitions.js), and will register itself as `svelte.transitions`. We recommend using a module bundler instead, however.


## License

[MIT](LICENSE)