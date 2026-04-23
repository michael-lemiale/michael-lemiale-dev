<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { Snippet } from 'svelte';
	import type { Locale } from '$lib/i18n';

	interface Props {
		data: {
			locale: Locale;
			messages: Record<string, unknown>;
		};
		children: Snippet;
	}

	let { data, children }: Props = $props();
</script>

<svelte:head>
	<title>Michael Lemiale - Data Engineer</title>
	<meta name="description" content="Personal portfolio." />
	<meta property="og:title" content="Michael Lemiale - Data Engineer" />
	<meta property="og:description" content="Personal portfolio." />
	<meta property="og:url" content="https://www.michael-lemiale.dev" />
	<meta property="og:site_name" content="Michael Lemiale - Data Engineer" />
	<meta property="og:locale" content={data.locale} />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="antialiased max-w-6xl mx-4 mt-8 lg:mx-auto px-4 md:px-6 lg:px-8">
	<main class="flex-auto min-w-0 mt-6 flex flex-col">
		<Navbar messages={data.messages} locale={data.locale} />
		{@render children()}
		<Footer messages={data.messages} locale={data.locale} />
	</main>
</div>
