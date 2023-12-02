<script lang="ts">
</script>

<main>
	<div class="page">
		<slot />
		<slot name="sidebar" />
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100svh;
		overflow: hidden;
		padding: 0;
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
