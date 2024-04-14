<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import {Input} from '$lib/components/common/input';
	import {Textarea} from '$lib/components/common/textarea';
	import Button from '$lib/components/general/Button.svelte';
	import { fetcher } from '$lib/util/fetcher';

	let newTeam = {
		label: '',
		description: '',
		meta_data: {
			links: []
		},
		year: 2022
	};

	async function createTeam() {
		const res = await fetcher({
			URI: `${PUBLIC_TEAMS_API_URI}/teams`,
			requestInit: {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newTeam)
			},

			notifySuccess: {
				title: 'Team Created',
				message: 'Team has been creted successfully',

				type: 'success'
			}
		});
	}
</script>

<div class="flex flex-col gap-2 w-full flex-1">
	<h1 class=" text-lg font-bold">New Team</h1>
	<form class="  rounded-xl w-full max-w-md flex flex-col flex-1 min-w-[600px]">
		<div class="flex flex-col flex-1 gap-4 w-full">
			<div class="form-control w-full">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Team Name</span>
				</label>
				<Input
					id="teamName"
					type="text"
					placeholder="Enter team name"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newTeam.label}
				/>
			</div>

			<div class="form-control">
				<label for="description" class="label">
					<span class="label-text dark:text-neutral-200">Description</span>
				</label>
				<Textarea
					id="description"
					placeholder="Enter team description"
					class="textarea textarea-bordered resize-none h-24 w-full p-2 dark:bg-neutral-700 rounded"
					bind:value={newTeam.description}
				/>
			</div>

			<div class="form-control">
				<label for="termYear" class="label">
					<span class="label-text dark:text-neutral-200">Term Year</span>
				</label>
				<Input
					id="termYear"
					type="number"
					placeholder="Enter term year"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newTeam.year}
				/>
			</div>
			<div class="flex justify-end w-full">
				<Button class="text-md py-2 px-4 " on:click={createTeam}>Create Team</Button>
			</div>
		</div>
	</form>
</div>
