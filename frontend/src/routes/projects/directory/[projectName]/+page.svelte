<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import ProjectSidePanel from '$lib/components/layouts/Projects/ProjectSidePanel.svelte';
	export let data;
	let showStatus = false;
	let body = '';

	async function panelDispatcher(event) {
		console.log(event.detail);
		// showStatus = !showStatus;
		// body = event.detail.body;
		// body = await compile(`# Hello friends`);
	}
</script>

<MainPage>
	<article slot="main">
		<section class="body">
			{#if showStatus}
				<div class="markdown">
					<!-- <h1>{data.title}</h1> -->
					<div id="write">
						{body}
					</div>
				</div>
			{:else}
				<div>edit this page on github</div>
				<div class="markdown">
					<!-- <h1>{data.title}</h1> -->
					<div id="write">
						<svelte:component this={data.content} />
					</div>
				</div>
			{/if}
		</section>
	</article>

	<ProjectSidePanel on:message={panelDispatcher} projectId={data.id} slot="side" />
</MainPage>

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
