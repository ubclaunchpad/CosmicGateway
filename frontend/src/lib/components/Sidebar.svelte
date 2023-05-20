<section class="sidebar">
	<div>
		<slot />
	</div>
</section>

<style lang="scss">
	.sidebar {
		border-right: 1px solid var(--color-bg-1);
		position: sticky;
		top: 0;
		background-color: var(--color-bg-0);
		padding: 1rem;
		overflow-y: hidden;
		height: 100svh;
		width: 15rem;

		> div {
			overflow-y: scroll;
			height: 100%;
		}
	}
</style>
