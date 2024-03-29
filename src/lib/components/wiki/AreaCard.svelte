<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import Card from '../general/Card.svelte';
	let areas = [];
	const getAreas = async () => {
		const res = await fetch(PUBLIC_WIKI_API_URI + '/areas');
		const areas = await res.json();
		return areas;
	};

	getAreas().then((data) => {
		areas = data.data;
	});
</script>

<Card>
	<h2 class="card-title" slot="title">Areas</h2>
	<div class="flex overflow-x-scroll space-x-4 pt-4 w-full" slot="content">
		{#each areas as area}
			<a
				href={`/wiki/${area.name}-${area.id}`}
				class="flex p-3 shadow-sm flex-col items-center bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 h-56 w-56 dark:border-neutral-800 flex-shrink-0"
			>
				<div class="flex flex-col items-center justify-center flex-1">
					<h3 class="text-lg font-bold flex-1 text-center flex items-center">{area.name}</h3>
					<p class="text-sm text-neutral-500 dark:text-neutral-400">
						Last updated: {new Date(area.updatedat).toLocaleDateString()}
					</p>
				</div>
			</a>
		{/each}
	</div>
</Card>
