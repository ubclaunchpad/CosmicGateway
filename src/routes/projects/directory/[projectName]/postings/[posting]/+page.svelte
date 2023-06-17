<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import ProjectSidePanel from '$lib/components/layouts/Projects/ProjectSidePanel.svelte';
	export let data;
	let body = '';

	async function panelDispatcher(event) {
		console.log(event.detail);
		showStatus = !showStatus;
		body = event.detail.body;
	}
</script>

<MainPage>
	<article slot="main">
		<section class="body">
			<div class="topbar">
				<button disabled>
					<!-- <img src={editIcon} /> -->
					<p>Edit this posting</p>
				</button>
			</div>

			<div class="markdown">
				<div id="write">
					{@html data.code?.code}
				</div>
			</div>
		</section>
	</article>
	<ProjectSidePanel
		apply={true}
		projectId={Number(data.projectId)}
		postingId={data.postId}
		slot="side"
	/>
</MainPage>

<style lang="scss">
	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		width: 100%;

		button {
			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 0.9rem;
			font-weight: 500;
			padding: 0.5rem 0.3rem;
			column-gap: 0.6rem;
			border-radius: 0px;
			color: var(--color-text-1);
			background-color: transparent;
			border-bottom: 1px solid var(--color-text-1);

			&:disabled {
				cursor: not-allowed;
			}

			p {
				padding: 0;
				margin: 0;
			}

			img {
				width: 18px;
			}
		}
	}
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

	dialog {
		width: 100%;
		height: 100%;
		padding: 0;
		z-index: 100;
		background-color: #d50c0cd4;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
