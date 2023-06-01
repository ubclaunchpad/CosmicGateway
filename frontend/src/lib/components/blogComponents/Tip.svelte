<div class="wrapper">
	<div class="info">
		<slot />
	</div>
</div>

<style>
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
		padding: 0.7rem 0.9rem;
		row-gap: 10px;
		border-left: 2px solid var(--color-bg-primary-dark);
		border-right: 2px solid var(--color-bg-primary-dark);

		background-color: var(--color-bg-info);
	}
</style>
