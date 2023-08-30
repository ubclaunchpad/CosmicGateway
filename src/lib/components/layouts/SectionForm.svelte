<section class="wrapper">
	<div class="content">
		<div class="header">
			<slot name="header" />
		</div>
		<slot />
	</div>
</section>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		background: var(--color-bg-0);
		height: 100%;
		width: 100%;

		row-gap: 1rem;
		.header {
			padding: 0.5rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.4rem;
			:global(h2) {
				font-size: 1.3rem;
				font-weight: 700;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: 100%;
			max-width: 100%;
			width: 700px;
			padding: 1rem;

			background-color: var(--color-bg-2);
			box-shadow: var(--box-shadow-small);
			overflow-y: scroll;
			border-radius: var(--border-radius-small);

			@media screen and (max-width: 900px) {
				width: 100%;
			}
		}
	}
</style>
