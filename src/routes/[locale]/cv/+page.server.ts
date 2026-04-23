import type { PageServerLoad } from './$types';
import { t } from '$lib/i18n';

export const prerender = true;

export const load: PageServerLoad = async ({ params, parent }) => {
	const { locale } = params;
	const { messages } = await parent();
	const downloadLabel = t(messages, 'CV', 'value');

	const { resume } = await import(`$lib/resume/${locale}.ts`);

	const sectionLabels = {
		summary: t(messages, 'CV', 'sections.summary'),
		experience: t(messages, 'CV', 'sections.experience'),
		education: t(messages, 'CV', 'sections.education'),
		skills: t(messages, 'CV', 'sections.skills')
	};

	const skillLabels = {
		programming: t(messages, 'CV', 'skillLabels.programming'),
		frameworks: t(messages, 'CV', 'skillLabels.frameworks'),
		cloud: t(messages, 'CV', 'skillLabels.cloud'),
		analytics: t(messages, 'CV', 'skillLabels.analytics'),
		databases: t(messages, 'CV', 'skillLabels.databases'),
		languages: t(messages, 'CV', 'skillLabels.languages')
	};

	return { locale, downloadLabel, resume, sectionLabels, skillLabels };
};
