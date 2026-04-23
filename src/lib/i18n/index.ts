export const locales = ['en', 'fr', 'es'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number];

export const pathnames: Record<string, Record<Locale, string>> = {
	'/': { en: '/', fr: '/', es: '/' },
	'/portfolio': { en: '/portfolio', fr: '/dossier', es: '/dossier' },
	'/cv': { en: '/cv', fr: '/cv', es: '/cv' }
};

const localeNames: Record<Locale, string> = {
	en: '🇺🇸 English',
	fr: '🇫🇷 Français',
	es: '🇪🇸 Español'
};

export function getLocaleName(locale: Locale): string {
	return localeNames[locale];
}

export function isValidLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}

export function t(messages: Record<string, unknown>, namespace: string, key: string): string {
	const ns = messages[namespace] as Record<string, unknown> | undefined;
	if (!ns) return key;

	const parts = key.split('.');
	let value: unknown = ns;
	for (const part of parts) {
		if (value && typeof value === 'object') {
			value = (value as Record<string, unknown>)[part];
		} else {
			return key;
		}
	}

	return typeof value === 'string' ? value : key;
}

/**
 * Get the localized path for a given canonical path and locale.
 * E.g., getLocalizedPath('/portfolio', 'fr') => '/fr/dossier'
 */
export function getLocalizedPath(canonicalPath: string, locale: Locale): string {
	const mapping = pathnames[canonicalPath];
	if (mapping) {
		return `/${locale}${mapping[locale]}`;
	}
	return `/${locale}${canonicalPath}`;
}

/**
 * Get the canonical path from a potentially localized path.
 * E.g., '/dossier' => '/portfolio'
 */
export function getCanonicalPath(localizedPath: string): string {
	for (const [canonical, localized] of Object.entries(pathnames)) {
		for (const path of Object.values(localized)) {
			if (path === localizedPath) return canonical;
		}
	}
	return localizedPath;
}
