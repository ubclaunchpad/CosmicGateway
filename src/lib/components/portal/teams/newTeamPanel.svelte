<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import { sidePanel } from '../../../../stores/sidepanel';

	let newTeam = {
		label: '',
		description: '',
		meta_data: {
			links: []
		},
		image_link: ''
	};

	async function createTeam() {
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newTeam)
		});
		const data = await res.json();

		sidePanel.set({
			open: false,
			component: null,
			props: {}
		});
	}
</script>

<h1 class="pt-6 text-lg font-bold">New Team</h1>

<form class="bg-base-100 py-4 rounded-xl w-full max-w-md flex flex-col flex-1">
	<div class="flex flex-col flex-1 gap-4">
		<div class="form-control">
			<label class="label">
				<span
					class="label-text
            ">Team Name</span
				>
			</label>
			<input type="text" class="input input-bordered" bind:value={newTeam.label} />
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text">Description</span>
			</label>
			<textarea class="textarea textarea-bordered" bind:value={newTeam.description}></textarea>
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text">Image URL</span>
			</label>
			<input type="text" class="input input-bordered" bind:value={newTeam.image_link} />
		</div>
	</div>
	<button
		class="btn btn-primary p-1 text-md"
		on:click={() => {
			createTeam();
		}}>Create Team</button
	>
</form>
