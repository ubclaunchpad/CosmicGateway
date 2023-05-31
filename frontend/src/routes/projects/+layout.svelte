<script>
	import '../styles.scss';
	import '../markdown.scss';
	import ProjectSidePanel from '../../lib/components/layouts/Projects/ProjectSidePanel.svelte';
</script>

<main>
	<div class="page">
		<slot />
		<ProjectSidePanel />
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		height: 100svh;

		.page {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		nav {
			position: sticky;
			z-index: 100000;
			padding: 0 1rem;
			min-height: 4rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			top: 0;
			background-color: var(--color-bg-2);
			border-bottom: 1px solid var(--color-bg-1);

			h1 {
				flex: 1;
				padding: 1rem 0;
			}

			ul {
				display: flex;
				column-gap: 1.5rem;
				align-items: start;

				li {
					list-style: none;
					text-align: left;

					a {
						text-decoration: none;
						&:hover {
							// color: $color-primary;
						}
					}
				}
			}
		}

		footer {
			display: flex;
			width: 100%;
			justify-content: center;
			// border-top: 2px solid $base-color-1;
			padding: 1rem;
		}
	}
</style>
