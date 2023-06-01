<script lang="ts">
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Sidebar from '$lib/components/layouts/LeftPanel.svelte';
	import '../styles.scss';
	import '../markdown.scss';
	export let data;
</script>

<main>
	<nav />

	<div id="page">
		<Sidebar>
			<div class="sidebar-content">
				<h1>Launchpad Docs</h1>
				<ul class="directory-list">
					{#each data.directories as directory}
						<li>
							{directory.name}
							{#if directory.files.length > 0}
								<ul class="file-list">
									{#each directory.files as file}
										<li><a href="s">{file}dd</a></li>
									{/each}
								</ul>
							{/if}
							{#if directory.directories.length > 0}
								<ul class="subdirectory-list">
									{#each directory.directories as subDirectory}
										<li>
											{subDirectory.name}
											{#if subDirectory.files.length > 0}
												<ul class="file-list">
													{#each subDirectory.files as file}
														<li><a href="s">{file}dd</a></li>
													{/each}
												</ul>
											{/if}
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</Sidebar>
		<article id="page-content">
			<slot />
			<Footer>
				<div class="footer-content">
					See any problems, or have some feedback? Let us know!
					<button>Edit</button>
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
		color: var(--color-text-1);

		h1 {
			background: linear-gradient(to right, var(--color-bg-primary), var(--color-bg-primary-dark));
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		.directory-list {
			list-style-type: none;
			font-weight: 500;
			text-transform: capitalize;
			padding-bottom: 1rem;
			> li {
				padding-bottom: 1rem;
				border-bottom: 1px solid var(--color-bg-1);
				font-weight: 400;
			}
		}

		.subdirectory-list {
			padding-left: 1rem;
			list-style-type: none;
			padding-bottom: 0.3rem;
		}

		.file-list {
			padding-left: 1rem;
			list-style-type: none;
			margin: 4px;

			a {
				text-decoration: none;
				color: var(--color-accent-1);
				&:hover {
					text-decoration: underline;
				}
			}
		}

		li {
			margin-bottom: 0.5rem;
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
				:global(> :first-child) {
					flex: 1;
				}
			}
		}
	}
</style>
