<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import Card from '$lib/components/general/Card.svelte';
	import { cachedSWR } from '$lib/util/fetcher';
	const { data } = cachedSWR.useSWR(PUBLIC_WIKI_API_URI + '/areas');
</script>

<Card class="bg-transparent">
	<div class="flex items-center gap-3 w-full p-2" slot="title">
		<h2 class="card-title m-0 p-0">Areas</h2>
	</div>

	<div class="flex overflow-x-scroll space-x-4 w-full justify-center bg-transparent" slot="content">
		{#if !$data}
			<p class="center w-full text-neutral-500 dark:text-neutral-400 flex justify-center">
				Loading...
			</p>
		{:else}
			<div class="flex flex-row flex-wrap gap-4 w-full items-center">
				{#each $data.data as area}
					<a
						href={`/wiki/${area.name}-${area.id}`}
						class="flex py-3 shadow-sm flex-col items-center bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 min-h-56 min-w-56 dark:border-neutral-800 flex-shrink-0"
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
				{/each}
			</div>
		{/if}
	</div>
</Card>
