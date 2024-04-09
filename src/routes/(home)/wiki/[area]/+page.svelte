<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Button from '$lib/components/general/Button.svelte';
	import DocumentModal from '$lib/components/wiki/DocumentModal.svelte';
	import { sidePanel } from '$stores/sidepanel';
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { modalPanel } from '$stores/modal.js';
	import NewDocument from '$lib/components/wiki/NewDocument.svelte';
	import { token } from '$stores/auth';
	import { fade } from 'svelte/transition';
	import FolderIcon from '$lib/components/general/icons/FolderIcon.svelte';
	import FileIcon from '$lib/components/general/icons/FileIcon.svelte';
	export let data;
	let area = {
		name: data.name,
		id: data.id,
		areas: [],
		documents: []
	};
	const getAreas = async () => {
		const res = await fetch(`${PUBLIC_WIKI_API_URI}/areas/${data.id}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${$token}`
			}
		});
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
			<div class="flex gap-4"></div>
		</div>

		<Card class="flex flex-col gap-6 w-full h-full">
			<div class="flex flex-col gap-6 w-full h-full" slot="content">
				<div class="flex gap-4 items-center w-full justify-end">
					<div class="flex w-full justify-end gap-4">
						<Button
							class=""
							on:click={() => {
								modalPanel.set({
									component: NewDocument,
									open: true,
									props: { area: { id: area.id, name: area.name } }
								});
							}}>Create Document</Button
						>
					</div>
				</div>

				<div class="flex flex-col gap-2 w-full">
					{#each area.areas as subfolder}
						<a
							href="/wiki/{subfolder.name}-{subfolder.id}"
							class="flex shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 h-fit w-full dark:border-neutral-800 p-2"
							transition:fade={{ duration: 200, delay: 0 + i * 50 }}
						>
							<div class="flex sm:flex-col md:flex-row items-center justify-center flex-1 w-full">
								<div
									class="flex items-center justify-center w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-full"
								>
									<FolderIcon />
									<h3 class="text-md font-medium flex-1 text-left">{subfolder.name}</h3>
								</div>
								<!-- <p class="text-sm text-neutral-500 dark:text-neutral-400">
							Last updated: {new Date(subfolder.updatedat).toLocaleDateString()}
						</p> -->
							</div>
						</a>
					{/each}
					{#each area.documents as document, i}
						<a
							href="/wiki/{area.name}-{area.id}/{document.title}-{document.id}"
							class="flex shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 h-fit w-full dark:border-neutral-800 p-2"
							transition:fade={{ duration: 200, delay: 0 + i * 50 }}
						>
							<div
								class="flex sm:flex-col md:flex-row items-center justify-center flex-1 w-full text-neutral-600 dark:text-neutral-300"
							>
								<div class="flex items-center justify-center w-full gap-3">
									<FileIcon />
									<h3 class="text-md font-medium flex-1 text-left">{document.title}</h3>
								</div>

								<p class="text-xs text-neutral-500 dark:text-neutral-400 flex-shrink-0">
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
