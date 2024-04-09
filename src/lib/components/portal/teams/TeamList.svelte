<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import type { Team } from '$lib/types/types';
	import { fade } from 'svelte/transition';
	export let teams: Team[] | null = null;
</script>

<Card class="w-full h-96 md:max-w-96">
	<h1 class="text-sm font-bold" slot="title">Your Teams</h1>
	<div class="flex justify-center items-center flex-1 overflow-scroll" slot="content">
		<div class="flex flex-col gap-3 overflow-hidden flex-1">
			{#if teams !== null}
				<ul
					class=" justify-start items-center gap-0 flex flex-col overflow-scroll w-full border-neutral-100 border-b divide-y divide-neutral-100 dark:border-neutral-800 dark:divide-neutral-800"
				>
					{#each teams as team}
						<li
							transition:fade={{ duration: 300 }}
							class="flex py-2 overflow-hidden w-full justify-between items-center text-neutral-600 dark:text-neutral-200"
						>
							<a
								href={`/teams/${team.label}-${team.id}`}
								class="flex text-sm w-full justify-between items-center underline text-neutral-600 dark:text-neutral-200 underline-offset-4 hover:text-primary-400 dark:hover:text-primary-300"
							>
								{team.label}
							</a>
							<span class="text-xs text-neutral-500 dark:text-neutral-400">{team.team_terms}</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</Card>
