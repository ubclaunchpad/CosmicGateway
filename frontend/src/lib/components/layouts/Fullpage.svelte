<script>
	import Navbar from './portal/Navbar.svelte';
</script>

<main>
	<div class="page">
		<div class="sidebar">
			<Navbar />
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
		background: linear-gradient(
			90deg,
			var(--color-bg-primary-faded) 0%,
			var(--color-bg-primary-faded) 100%
		);
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
			.sidebar {
				width: 250px;
				height: 100%;
				background-color: var(--color-bg-0);
				border-radius: 10px;
				box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
				padding: 0;
				margin: 0;
			}
		}
	}
</style>
