// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

// Add module declaration for plotly.js-dist-min
declare module 'plotly.js-dist-min' {
	export * from 'plotly.js';
	export { default } from 'plotly.js';
}
