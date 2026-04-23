import { host } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = `User-agent: *
Allow: /

Sitemap: ${host}/sitemap.xml`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain' }
	});
};
