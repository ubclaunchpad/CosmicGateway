<script lang="ts">
	import type { IUser } from '$lib/types/User';
	import { onMount } from 'svelte';

	export let user: IUser;

	let roles = ['Admin', 'Developer', 'Designer'];
	let teams = ['🪐 Cosmic Gateway', '🍏 Nom Appetite', '📄 ClassSync'];

	onMount(() => {
		console.log(user);
	});

	let selectedRole: string | undefined;

	function handleRoleChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedRole = target.value;
	}

	let selectedTeam: string | undefined;

	function handleTeamChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedTeam = target.value;
	}
</script>

<div>
	<h1 class="text-2xl font-bold mb-4">Edit Profile</h1>
	<div class="flex gap-12">
		<div class="w-1/5 flex flex-col gap-2">
			<h2 class="text-lg">Profile Photo</h2>
			<div class="w-100 h-40 bg-gray-200 rounded-md"></div>
			<button class="border border-black rounded-lg py-1">Upload Photo</button>
			<button class="text-blue-600">Remove Photo</button>
		</div>
		<div class="w-4/5 flex flex-col gap-5">
			<div>
				<label for="full_name" class="text-lg">Full Name</label>
				<input
					type="text"
					class="w-full py-1 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
					name="full_name"
					id="full_name"
					bind:value={user.full_name}
				/>
			</div>

			<div>
				<label for="email" class="text-lg">Email</label>
				<input
					type="email"
					class="w-full py-1 px-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
					name="email"
					id="email"
					bind:value={user.email}
				/>
			</div>

			<div class="flex flex-col">
				<label for="club_role" class="text-lg">Club Role</label>
				<select
					class="h-10 min-h-10 !important select select-bordered w-full focus:border-blue-500"
					id="club_role"
					name="club_role"
					bind:value={selectedRole}
					on:change={handleRoleChange}
				>
					{#each roles as role}
						<option>{role}</option>
					{/each}
				</select>
			</div>

			<div class="flex flex-col">
				<label for="team" class="text-lg">Team</label>
				<select
					class="h-10 min-h-10 !important select select-bordered w-full focus:border-blue-500"
					id="team"
					name="team"
					bind:value={selectedTeam}
					on:change={handleTeamChange}
				>
					{#each teams as team}
						<option>{team}</option>
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
