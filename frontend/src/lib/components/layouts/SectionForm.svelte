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
		align-items: flex-start;
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
