import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				'/',
				'/en', '/fr', '/es',
				'/en/portfolio', '/fr/dossier', '/es/dossier',
				'/en/cv', '/fr/cv', '/es/cv',
				'/sitemap.xml', '/robots.txt'
			],
			handleUnseenRoutes: 'ignore'
		}
	},
	preprocess: [vitePreprocess()]
};

export default config;
