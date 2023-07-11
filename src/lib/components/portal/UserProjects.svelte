<section>
	<div class="topbar header" />
	<div class="content" />
</section>

<style lang="scss">
	section {
		justify-content: space-between;
		flex-direction: column;
		display: flex;
		row-gap: 0.5rem;
		padding-top: 1rem;
		flex: 1;
		width: 100%;
		height: 100%;

		.content {
			background-color: var(--color-bg-2);
			border-radius: var(--border-radius-medium);
			box-shadow: var(--box-shadow-small);
			width: 100%;
			height: 100%;
			flex: 1;
		}
	}

	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		row-gap: 10px;
		padding: 0 0 10px;
	}

	.header {
		&.topbar {
			border-bottom: 1px solid var(--color-bg-1);
		}
	}
</style>
