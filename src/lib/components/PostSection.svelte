<script lang="ts">
	import type { Post } from '$lib/utils';

	interface ProcessedPost extends Post {
		html: string;
		formattedDate: string;
	}

	interface Props {
		posts: ProcessedPost[];
	}

	let { posts }: Props = $props();
</script>

<div class="post-grid">
	{#each posts as post (post.slug)}
		<div class="card">
			<div class="card-header">
				<h2 class="card-title">{post.metadata.title}</h2>
				<span class="card-date">{post.formattedDate}</span>
			</div>
			<article class="card-body prose">
				{@html post.html}
			</article>
		</div>
	{/each}
</div>

<style>
	.post-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.25rem;
		margin-top: 1.5rem;
	}

	@media (min-width: 768px) {
		.post-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	.card {
		background-color: var(--rp-surface);
		border: 1px solid var(--rp-highlight-med);
		border-left: 3px solid var(--rp-love);
		border-radius: 12px;
		padding: 1.5rem;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.card:hover {
		border-color: var(--rp-highlight-high);
		border-left-color: var(--rp-love);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
	}

	:global(.dark) .card:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
	}

	.card-header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.card-title {
		font-size: 1.375rem;
		font-weight: 700;
		letter-spacing: -0.025em;
		line-height: 1.2;
		color: var(--rp-text);
		margin: 0;
	}

	.card-date {
		display: inline-block;
		width: fit-content;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--rp-muted);
		background-color: var(--rp-overlay);
		padding: 0.2rem 0.6rem;
		border-radius: 9999px;
	}

	.card-body {
		font-size: 0.9375rem;
		line-height: 1.6;
	}

	.card-body :global(p:first-child) {
		margin-top: 0;
	}

	.card-body :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
