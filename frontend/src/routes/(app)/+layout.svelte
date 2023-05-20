<script>
	import '../styles.scss';
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />
</svelte:head>
<main>
	<nav>
		<h1>Launchpad</h1>
		<ul>
			<li><a href="#projects">Teams and Projects</a></li>
			<li><a>Sponsors</a></li>
			<li><a>Resources</a></li>
		</ul>
	</nav>

	<slot />

	<footer>See any problems, or have some feedback? Let us know!</footer>
</main>

<style lang="scss">
	main {
		nav {
			// position: sticky;
			top: 0;
			// border-bottom: 2px solid $base-color-1;
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
						// color: $color-text-0;
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
		width: 100%;
		row-gap: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		min-height: 100svh;
	}

	main > :global(div) {
		flex: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-self: center;
		flex-direction: column;
		height: 100%;
	}
</style>
