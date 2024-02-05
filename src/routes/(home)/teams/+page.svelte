<script lang="ts">
	import TeamIconTemplate from '$lib/components/general/icons/TeamIconTemplate.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
	let year = 'All';
	let years = ['All', '2023', '2022', '2021', '2020']; // temporary
	let teams: string[] = [];
	export let data;

	onMount(() => {
		fetchTeams();
	});

	const fetchTeams = async () => {
		teams = data.teams;
	};
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex justify-between items-center py-3 mb-3">
			<input type="text" placeholder="Search" class="w-80 rounded-md px-4 py-2" />
			<button class="bg-primary-500 text-white rounded-lg px-4 py-2"> New Team </button>
		</div>

		<div
			class="flex justify-between items-center p-3 bg-bg-50 rounded-lg mb-4 border-gray-200 border"
		>
			<h1 class="text-2xl">Teams</h1>
			<div class="flex gap-16 justify-center items-center">
				{#each years as y}
					<button
						class={`rounded-lg px-4 py-2 ${
							year === y ? 'text-white bg-black' : 'text-black bg-transparent'
						}`}
						on:click={() => (year = y)}>{y}</button
					>
				{/each}
			</div>
		</div>

		<ul class="gap-8 gap-y-16 flex flex-wrap justify-center items-center pt-10">
			{#each teams as team}
				<li
					class="flex flex-col justify-center items-center bg-bg-50 rounded-lg shadow-sm relative border border-gray-200 pt-32 pb-10 w-64 h-80"
				>
					<div
						class={`w-36 h-36 rounded-full flex justify-center items-center absolute top-0 transform -translate-x-1/2 -translate-y-1/4 left-1/2 border-2 border-bg-50`}
						style={`background-color: ${team.color}`}
					>
						<TeamIconTemplate />
					</div>
					<div class="flex gap-2 justify-center items-center w-36 h-36 rounded-full py-2">
						<p class="p-1 px-2 bg-[#1A051D] rounded-full text-sm text-white">{team.status}</p>
						<p class="p-1 px-2 bg-[#1a051d8f] rounded-full text-sm text-white">
							{team.year}
						</p>
					</div>
					<h3>{team.name}</h3>
					<a href="/teams/{team}" class="bg-primary-500 rounded-lg px-4 py-2 text-white mt-4">
						View Team
					</a>
				</li>
			{/each}
		</ul>
	</div>
</MainPage>
