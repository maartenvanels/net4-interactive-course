import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use static adapter for GitHub Pages
		adapter: adapter({
			// GitHub Pages
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		// Needed for GitHub Pages deployment with a custom domain or project site
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/net4-interactive-course' : ''
		}
	}
};

export default config;
