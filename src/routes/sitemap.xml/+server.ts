import { host } from '$lib/config';
import { locales, pathnames, type Locale } from '$lib/i18n';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = () => {
	const entries = Object.keys(pathnames).map((canonical) => {
		const mapping = pathnames[canonical];
		const defaultUrl = `${host}/en${mapping.en}`;
		const alternates = locales
			.map((locale) => {
				const path = mapping[locale];
				return `      <xhtml:link rel="alternate" hreflang="${locale}" href="${host}/${locale}${path}" />`;
			})
			.join('\n');

		return `  <url>
    <loc>${defaultUrl}</loc>
${alternates}
  </url>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
