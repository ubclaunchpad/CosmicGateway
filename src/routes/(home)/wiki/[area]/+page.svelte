<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Button from '$lib/components/general/Button.svelte';
	import DocumentModal from '$lib/components/wiki/DocumentModal.svelte';
	import { sidePanel } from '$stores/sidepanel';
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	export let data;
	let area = {
		name: data.name,
		id: data.id,
		areas: [],
		documents: []
	};
	const getAreas = async () => {
		const res = await fetch(`${PUBLIC_WIKI_API_URI}/areas/${data.id}`);
		const area = await res.json();
		return area;
	};

	getAreas().then((data) => {
		area = data;
	});
</script>

<MainPage>
	<div class="flex flex-col gap-6 flex-1" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">{area.name}</h1>
			<div class="flex gap-4">
				<Button
					class=""
					on:click={() => {
						sidePanel.set({
							component: DocumentModal,
							open: true,
							props: { area: 'admin', id: 'test' }
						});
					}}>New Document</Button
				>

				<!-- <Button class="">New Area</Button> -->
			</div>
		</div>

		<Card>
			<div class="flex overflow-x-scroll space-x-4 w-full" slot="content">
				<p class="text-neutral-500 dark:text-neutral-400 text-center w-full">
					At the moment, all documents within an area are viewable by all users. In the future, we
					will add the ability to restrict access to certain areas.
				</p>
			</div>
		</Card>

		<Card>
			<div class="flex flex-col gap-6 w-full" slot="content">
				<div class="flex overflow-x-scroll gap-2 w-full">
					{#each area.areas as subfolder}
						<a
							href="/wiki/{subfolder.name}-{subfolder.id}"
							class="flex p-2 px-4 shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 carousel-item h-fit w-fit dark:border-neutral-800 justify-center items-center"
						>
							{subfolder.name}
						</a>
					{/each}
				</div>
				<div class="flex flex-col gap-2 w-full">
					{#each area.documents as document}
						<a
							href="/wiki/{area.name}-{area.id}/{document.title}-{document.id}"
							class="flex shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 carousel-item h-fit w-full dark:border-neutral-800 p-2"
						>
							<div class="flex sm:flex-col md:flex-row items-center justify-center flex-1 w-full">
								<h3 class="text-md font-medium flex-1 text-left">{document.title}</h3>
								<p class="text-sm text-neutral-500 dark:text-neutral-400">
									Last updated: {new Date(document.updatedat).toLocaleDateString()}
								</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</Card>
	</div>
</MainPage>
