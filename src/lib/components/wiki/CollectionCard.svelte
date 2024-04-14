<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { modalPanel } from '$stores/modal';
	import Card from '$lib/components/general/Card.svelte';
	import PlusCircle from '$lib/components/general/icons/PlusCircle.svelte';
	import NewArea from './NewArea.svelte';
	import { useSWR } from 'sswr';
	import { fetchWithAuth } from '$lib/util/fetcher';
	import * as Carousel from '$lib/components/common/carousel/index.js';
	import Icon from '../general/Icon.svelte';
	import FolderIcon from '../general/icons/FolderIcon.svelte';

	const { data } = useSWR(PUBLIC_WIKI_API_URI + '/areas', { fetcher: fetchWithAuth });
</script>

<Card class="bg-transparent">
	<div class="flex items-center gap-3 w-full p-2" slot="title">
		<!-- <h2 class="card-title m-0 p-0">Areas</h2> -->
		<!-- <button
			class="justify-center items-center rounded-full px-0 min-h-0 min-w-0 w-5 h-5 p-0 flex"
			on:click={() => {
				modalPanel.set({
					props: {},
					component: NewArea,
					open: true
				});
			}}
		>
			<PlusCircle />
		</button> -->
	</div>

	<div class="flex overflow-x-scroll space-x-4 w-full justify-center bg-transparent" slot="content">
		{#if !$data}
			<p class="center w-full text-neutral-500 dark:text-neutral-400 flex justify-center">
				Loading...
			</p>
		{:else}
			<Carousel.Root
				opts={{
					align: 'center',
					loop: true
				}}
				class="w-[90%]"
			>
				<Carousel.Content class=" ">
					{#each $data.data as area}
						<Carousel.Item class="md:basis-1/2 lg:basis-1/3">
							<a
								href={`/wiki/${area.name}-${area.id}`}
								class="flex py-3 shadow-sm flex-col items-center bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 h-96 w-full dark:border-neutral-800 flex-shrink-0"
							>
								<div class="flex gap-3 flex-col items-center justify-center flex-1">
									<!-- <Icon class="w-20 absolute">
										<FolderIcon />
									</Icon> -->
									<h3 class="text-lg font-bold flex-1 text-center flex items-center">
										{area.name}
									</h3>
									<p
										class="text-xs text-neutral-500 dark:text-neutral-400 w-full center flex justify-center"
									>
										Last updated: {new Date(area.updatedat).toLocaleDateString()}
									</p>
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
</Card>
