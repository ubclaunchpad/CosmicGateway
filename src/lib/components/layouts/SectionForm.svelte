<section class="wrapper">
	<div class="content">
		<div class="header">
			<slot name="header" />
		</div>
		<slot />
	</div>
	<div class="banner" />
</section>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
		width: 100%;
		padding: 0;
		row-gap: 1rem;

		.banner {
			height: 100%;
			box-shadow: var(--box-shadow-small);
			border-left: 1px solid var(--color-border-0);
			flex: 1;
		}
		.header {
			padding: 0.5rem;
			// background: var(--color-bg-2);
			// box-shadow: var(--box-shadow-small);
			width: 100%;
			:global(h2) {
				font-size: 1.3rem;
				font-weight: 700;
			}
		}

		.content {
			display: flex;
			padding: 1rem 1rem;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			height: 100%;

			max-width: 650px;

			background-color: var(--color-bg-2);
			box-shadow: var(--box-shadow-small);
			overflow-y: scroll;
		}
	}
</style>
