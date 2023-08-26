import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: vitePreprocess(),
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		}),
		csp: {
			directives: {
				'script-src': ['self', 'https://accounts.google.com/gsi/client']
			}
			// reportOnly: {
			// 	'script-src': ['self', 'https://accounts.google.com/gsi/client'],
			// 	'frame-src': ['self', 'https://accounts.google.com/gsi/'],
			// 	'connect-src': ['self', 'https://accounts.google.com/gsi/'],
			// }
		}
	},

	preprocess: [
		sveltePreprocess({
			scss: {
				// We can use a path relative to the root because
				// svelte-preprocess automatically adds it to `includePaths`
				// if none is defined.
			}
		})
	]
};

export default config;
