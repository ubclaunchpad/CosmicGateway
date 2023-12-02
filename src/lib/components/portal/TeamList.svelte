<script lang="ts">
	import { onMount } from 'svelte';
	import MemberIndicator from '../projects/MemberIndicator.svelte';
	let teams = [];

	onMount(() => {
		fetchTeams();
	});

	const fetchTeams = async () => {
		let res = await fetch('http://localhost:5173/api/test/teams');
		teams = (await res.json()).teams;
	};
</script>

<div class="w-full flex flex-col items-center py-2 space-y-2 relative overflow-hidden h-ful">
	<div class="flex flex-row items-center justify-between w-full border-b border-gray-100 py-2">
		<h2 class="text-xl font-bold">Projects</h2>
		<button
			class="w-fit justify-center items-center rounded-md flex flex-row space-x-2 px-3 text-sm py-1"
		>
			See all projects
		</button>
	</div>
	<div class="flex flex-row items-center justify-between w-full gap-6 max-w-7xl">
		{#each teams.slice(0, 4) as team}
			<div class="flex border border-gray-200 rounded-md p-2 pt-4 px-6 bg-bg-50 flex-1">
				<div class="flex flex-col h-56">
					<h3 class="text-xl">{team.name}</h3>
					<div class="flex gap-2 w-36 rounded-full py-2">
						<p class="p-1 px-2 bg-[#1a051d8f] rounded-full text-sm text-white">
							{team.year}
						</p>
					</div>
					<div class="flex flex-col gap-2 items-center flex-1 justify-end items-start">
						<div class="flex flex-col gap-2 w-full items-start">
							<h6 class="text-sm">Members</h6>
							<MemberIndicator count={3} />
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
