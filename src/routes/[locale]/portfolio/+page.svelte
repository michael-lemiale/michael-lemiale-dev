<script lang="ts">
	import PostSection from '$lib/components/PostSection.svelte';
	import { t } from '$lib/i18n';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<section>
	<h1 class="font-bold title text-4xl mb-1 tracking-tighter">
		{t(data.messages, 'PortfolioPage', 'projects.value')}
	</h1>
	<hr />
	<PostSection posts={data.projects} />

	<h1 class="font-bold title text-4xl mb-1 mt-12 tracking-tighter">
		{t(data.messages, 'PortfolioPage', 'personal.value')}
	</h1>
	<hr />
	<PostSection posts={data.personal} />
</section>
