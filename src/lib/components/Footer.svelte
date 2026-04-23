<script lang="ts">
	import Icons from './Icons.svelte';
	import { t, type Locale } from '$lib/i18n';

	interface Props {
		messages: Record<string, unknown>;
		locale: Locale;
	}

	let { messages, locale }: Props = $props();
	
	const cvPdfUrl = $derived(`/${locale}-cv-michael-lemiale-2025.pdf`);
</script>

<footer class="footer">
	<div class="footer-divider"></div>
	<div class="footer-inner">
		<div class="footer-links">
			<a class="footer-btn" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/michael-lemiale/" aria-label="LinkedIn">
				<Icons icon="linkedin" />
				<span>LinkedIn</span>
			</a>
			<a class="footer-btn" rel="noopener noreferrer" target="_blank" href="https://github.com/michael-lemiale" aria-label="GitHub">
				<Icons icon="github" />
				<span>GitHub</span>
			</a>
			<a class="footer-btn" rel="noopener noreferrer" download target="_blank" href={cvPdfUrl} aria-label={t(messages, 'Footer', 'value')}>
				<Icons icon="arrow" />
				<span>{t(messages, 'Footer', 'value')}</span>
			</a>
		</div>
		<p class="footer-copy">Michael Lemiale</p>
	</div>
</footer>

<style>
	.footer {
		margin-top: 4rem;
		padding-bottom: 2rem;
	}

	.footer-divider {
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--rp-highlight-high),
			var(--rp-love),
			var(--rp-highlight-high),
			transparent
		);
		margin-bottom: 2rem;
		opacity: 0.6;
	}

	.footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--rp-subtle);
		text-decoration: none;
		padding: 0.4rem 0.75rem;
		border-radius: 8px;
		border: 1px solid var(--rp-highlight-med);
		background-color: var(--rp-surface);
		transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
	}

	.footer-btn:hover {
		color: var(--rp-love);
		border-color: var(--rp-highlight-high);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	:global(.dark) .footer-btn:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.footer-copy {
		font-size: 0.75rem;
		color: var(--rp-muted);
		margin: 0;
	}

	@media (max-width: 640px) {
		.footer-inner {
			justify-content: center;
		}
		.footer-links {
			width: 100%;
			justify-content: center;
			flex-wrap: wrap;
		}
		.footer-copy {
			width: 100%;
			text-align: center;
		}
	}
</style>
