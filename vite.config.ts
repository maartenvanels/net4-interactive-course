import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
		alias: {
			'buffer/': 'buffer/',
			'buffer': 'buffer/'
		}
	},
	optimizeDeps: {
		include: ['buffer'],
		esbuildOptions: {
			define: {
				global: 'globalThis'
			}
		}
	},
	build: {
		commonjsOptions: {
			include: [/node_modules/],
		}
	}
});
