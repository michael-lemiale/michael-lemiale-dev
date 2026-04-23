import type { Handle } from '@sveltejs/kit';
import { isValidLocale } from '$lib/i18n';

export const handle: Handle = async ({ event, resolve }) => {
	const parts = event.url.pathname.split('/').filter(Boolean);
	const locale = parts[0] && isValidLocale(parts[0]) ? parts[0] : 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
};
