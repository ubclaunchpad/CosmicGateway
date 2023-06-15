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
		flex-wrap: wrap;
	}

	.info {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0.7rem 0.9rem;
		row-gap: 10px;
		/* border: 1px solid var(--color-border-2); */
		color: var(--color-text-1);
		background-color: var(--color-bg-2);
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
		border-radius: 6px;
	}
</style>
