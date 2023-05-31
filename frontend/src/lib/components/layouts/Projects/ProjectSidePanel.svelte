<script>
	import InProgress from '$lib/components/blocks/InProgress.svelte';
// import Apply from '../../../../routes/projects/Apply.svelte';
// 	import Status from '../../../../routes/projects/Status.svelte';

	let showStatus = true;

	function panelDispatcher(event) {
		showStatus = !showStatus;
	}
</script>

<div id="slide">
	<div class="content">
		<InProgress
		title="Project Application"
		description="This page is still in development. Check back later!"
		>
		<!-- {#if showStatus}
			<Status on:message={panelDispatcher} />
		{:else}
			<Apply on:message={panelDispatcher} />
		{/if} -->
	</InProgress>
	</div>
</div>

<style lang="scss">
	#slide {
		width: fit-content;
		position: sticky;
		overflow-y: hidden;
		border-left: 1px solid var(--color-bg-1);
		background-color: var(--color-bg-0);
		height: 100%;
		padding: 0;
		> div {
			width: 400px;
			background-color: var(--color-bg-0);
		}
	}
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		padding: 1rem;
		border-radius: 5px;
		row-gap: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		overflow-y: hidden;

		:global(article) {
			overflow: scroll;

			> :global(div) {
				padding: 1rem 0;
			}
		}

		:global(footer) {
			display: flex;
			flex-direction: column;
			:global(p) {
				padding: 0.5rem 0 0 0;
				font-weight: 300;
				font-size: 0.8rem;
				font-style: italic;
			}
		}

		> :global(div) {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			flex: 1;
		}

		:global(p) {
			font-size: 0.9rem;
		}

		:global(section) {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1.5rem;
			padding: 0.5rem 0;
			:global(label) {
				width: 200px;
				max-width: 100%;
				font-size: 0.9rem;
			}

			:global(input),
			:global(option),
			:global(select) {
				font-size: 0.9rem;
			}
		}
	}

	:global(button) {
		background-color: var(--color-bg-primary);
		color: var(--color-text-0-light);
		padding: 0.5rem;
		font-weight: 600;
		border-radius: 7px;
		font-size: 1.2rem;
	}

	:global(h1),
	:global(h2),
	:global(h3),
	:global(h4),
	:global(h5),
	:global(h6) {
		padding: 1rem 0;
	}

	:global(h1),
	:global(h2) {
		padding-top: 0;
	}
</style>
