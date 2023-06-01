<section class="wrapper">
	<div class="content">
		<slot name="header" />
		<div class="separator" />
		<slot />
	</div>
</section>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;

		.content {
			display: flex;
			padding: 1rem 2rem;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: 100%;
			width: 100%;
			max-width: 600px;
			max-height: 800px;
			background-color: var(--color-bg-0);
			border-radius: 10px;
			box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

			.separator {
				width: 100%;
				height: 1px;
				background-color: var(--color-bg-1);
				margin: 1rem 0;
			}
		}
	}
</style>
