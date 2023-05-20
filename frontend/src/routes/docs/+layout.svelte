<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../styles.scss';
	import { onMount } from 'svelte';
	export let data;

	let url = '';
	onMount(() => {
		url = window.location.href;
	});
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

<main>
	<nav />

	<div id="page">
		<Sidebar>
			<div class="sidebar-content">
				<select>
					<option value="all">LP Docs</option>
					{#each data.directories as directory}
						<option value={directory.toLowerCase()}>{directory}</option>
					{/each}
				</select>
				<input placeholder="Search the docs" />

				<ul class="index">
					{#if headings.length > 0}
						<h3>On This Page</h3>
						{#each headings as heading}
							<li><a href={`#${heading.id}`}># {heading.text}</a></li>
						{/each}
					{/if}
				</ul>
				<button>Edit This Page</button>
			</div>
		</Sidebar>
		<article id="page-content">
			<slot />
			<Footer>See any problems, or have some feedback? Let us know!</Footer>
		</article>
	</div>
</main>

<style lang="scss">
	.sidebar-content {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}
	.index {
		display: flex;
		flex-direction: column;
		padding: 1rem 0.5rem;

		display: flex;
		row-gap: 1rem;

		li {
			text-transform: capitalize;
			list-style: none;
			width: 100%;
			padding-bottom: 10px;

			a {
				border-bottom: 1px solid transparent;
				padding-bottom: 2px;
				font-weight: 500;
				font-size: 0.9rem;
				text-decoration: none;
				color: var(--color-text-1);
				width: 100%;
				&:hover {
					color: var(--color-accent-0);
					border-bottom: 2px solid var(--color-accent-0);
				}
			}
		}
	}
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		min-height: 100svh;

		nav {
			position: sticky;
			top: 0;
			background-color: var(--color-bg-0);
			border-bottom: 1px solid var(--color-bg-1);
			h1 {
				flex: 1;
			}
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 0 0.4rem;
			z-index: 1000;

			ul {
				display: flex;
				column-gap: 1.5rem;

				li {
					text-transform: uppercase;
					list-style: none;
					a {
						text-decoration: none;
					}
				}
			}
		}

		#page {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			flex: 1;
			width: 100%;

			#page-content {
				display: flex;
				flex-direction: column;
				flex: 1;
				justify-content: space-between;

				:global(:first-child) {
					flex: 1;
				}
			}
		}
	}
</style>
