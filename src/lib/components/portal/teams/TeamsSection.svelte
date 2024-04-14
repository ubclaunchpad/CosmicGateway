<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import TeamGrid from './TeamGrid.svelte';
	import { cachedSWR } from '$lib/util/fetcher.js';

	let teamsByYears: { [key: number]: Team[] } = {};
	const { data, error } = cachedSWR.useSWR(PUBLIC_TEAMS_API_URI + '/teams');

	$: if ($data) {
		console.log($data);
		teamsByYears = $data.reduce((acc, team) => {
			const year = team.year;
			if (!acc[year]) acc[year] = [];
			acc[year].push(team);
			return acc;
		}, {});
	}
</script>

<div class="flex flex-col gap-3 p-2">
	{#if $error}
		<p>Error: {$error.message}</p>
	{:else if !$data}
		<p>Loading...</p>
	{:else}
		{#each Object.entries(teamsByYears) as [year, val]}
			<TeamGrid teams={val} year={Number(year)} />
		{/each}
	{/if}
</div>
