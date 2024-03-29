<script lang="ts">
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	import { token } from '$stores/auth';
	import { modalPanel } from '$stores/modal';
	import Button from '../general/Button.svelte';
	import Card from '../general/Card.svelte';
	import Icon from '../general/Icon.svelte';
	import PlusCircle from '../general/icons/PlusCircle.svelte';
	import NewArea from './NewArea.svelte';
	let areas = [];
	const getAreas = async () => {
		const res = await fetch(PUBLIC_WIKI_API_URI + '/areas', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer  ${$token}`
			}
		});
		const areas = await res.json();
		return areas;
	};

	getAreas().then((data) => {
		areas = data.data;
	});
</script>

<Card>
	<div class="flex items-center gap-3 w-full p-2" slot="title">
		<h2 class="card-title m-0 p-0">Areas</h2>
		<button
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
		</button>
	</div>

	<div class="flex overflow-x-scroll space-x-4 w-full" slot="content">
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
