<script lang="ts">
	import Icons from './Icons.svelte';
	import LocaleSwitcher from './LocaleSwitcher.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { t, type Locale } from '$lib/i18n';

	interface Props {
		messages: Record<string, unknown>;
		locale: Locale;
	}

	let { messages, locale }: Props = $props();

	const navItems = ['home', 'portfolio', 'cv'] as const;
</script>

<header class="navbar">
	<nav class="navbar-inner">
		<!-- Brand -->
		<a href={t(messages, 'NavBar', 'home.url')} class="brand" aria-label="Michael Lemiale - Home">
			<span class="brand-icon"><Icons icon="redTriangle" /></span>
			<div class="brand-text">
				<span class="brand-name">Michael Lemiale</span>
				<span class="brand-role">Data Engineer</span>
			</div>
		</a>

		<!-- Nav links -->
		<div class="nav-links">
			{#each navItems as key}
				<a href={t(messages, 'NavBar', `${key}.url`)} class="nav-link">
					{t(messages, 'NavBar', `${key}.title`)}
				</a>
			{/each}
		</div>

		<!-- Controls -->
		<div class="nav-controls">
			<LocaleSwitcher {messages} {locale} />
			<ThemeToggle />
		</div>
	</nav>
</header>

<style>
	.navbar {
		background-color: var(--rp-surface);
		border: 1px solid var(--rp-highlight-med);
		border-radius: 14px;
		padding: 0.75rem 1.25rem;
		margin-bottom: 2.5rem;
		position: sticky;
		top: 1rem;
		z-index: 40;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.navbar:hover {
		border-color: var(--rp-highlight-high);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	}

	:global(.dark) .navbar:hover {
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	}

	.navbar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* Brand */
	.brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		flex-shrink: 0;
	}

	.brand-icon {
		display: flex;
		align-items: center;
	}

	.brand-icon :global(svg) {
		width: 36px;
		height: 36px;
	}

	.brand-text {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}

	.brand-name {
		font-size: 1rem;
		font-weight: 700;
		color: var(--rp-text);
		letter-spacing: -0.01em;
	}

	.brand-role {
		font-size: 0.75rem;
		color: var(--rp-muted);
		font-weight: 500;
	}

	/* Nav links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.nav-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--rp-subtle);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border-radius: 8px;
		transition: color 0.15s ease, background-color 0.15s ease;
	}

	.nav-link:hover {
		color: var(--rp-love);
		background-color: var(--rp-highlight-low);
	}

	/* Controls */
	.nav-controls {
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	@media (max-width: 640px) {
		.navbar-inner {
			justify-content: center;
		}
		.brand {
			width: 100%;
			justify-content: center;
		}
		.nav-links {
			width: 100%;
			justify-content: center;
		}
		.nav-controls {
			width: 100%;
			justify-content: center;
		}
	}
</style>
