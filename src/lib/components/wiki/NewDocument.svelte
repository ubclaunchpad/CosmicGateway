<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { fetcher } from '$lib/util/fetcher';
	import Button from '../general/Button.svelte';
	import { token } from '$stores/auth';
	import Card from '../general/Card.svelte';
	export let area = {};
	let newDocument = {
		title: '',
		content: ''
	};

	const createDocument = async () => {
		await fetcher({
			URI: `${PUBLIC_WIKI_API_URI}/areas/${area.id}/docs`,
			requestInit: {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer  ${$token}`
				},
				body: JSON.stringify(newDocument)
			},
			notifySuccess: {
				title: 'Document Created',
				message: 'Document has been created successfully',
				type: 'success'
			}
		});
	};

	function getAreas() {
		return fetcher({
			URI: `${PUBLIC_WIKI_API_URI}/areas`,
			requestInit: {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${$token}`
				}
			}
		});
	}
</script>

<div class="flex flex-col gap-2 w-full flex-1 max-h-full min-h-96 min-w-[500px]">
	<h1 class="pt-1 pb-2 text-lg font-bold">New Document</h1>

	<form class="  rounded-xl w-full flex flex-col flex-1 min-w-[350px]">
		<div class="flex flex-col flex-1 gap-4 w-full">
			<Card>
				<div class="flex flex-col gap-4 w-full p-1" slot="content">
					{#if area.id}
						<p>
							This document will be created in <span class="font-medium pr-2">{area.name}</span>
							<Button
								class="text-sm w-fit"
								variant="secondary"
								on:click={() => {
									area = {};
								}}>Change Area</Button
							>
						</p>
					{:else}
						<p>Select an area to create a document in.</p>
						{#if !area.id}
							{#await getAreas() then res}
								<select
									bind:value={area}
									class="select select-bordered w-full dark:bg-neutral-700 rounded"
								>
									{#each res.data as area}
										<option value={area}>{area.name}</option>
									{/each}
								</select>
							{/await}
						{/if}
					{/if}
				</div>
			</Card>

			<div class="form-control w-full flex-1">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Document Title</span>
				</label>
				<input
					id="teamName"
					type="text"
					placeholder="Enter a title"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newDocument.title}
				/>
			</div>

			<Button
				class="text-md w-full"
				on:click={() => {
					createDocument();
				}}>Create</Button
			>
		</div>
	</form>
</div>
