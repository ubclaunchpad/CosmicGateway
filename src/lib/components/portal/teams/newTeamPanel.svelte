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

<div class="flex flex-col gap-2 w-full">
	<h1 class="pt-6 text-lg font-bold">New Team</h1>

	<form class="bg-base-100 py-4 rounded-xl w-full max-w-md flex flex-col flex-1 min-w-[600px]">
		<div class="flex flex-col flex-1 gap-4 w-full pb-10">
			<div class="form-control w-full">
				<label for="teamName" class="label">
					<span class="label-text">Team Name</span>
				</label>
				<input
					id="teamName"
					type="text"
					placeholder="Enter team name"
					class="input input-bordered"
					bind:value={newTeam.label}
				/>
			</div>

			<div class="form-control">
				<label for="description" class="label">
					<span class="label-text">Description</span>
				</label>
				<textarea
					id="description"
					placeholder="Enter team description"
					class="textarea textarea-bordered resize-none h-24 w-full
				"
					bind:value={newTeam.description}
				></textarea>
			</div>

			<div class="form-control">
				<label for="imageUrl" class="label">
					<span class="label-text">Image URL</span>
				</label>
				<input
					id="imageUrl"
					type="text"
					placeholder="Enter image URL"
					class="input input-bordered"
					bind:value={newTeam.image_link}
				/>
			</div>

			<div class="form-control">
				<label for="termYear" class="label">
					<span class="label-text">Term Year</span>
				</label>
				<input
					id="termYear"
					type="number"
					placeholder="Enter term year"
					class="input input-bordered"
					bind:value={newTeam.term_year}
				/>
			</div>

			<Button class="text-md" on:click={createTeam}>Create Team</Button>
		</div>
	</form>
</div>
