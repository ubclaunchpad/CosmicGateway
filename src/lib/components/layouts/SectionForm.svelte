<section class="wrapper">
	<div class="header">
		<slot name="header" />
	</div>
	<div class="content">
		<div class="separator" />
		<slot />
	</div>
</section>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		height: 100%;
		width: 100%;
		padding: 0;

		row-gap: 1rem;
		.header {
			padding: 1rem;
			background: var(--color-bg-2);
			box-shadow: var(--box-shadow-small);
			width: 100%;
			border-radius: var(--border-radius-medium);

			:global(h2) {
				font-size: 1.3rem;
				font-weight: 500;
			}
		}

		.content {
			display: flex;
			padding: 1rem 2rem;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: 100%;
			width: 100%;
			max-width: 650px;

			background-color: var(--color-bg-2);
			border-radius: 10px;
			overflow-y: scroll;

			.separator {
				width: 100%;
				height: 1rem;
			}
		}
	}
</style>
