import type { Reroute } from '@sveltejs/kit';
import { isValidLocale } from '$lib/i18n';

export const reroute: Reroute = ({ url }) => {
	const parts = url.pathname.split('/').filter(Boolean);
	if (parts.length >= 2) {
		const locale = parts[0];
		const segment = parts[1];
		if (isValidLocale(locale) && segment === 'dossier') {
			return `/${locale}/portfolio${parts.length > 2 ? '/' + parts.slice(2).join('/') : ''}`;
		}
	}
};
