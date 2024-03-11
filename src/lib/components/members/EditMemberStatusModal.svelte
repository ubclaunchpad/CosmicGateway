<script lang="ts">
	import type { IUser } from '$lib/types/User';
	import { onMount } from 'svelte';

	export let user: IUser;

	let faculties = ['Science', 'Engineering', 'Business', 'Arts', 'Other'];
	let standings = ['1st', '2nd', '3rd', '4th', '5th', '5th+', 'Graduated'];

	onMount(() => {
		console.log(user);
	});

	let selectedFaculty: string | undefined;

	function handleFacultyChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedFaculty = target.value;
	}

	let selectedStanding: string | undefined;

	function handleStandingChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedStanding = target.value;
	}
</script>

<div>
	<h1 class="text-2xl font-bold mb-4">Edit Student Status</h1>
	<div class="w-100">
		<div class="flex flex-col gap-5">
			<div>
				<label for="faculty" class="text-lg">Faculty</label>
				<select
					class="h-10 min-h-10 !important select select-bordered w-full focus:border-blue-500"
					id="faculty"
					name="faculty"
					bind:value={selectedFaculty}
					on:change={handleFacultyChange}
				>
					{#each faculties as faculty}
						<option>{faculty}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="major" class="text-lg">Major</label>
				<input
					type="text"
					class="w-full py-1 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
					name="major"
					id="major"
					bind:value={user.specialization.label}
				/>
			</div>

			<div class="flex flex-col">
				<label for="club_role" class="text-lg">Standing</label>
				<select
					class="h-10 min-h-10 !important select select-bordered w-full focus:border-blue-500"
					id="club_role"
					name="club_role"
					bind:value={selectedStanding}
					on:change={handleStandingChange}
				>
					{#each standings as standing}
						<option>{standing}</option>
					{/each}
				</select>
			</div>

			<div class="flex justify-end gap-4 mt-5">
				<button class="border border-black rounded-lg py-1 px-3">Cancel</button>
				<button class="bg-green-500 text-white font-bold py-1 px-4 rounded-lg">Save Changes</button>
			</div>
		</div>
	</div>
</div>
