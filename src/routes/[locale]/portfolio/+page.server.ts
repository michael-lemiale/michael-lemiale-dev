import type { PageServerLoad } from './$types';
import { getPortfolioPosts, formatDate } from '$lib/utils';
import { renderMarkdown } from '$lib/markdown';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const { locale } = params;

	async function processPosts(section: string) {
		const posts = getPortfolioPosts(locale, section);
		const processed = await Promise.all(
			posts
				.sort((a, b) => (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1))
				.map(async (post) => ({
					...post,
					html: await renderMarkdown(post.content),
					formattedDate: formatDate(locale, post.metadata.publishedAt)
				}))
		);
		return processed;
	}

	const [projects, personal] = await Promise.all([
		processPosts('projects'),
		processPosts('personal')
	]);

	return { projects, personal };
};
