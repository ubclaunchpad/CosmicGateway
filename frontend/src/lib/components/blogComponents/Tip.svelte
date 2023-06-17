<div class="wrapper">
	<div class="info">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		width: 100%;
		justify-content: center;
		padding: 1rem 0rem;
	}

	.info {
		display: flex;
		flex-direction: column;
		flex: 1;
		max-width: 100%;
		padding: 0.7rem 1.3rem;
		row-gap: 10px;
		border-radius: 4px;
		border-left: 2px solid var(--color-bg-primary);
		border-right: 2px solid var(--color-bg-primary);
		font-size: 0.9rem;
		font-weight: 400;
		:global(*) {
			font-size: 0.3rem;
		}

		background-color: var(--color-bg-primary-faded);
	}
</style>
