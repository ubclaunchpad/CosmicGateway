<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../styles.scss';
	import './markdown.scss';
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
					<!-- <option disabled selected>Select a file or directory</option> -->
					{#each data.directories as directory}
						<optgroup label={directory.name}>
							{#each directory.files as file}
								<option value={file}>{file}</option>
							{/each}
							{#if directory.directories.length > 0}
								{#each directory.directories as subDirectory}
									<optgroup label={subDirectory.name}>
										{#each subDirectory.files as file}
											<option value={file}>{file}</option>
										{/each}
									</optgroup>
								{/each}
							{/if}
						</optgroup>
					{/each}
				</select>

				<ul class="index">
					{#if headings.length > 0}
						<h3>On This Page</h3>
						{#each headings as heading}
							<li><a href={`#${heading.id}`}># {heading.text}</a></li>
						{/each}
					{/if}
				</ul>
			</div>
		</Sidebar>
		<article id="page-content">
			<slot />
			<Footer>
				<div class="footer-content">
					See any problems, or have some feedback? Let us know!
					<button>Edit This Page</button>
				</div>
			</Footer>
		</article>
	</div>
</main>

<style lang="scss">
	.sidebar-content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 2rem;

		select {
			border: 2px solid var(--color-bg-1);
			background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")
				no-repeat;
			background-position: calc(100% - 0.75rem) center !important;
			-moz-appearance: none !important;
			-webkit-appearance: none !important;
			appearance: none !important;
			padding-right: 2rem !important;
		}
	}
	.index {
		display: flex;
		flex-direction: column;
		padding: 1rem 1rem;
		border-bottom: 2px solid var(--color-bg-primary-faded);
		border-top: 2px solid var(--color-bg-primary-faded);
		display: flex;
		row-gap: 1rem;

		h3 {
			font-size: 1rem;
			font-weight: 500;
			color: var(--color-text-1);
			margin-bottom: 0.5rem;
		}

		li {
			text-transform: capitalize;
			list-style: none;
			width: 100%;
			padding-bottom: 4px;

			a {
				border-bottom: 1px solid transparent;
				padding-bottom: 2px;
				font-weight: 500;
				font-size: 0.9rem;
				text-decoration: none;
				color: var(--color-text-1);
				width: 100%;
				&:hover {
					color: var(--color-link-0);
					border-bottom: 2px solid var(--color-link-0);
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
