<section class="sidebar">
	<div>
		<slot />
	</div>
</section>

<style lang="scss">
	.sidebar {
		border-right: 1px solid var(--color-border-1);
		position: sticky;
		background-color: var(--color-bg-1);
		top: 0;
		overflow-y: hidden;
		overflow-x: hidden;
		height: 100svh;
		min-width: 15rem;
		width: max-content;
		max-width: 100%;

		> div {
			overflow: scroll;
			height: 100%;
		}
	}
</style>
