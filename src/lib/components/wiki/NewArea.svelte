<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { fetcher } from '$lib/util/fetcher';
	import Button from '../general/Button.svelte';
	import { token } from '$stores/auth';
	import { Input } from '../common/input';

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

<div class="flex flex-col gap-2 w-full flex-1 max-h-full min-h-96 min-w-[400px]">
	<h1 class="pt-1 pb-2 text-lg font-bold">New Area</h1>

	<form class="  rounded-xl w-full flex flex-col flex-1 min-w-[350px]">
		<div class="flex flex-col flex-1 gap-1 w-full">
			<div class="form-control w-full">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Name</span>
				</label>
				<Input
					id="teamName"
					type="text"
					placeholder="Enter area name"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newArea.name}
				/>
			</div>

			<div class="form-control w-full">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Access</span>
				</label>
				<select id="teamName" class="p-2 dark:bg-neutral-700 rounded" bind:value={newArea.name}>
					<option value="1">Public</option>
					<option value="2">Members</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>

			<div class="form-control w-full flex-1"></div>
			<Button
				class="text-md w-full"
				on:click={() => {
					createArea();
				}}>Create</Button
			>
		</div>
	</form>
</div>
