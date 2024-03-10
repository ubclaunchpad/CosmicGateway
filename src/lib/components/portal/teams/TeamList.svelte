<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { fade } from 'svelte/transition';
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
				<a
					transition:fade={{ duration: 300 }}
					class="card flex bg-base-100 border dark:border-neutral-800 border-base-200 rounded-lg h-56 w-56 overflow-hidden flex-col flex-shrink-0 relative text-white"
					href={`/teams/${team.label}-${team.id}`}
				>
					<img
						class="h-full w-full object-cover absolute"
						src={team.image_link
							? team.image_link
							: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDPlpGIQ3dL4B72cLafz5O3dpT3O_WzwZ6STP-CHu4w&s'}
						alt={team.label}
					/>
					<div class="absolute h-full w-full opacity-10 bg-[#1c1c1c6f] hover:opacity-60"></div>
					<div
						class="p-2 px-4 pt-4 z-10 pointer-events-none py-2 justify-start items-start flex flex-col flex-2"
					>
						<h2 class="card-title pb-3 h-10">{team.label}</h2>

						<p class="text-neutral-200 overflow-scroll line-clampx-6 flex-1 text-sm">
							{team.description}
						</p>
					</div>
				</a>
			{/each}
		{/if}
	</div>
</div>
