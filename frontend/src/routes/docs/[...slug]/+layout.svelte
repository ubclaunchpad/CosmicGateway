<script lang="ts">
	import { onMount } from 'svelte';
	let headings = [];

	onMount(() => {
		// Get all the headings with IDs in the document
		headings = Array.from(
			document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
		).map((heading) => ({
			level: parseInt(heading.tagName.charAt(1)),
			text: heading.textContent,
			id: heading.id
		}));
	});
</script>

<div class="blog">
	<slot />

	<div class="right-bar">
		<ul class="index">
			<button>Edit this page</button>
			{#if headings.length > 0}
				<h3>On This Page</h3>
				{#each headings as heading}
					<li><a href={`#${heading.id}`}>{heading.text}</a></li>
				{/each}
			{/if}
		</ul>
	</div>
</div>

<style lang="scss">
	.blog {
		display: flex;
		flex-direction: row;

		.right-bar {
			display: flex;
			flex-direction: column;
			height: fit-content;
			position: sticky;
			top: 0;
			padding: 1rem;
		}
	}
	.index {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		border-left: 2px solid var(--color-link-0);
		display: flex;
		row-gap: 1rem;

		h3 {
			font-size: 0.8rem;
			font-weight: 500;
			color: var(--color-text-1);
			margin-bottom: 0.5rem;
		}

		li {
			text-transform: capitalize;
			list-style: none;
			width: 100%;
			padding-bottom: 1px;

			a {
				border-bottom: 1px solid transparent;
				font-weight: 500;
				font-size: 0.7rem;
				text-decoration: none;
				color: var(--color-text-1);
				width: 100%;
				&:hover {
					color: var(--color-link-0);
					border-bottom: 1px solid var(--color-link-0);
				}
			}
		}
	}
</style>
