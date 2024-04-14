<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { fade } from 'svelte/transition';
	export let year: number;
	export let teams: Team[] | null = null;
	import * as Carousel from '$lib/components/common/carousel/index.js';
</script>

<div class="flex flex-col gap-3 p-2 px-10">
	<h2 class="pl-2 text-lg font-bold">{year}</h2>
	<div class=" justify-start items-center gap-4 flex flex-row w-full">
		{#if teams}
			<Carousel.Root
				opts={{
					align: 'start'
				}}
				class="w-full"
			>
				<Carousel.Content class=" ">
					{#each teams as team}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<a
								transition:fade={{ duration: 300 }}
								class="card flex bg-neutral-50 dark:bg-neutral-800 border dark:border-neutral-800 border-neutral-200 h-72 rounded overflow-hidden flex-col hover:shadow-xl transition-all duration-300 flex-shrink-0"
								href={`/teams/${team.label}-${team.id}`}
							>
								<div class="px-3 z-10 py-3 items-center justify-center flex flex-col flex-1">
									<h2
										class=" pb-2 font text-center text-lg
						-bold text-neutral-700 w-full dark:text-neutral-200"
									>
										{team.label}
									</h2>
								</div>
							</a>
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Next />
				<Carousel.Previous />
			</Carousel.Root>
		{/if}
	</div>
</div>
