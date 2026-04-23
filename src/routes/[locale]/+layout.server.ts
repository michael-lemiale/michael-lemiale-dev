import { redirect, error } from '@sveltejs/kit';
import { isValidLocale } from '$lib/i18n';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async ({ params }) => {
	const { locale } = params;

	if (!isValidLocale(locale)) {
		redirect(307, '/en');
	}

	const messages = await import(`../../../messages/${locale}.json`);

	return {
		locale,
		messages: messages.default
	};
};
