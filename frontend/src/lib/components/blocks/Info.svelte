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
		border: 1px solid var(--color-bg-1);
		border-radius: 6px;
	}
</style>
