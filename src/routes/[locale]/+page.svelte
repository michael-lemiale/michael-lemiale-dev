<script lang="ts">
	import { t } from '$lib/i18n';
	import DataStream from '$lib/components/DataStream.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	function getMusicHtml(value: string): string {
		return value.replace(
			/<musicLink>(.*?)<\/musicLink>/i,
			'<a class="music-link" target="_blank" href="https://notfromparismusic.com/">$1</a>'
		);
	}
</script>

<!-- Hero -->
<section class="hero">
	<DataStream />
	<div class="hero-content">
		<p class="hero-greeting">{t(data.messages, 'HomePage', 'hi.value')}</p>
		<p class="hero-tagline">{t(data.messages, 'HomePage', 'dataNerd.value')}</p>
	</div>
</section>

<!-- Values -->
<section class="values-grid">
	<div class="value-card">
		<div class="value-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
		</div>
		<p class="value-text">{t(data.messages, 'HomePage', 'passion.value')}</p>
	</div>

	<div class="value-card">
		<div class="value-icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M9 18V5l12-2v13"></path>
				<circle cx="6" cy="18" r="3"></circle>
				<circle cx="18" cy="16" r="3"></circle>
			</svg>
		</div>
		<p class="value-text">{@html getMusicHtml(t(data.messages, 'HomePage', 'music.value'))}</p>
	</div>
</section>

<!-- Pipeline visual -->
<section class="pipeline">
	<div class="pipeline-track">
		<div class="pipeline-node" style="--node-color: var(--rp-love);">
			<span class="pipeline-label">Extract</span>
		</div>
		<div class="pipeline-line"></div>
		<div class="pipeline-node" style="--node-color: var(--rp-pine);">
			<span class="pipeline-label">Transform</span>
		</div>
		<div class="pipeline-line"></div>
		<div class="pipeline-node" style="--node-color: var(--rp-foam);">
			<span class="pipeline-label">Load</span>
		</div>
		<div class="pipeline-line"></div>
		<div class="pipeline-node" style="--node-color: var(--rp-iris);">
			<span class="pipeline-label">Analyze</span>
		</div>
		<div class="pipeline-line"></div>
		<div class="pipeline-node" style="--node-color: var(--rp-gold);">
			<span class="pipeline-label">Ship</span>
		</div>
	</div>
</section>

<style>
	/* ── Hero ── */
	.hero {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		padding: 4rem 2.5rem;
		margin-bottom: 2.5rem;
		background-color: var(--rp-surface);
		border: 1px solid var(--rp-highlight-med);
		min-height: 260px;
		display: flex;
		align-items: center;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 640px;
	}

	.hero-greeting {
		font-size: 2.5rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		line-height: 1.1;
		color: var(--rp-text);
		margin-bottom: 1rem;
	}

	.hero-tagline {
		font-size: 1.125rem;
		line-height: 1.6;
		color: var(--rp-subtle);
		max-width: 520px;
	}

	/* ── Values grid ── */
	.values-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
		margin-bottom: 2.5rem;
	}

	@media (min-width: 640px) {
		.values-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.value-card {
		background-color: var(--rp-surface);
		border: 1px solid var(--rp-highlight-med);
		border-radius: 12px;
		padding: 1.5rem;
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.value-card:hover {
		border-color: var(--rp-highlight-high);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
	}

	:global(.dark) .value-card:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
	}

	.value-icon {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background-color: var(--rp-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--rp-love);
	}

	.value-text {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--rp-text);
		margin: 0;
	}

	.value-text :global(.music-link) {
		color: var(--rp-pine);
		text-decoration: underline;
		text-underline-offset: 2px;
		transition: color 0.15s ease;
	}

	.value-text :global(.music-link:hover) {
		color: var(--rp-love);
	}

	/* ── Pipeline ── */
	.pipeline {
		margin-bottom: 1rem;
		overflow-x: auto;
	}

	.pipeline-track {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		padding: 1.5rem 0;
		min-width: fit-content;
	}

	.pipeline-node {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.pipeline-node::before {
		content: '';
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: var(--node-color);
		box-shadow: 0 0 10px color-mix(in srgb, var(--node-color) 40%, transparent);
		animation: pulse-glow 2.5s ease-in-out infinite;
	}

	.pipeline-node:nth-child(1)::before { animation-delay: 0s; }
	.pipeline-node:nth-child(3)::before { animation-delay: 0.4s; }
	.pipeline-node:nth-child(5)::before { animation-delay: 0.8s; }
	.pipeline-node:nth-child(7)::before { animation-delay: 1.2s; }
	.pipeline-node:nth-child(9)::before { animation-delay: 1.6s; }

	.pipeline-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--rp-muted);
	}

	.pipeline-line {
		width: 60px;
		height: 2px;
		background: linear-gradient(90deg, var(--rp-highlight-med), var(--rp-highlight-high), var(--rp-highlight-med));
		margin: 0 0.25rem;
		margin-bottom: 1.75rem;
		position: relative;
		overflow: hidden;
	}

	.pipeline-line::after {
		content: '';
		position: absolute;
		top: 0;
		left: -40%;
		width: 40%;
		height: 100%;
		background: linear-gradient(90deg, transparent, var(--rp-love), transparent);
		animation: flow 2s linear infinite;
	}

	.pipeline-node:nth-child(3) + .pipeline-line::after { animation-delay: 0.4s; }
	.pipeline-node:nth-child(5) + .pipeline-line::after { animation-delay: 0.8s; }
	.pipeline-node:nth-child(7) + .pipeline-line::after { animation-delay: 1.2s; }

	@keyframes pulse-glow {
		0%, 100% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.3); opacity: 1; }
	}

	@keyframes flow {
		0% { left: -40%; }
		100% { left: 140%; }
	}

	@media (max-width: 480px) {
		.hero {
			padding: 3rem 1.5rem;
		}
		.hero-greeting {
			font-size: 1.75rem;
		}
		.pipeline-line {
			width: 30px;
		}
	}
</style>
