<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { locales, getLocaleName, getCanonicalPath, getLocalizedPath, t, type Locale } from '$lib/i18n';

	interface Props {
		messages: Record<string, unknown>;
		locale: Locale;
	}

	let { messages, locale }: Props = $props();
	let isOpen = $state(false);

	function selectLocale(nextLocale: Locale) {
		// Get current path without locale prefix
		const pathname = $page.url.pathname;
		const parts = pathname.split('/').filter(Boolean);
		const currentPath = '/' + parts.slice(1).join('/');

		// Resolve canonical path then get localized version for new locale
		const canonical = getCanonicalPath(currentPath);
		const newPath = getLocalizedPath(canonical, nextLocale);

		isOpen = false;
		goto(newPath);
	}
</script>

<div class="relative">
	<button
		onclick={() => isOpen = !isOpen}
		class="dropdown-button px-3 py-2 rounded-lg transition-colors text-sm font-medium flex items-center gap-1.5"
		aria-label={t(messages, 'LocaleSwitcher', 'label')}
		aria-expanded={isOpen}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="12" cy="12" r="10"></circle>
			<line x1="2" y1="12" x2="22" y2="12"></line>
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
		</svg>
		{getLocaleName(locale)}
		<svg class="chevron" class:open={isOpen} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="6 9 12 15 18 9"></polyline>
		</svg>
	</button>

	{#if isOpen}
		<div class="dropdown-menu">
			{#each locales as loc}
				{#if loc !== locale}
					<button
						onclick={() => selectLocale(loc)}
						class="dropdown-item"
					>
						{getLocaleName(loc)}
					</button>
				{/if}
			{/each}
		</div>
	{/if}
</div>

<svelte:window onclick={(e) => {
	const target = e.target as HTMLElement;
	if (!target.closest('.relative')) {
		isOpen = false;
	}
}} />

<style>
	.dropdown-button {
		color: var(--rp-subtle);
		background: transparent;
		border: 1px solid var(--rp-highlight-med);
	}

	.dropdown-button:hover {
		background-color: var(--rp-highlight-low);
		border-color: var(--rp-highlight-high);
	}

	.chevron {
		transition: transform 0.2s ease;
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	.dropdown-menu {
		position: absolute;
		top: calc(100% + 4px);
		right: 0;
		min-width: 140px;
		background-color: var(--rp-surface);
		border: 1px solid var(--rp-highlight-med);
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		padding: 4px;
		z-index: 50;
	}

	.dropdown-item {
		display: block;
		width: 100%;
		text-align: left;
		padding: 8px 12px;
		font-size: 0.875rem;
		color: var(--rp-text);
		background: transparent;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.15s ease;
	}

	.dropdown-item:hover {
		background-color: var(--rp-highlight-low);
		color: var(--rp-love);
	}
</style>
