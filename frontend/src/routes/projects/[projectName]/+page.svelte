<script>
	export let data;
</script>

<div class="page">
	<article>
		<section class="body">
			<div class="topbar">
				<p />
				<!-- <h1>Project Name</h1> -->
				<button>Interested in joining?</button>
			</div>

			<div class="markdown">
				<h1>{data.title}</h1>
				<div id="write">
					<svelte:component this={data.content} />
				</div>
			</div>
		</section>
	</article>
</div>

<style lang="scss">
	article {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		flex: 1;
		overflow: visible;

		padding: 0.3rem;
		border-radius: 4px;
		column-gap: 1rem;
		position: relative;

		.body {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.board {
				max-width: 750px;
			}
		}
		.outline {
			// position: sticky;
			display: flex;
			flex-direction: column;
			top: 0;
			// border-right: 2px solid $base-color-1;
			min-width: 10rem;
			padding: 1rem;
			height: 100%;
			flex: 1;
		}
	}

	.topbar {
		top: 0;
		display: flex;
		position: sticky;
		justify-content: space-between;
		width: 100%;
		max-width: 850px;
		align-items: flex-start;

		button {
			padding: 0.4rem 1rem;
			background-color: blue;
			border-radius: 3px;
			// color: $color-text-0;
			font-size: 1rem;
			font-weight: 500;
		}
	}

	.board {
		h2 {
			padding: 1rem 0rem;
		}

		display: flex;
		flex-direction: column;
		max-width: 1500px;
		width: 100%;
		border-radius: 5px;
		padding: 2rem 1rem;
	}
</style>
