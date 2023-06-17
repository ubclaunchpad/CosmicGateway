<script lang="ts">
	export let link: string;
</script>

<div class="wrapper">
	<button class="action">
		<a href={link}>
			<slot />
		</a>
	</button>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		width: 100%;
		flex: 1;
		justify-content: flex-end;
		padding: 1rem 0rem;
		position: absolute;
		top: 0;
		right: 0;
	}

	.action {
		display: flex;
		flex-direction: column;
		width: fit-content;
		flex: 0;
		padding: 0.4rem 1rem;
		width: fit-content;
		border-radius: 2px;
		background-color: var(--color-accent-1);
		box-shadow: rgba(0, 0, 0, 0.081) 0px 4px 4px;

		:global(a) {
			width: fit-content;
			color: var(--color-text-0-light);
		}
	}
</style>
