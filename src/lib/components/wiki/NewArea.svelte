<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { fetcher } from '$lib/util/fetcher';
	import Button from '../general/Button.svelte';
	import { token } from '$stores/auth';

	let newArea = {
		name: ''
	};

	const createArea = async () => {
		await fetcher({
			URI: `${PUBLIC_WIKI_API_URI}/areas`,
			requestInit: {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer  ${$token}`
				},
				body: JSON.stringify({ name: newArea.name })
			},
			notifySuccess: {}
		});
	};
</script>

<div class="flex flex-col gap-2 w-full flex-1 max-h-full min-h-96 min-w-[500px]">
	<h1 class="pt-1 pb-2 text-lg font-bold">New Area</h1>

	<form class="  rounded-xl w-full flex flex-col flex-1 min-w-[350px]">
		<div class="flex flex-col flex-1 gap-4 w-full">
			<div class="form-control w-full flex-1">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Name</span>
				</label>
				<input
					id="teamName"
					type="text"
					placeholder="Enter area name"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newArea.name}
				/>
			</div>

			<Button
				class="text-md w-full"
				on:click={() => {
					createArea();
				}}>Create</Button
			>
		</div>
	</form>
</div>
