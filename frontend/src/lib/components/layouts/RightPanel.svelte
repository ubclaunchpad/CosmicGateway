<div class={'slide-wrapper'}>
	<div id="slide">
		<div class="content">
			<slot name="article" />
			<slot name="footer" />
		</div>
	</div>
</div>

<style lang="scss">
	.slide-wrapper {
		height: 100%;
		position: relative;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		background-color: var(--color-bg-0);
		padding: 1rem 2rem;
		overflow: hidden;
		flex: 1;
	}
	#slide {
		overflow: hidden;
		// position: absolute;
		background-color: var(--color-bg-0);
		height: 100%;
		padding: 0;
		> div {
			background-color: var(--color-bg-0);
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 0;
			margin: 0;
			overflow: hidden;
		}
	}
	div {
		display: flex;
		flex-direction: column;
	}
</style>
