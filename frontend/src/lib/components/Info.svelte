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
	}

	.info {
		display: flex;
		flex-direction: column;
		max-width: 750px;
		padding: 0.7rem 0.9rem;
		row-gap: 10px;
		border: 1px solid var(--color-bg-1);
		/* box-shadow: rgba(0, 0, 0, 0.081) 0px 4px 4px; */
		border-radius: 6px;
	}
</style>
