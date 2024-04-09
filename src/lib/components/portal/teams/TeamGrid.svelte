<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { fade } from 'svelte/transition';
	export let year: number;
	export let teams: Team[] | null = null;
</script>

<div class="flex flex-col gap-3 p-2">
	<h2 class="pl-2 text-lg font-bold">{year}</h2>
	<div class=" justify-start items-center gap-4 flex flex-row overflow-x-scroll w-full">
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
				<a
					transition:fade={{ duration: 300 }}
					class="card flex bg-neutral-50 dark:bg-neutral-800 border dark:border-neutral-800 border-neutral-200 rounded h-56 w-56 overflow-hidden flex-col hover:shadow-xl transition-all duration-300 flex-shrink-0"
					href={`/teams/${team.label}-${team.id}`}
				>
					<img
						class=" w-full object-fill rounded-t max-h-32 bg-nuetral-100 dark:bg-neutral-800"
						src={team.image_link
							? team.image_link
							: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDPlpGIQ3dL4B72cLafz5O3dpT3O_WzwZ6STP-CHu4w&s'}
						alt={team.label}
					/>
					<div class="px-3 z-10 py-3 items-center flex flex-col flex-1">
						<h2
							class=" pb-2 font
						-semibold text-neutral-700 w-full dark:text-neutral-200"
						>
							{team.label}
						</h2>
						<p class="text-xs text-neutral-500 dark:text-neutral-400 truncate w-full line-clamp-2">
							{team.description}
						</p>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>
