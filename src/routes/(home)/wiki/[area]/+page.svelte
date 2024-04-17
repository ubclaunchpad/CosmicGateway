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
			<h1 class="text-xl font-semibold">{area.name}</h1>
			<div class="flex gap-4">
				<Button
					class="flex gap-2 justify-center items-center rounded"
					on:click={() => {
						sidePanel.set({
							component: null,
							open: true,
							props: { area: { id: area.id, name: area.name } }
						});
					}}
				>
					Info
				</Button>
			</div>
		</div>
		<Card class=" border border-neutral-100 flex flex-col gap-6   w-full h-full">
			<div class="flex flex-col px-3 gap-6 w-full h-full" slot="content">
				{#if area.description}
					{area.description}
				{:else}
					<p class="text-neutral-500 dark:text-neutral-400 center w-full">
						No description available
					</p>
				{/if}
			</div>
		</Card>

		<Card class="lex flex-col gap-6 w-full h-full border border-neutral-100">
			<div class="flex flex-col gap-6 w-full h-full" slot="content">
				<div class="flex gap-4 items-center w-full justify-end">
					<div class="flex w-full justify-end gap-1">
						<Button
							class=""
							on:click={() => {
								modalPanel.set({
									component: NewDocument,
									open: true,
									props: { area: { id: area.id, name: area.name } }
								});
							}}>Upload</Button
						>
						<Button
							class=""
							on:click={() => {
								modalPanel.set({
									component: NewDocument,
									open: true,
									props: { area: { id: area.id, name: area.name } }
								});
							}}>Create</Button
						>
					</div>
				</div>

				{#if area.areas.length > 0}
					<div class="flex flex-row gap-2 w-full">
						{#each area.areas as subfolder, i}
							<a
								href="/wiki/{subfolder.name}-{subfolder.id}"
								class="flex flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 h-fit w-fit dark:border-neutral-800 p-2"
								transition:fade={{ duration: 200, delay: 0 + i * 50 }}
							>
								<div class="flex sm:flex-col md:flex-row items-center justify-center w-fit">
									<div class="flex items-center justify-center w-fit gap-3">
										<FolderIcon />
										<h3 class="text-md font-medium flex-1 text-left">{subfolder.name}</h3>
									</div>
									<!-- <p class="text-sm text-neutral-500 dark:text-neutral-400">
							Last updated: {new Date(subfolder.updatedat).toLocaleDateString()}
						</p> -->
								</div>
							</a>
						{/each}
					</div>
				{/if}
				<div class="flex flex-col gap-2 w-full">
					{#each area.documents as document, i}
						<a
							href="/wiki/{area.name}-{area.id}/{document.title}-{document.id}"
							class="flex flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-neutral-200 h-fit w-full dark:border-neutral-800 p-2"
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
