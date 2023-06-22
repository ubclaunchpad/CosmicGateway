<script lang="ts">
</script>

<main>
	<div class="page">
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
		background: var(--color-bg-0);
		padding: 0rem;

		.page {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			overflow: hidden;
			gap: 1rem;

			:global(p) {
				font-size: 0.8rem;
				font-weight: 400;
			}
		}
	}
</style>
