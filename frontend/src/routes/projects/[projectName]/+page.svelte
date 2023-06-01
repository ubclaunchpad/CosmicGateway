<script>
	export let data;
</script>

<article>
	<section class="body">
		<div class="markdown">
			<h1>{data.title}</h1>
			<div id="write">
				<svelte:component this={data.content} />
			</div>
		</div>
	</section>
</article>

<style lang="scss">
	article {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		flex: 1;
		overflow: scroll;
		height: 100%;

		padding: 0.3rem;
		border-radius: 4px;
		column-gap: 1rem;
		position: relative;

		.body {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
