<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Button from '$lib/components/general/Button.svelte';
	import { modalPanel } from '../../../../stores/modal';

	let newTeam = {
		label: '',
		description: '',
		meta_data: {
			links: []
		},
		term_year: 2022,
		image_link: ''
	};

	async function createTeam() {
		modalPanel.set({
			open: false,
			component: null,
			props: {}
		});
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newTeam)
		});
	}
</script>

<div class="flex flex-col gap-2 w-full flex-1">
	<h1 class="pt-6 text-lg font-bold">New Team</h1>
	<form class=" py-4 rounded-xl w-full max-w-md flex flex-col flex-1 min-w-[600px]">
		<div class="flex flex-col flex-1 gap-4 w-full pb-10">
			<div class="form-control w-full">
				<label for="teamName" class="label">
					<span class="label-text dark:text-neutral-200">Team Name</span>
				</label>
				<input
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
				<textarea
					id="description"
					placeholder="Enter team description"
					class="textarea textarea-bordered resize-none h-24 w-full p-2 dark:bg-neutral-700 rounded
				"
					bind:value={newTeam.description}
				></textarea>
			</div>

			<div class="form-control">
				<label for="imageUrl" class="label">
					<span class="label-text dark:text-neutral-200">Image URL</span>
				</label>
				<input
					id="imageUrl"
					type="text"
					placeholder="Enter image URL"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newTeam.image_link}
				/>
			</div>

			<div class="form-control">
				<label for="termYear" class="label">
					<span class="label-text dark:text-neutral-200">Term Year</span>
				</label>
				<input
					id="termYear"
					type="number"
					placeholder="Enter term year"
					class="p-2 dark:bg-neutral-700 rounded"
					bind:value={newTeam.term_year}
				/>
			</div>

			<Button class="text-md w-full" on:click={createTeam}>Create Team</Button>
		</div>
	</form>
</div>
