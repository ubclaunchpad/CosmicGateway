<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import { token } from '../../../../stores/auth.js';
	import TeamList from './TeamList.svelte';

	let teams: { [key: number]: Team[] } = {};

	const fetchTeams = async () => {
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + $token
			}
		});

		const data = (await res.json()) as Team[];
		const teamsByYears: { [key: number]: Team[] } = {};
		for (const team of data) {
			for (const year of team.team_terms) {
				if (!teamsByYears[year]) {
					teamsByYears[year] = [];
				}
				teamsByYears[year].push(team);
			}
		}
		teams = teamsByYears;
	};

	fetchTeams();
</script>

<div class="flex flex-col gap-3 p-2">
	{#each Object.entries(teams) as [year, val]}
		<TeamList teams={val} year={Number(year)} />
	{/each}
</div>
