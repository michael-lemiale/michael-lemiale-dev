<script lang="ts">
	import { t } from '$lib/i18n';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	<h1 class="mb-8 text-2xl font-semibold tracking-tighter">
		{t(data.messages, 'NotFoundPage', 'title')}
	</h1>
	<p class="mb-4">{t(data.messages, 'NotFoundPage', 'message')}</p>
</section>
