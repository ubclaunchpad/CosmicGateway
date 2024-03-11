<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { fade } from 'svelte/transition';
	import TeamCard from './TeamCard.svelte';
	export let year: number;
	export let teams: Team[] | null = null;
</script>

<div class="flex flex-col gap-3 p-2">
	<h2 class="pl-2 text-lg font-bold">{year}</h2>
	<div class=" justify-start items-center gap-4 flex flex-row overflow-scroll w-full">
		{#if teams === null}
			{#each Array(5) as _}
				<div
					transition:fade={{ duration: 300 }}
					class="card flex bg-base-100 border border-base-200 rounded h-48 w-48 overflow-hidden flex-col"
				>
					<div class="skeleton h-full w-72"></div>
				</div>
			{/each}
		{:else}
			{#each teams as team}
				<TeamCard {team} />
			{/each}
		{/if}
	</div>
</div>
