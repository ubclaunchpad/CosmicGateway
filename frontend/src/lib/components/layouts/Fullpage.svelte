<script>
	import Navbar from './portal/Navbar.svelte';
	let showNav = true;
</script>

<main>
	<div class="page">
		<div class="side-bar-wrapper">
			<button on:click={() => (showNav = !showNav)} />
			{#if showNav}
				<div class="sidebar">
					<Navbar />
				</div>
			{/if}
		</div>

		<slot />
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
		overflow: hidden;
		background: linear-gradient(90deg, var(--color-bg-1) 0%, var(--color-bg-1) 100%);
		padding: 0.5rem;
		.page {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			overflow: hidden;
			column-gap: 1rem;
			.side-bar-wrapper {
				position: relative;
				height: 100%;

				button {
					position: absolute;
					top: 50%;
					left: 100%;
					transform: translate(-50%, -50%);
					z-index: 100;
					height: 5rem;
					border-radius: 4px;

					background-color: var(--color-bg-primary-faded);
					width: 12px;

					&:hover {
						cursor: pointer;
						border: 3px solid var(--color-bg-primary-faded);
					}
				}
			}

			.sidebar {
				width: 250px;
				height: 100%;
				background-color: var(--color-bg-0);
				border-radius: 4px;
				box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
				padding: 0;
				margin: 0;
			}
		}
	}
</style>
