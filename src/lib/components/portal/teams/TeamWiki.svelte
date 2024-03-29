<script lang="ts">
	import Button from '$lib/components/general/Button.svelte';
	import Card from '$lib/components/general/Card.svelte';
	import AreaCard from '$lib/components/wiki/AreaCard.svelte';
	import CollectionPanel from '$lib/components/wiki/CollectionPanel.svelte';
	import DocumentModal from '$lib/components/wiki/DocumentModal.svelte';
	import { modalPanel } from '../../../../stores/modal';
	import { sidePanel } from '../../../../stores/sidepanel';

	export let documents: {
		title: string;
		tags: string[];
		area: string;
		update_at: string;
	}[] = [
		{
			title: 'Company Overview',
			tags: ['Company', 'Overview'],
			area: 'General',
			update_at: new Date().toISOString()
		},
		{
			title: 'Product Roadmap',
			tags: ['Product', 'Roadmap'],
			area: 'Product',
			update_at: new Date().toISOString()
		},
		{
			title: 'Marketing Strategy',
			tags: ['Marketing', 'Strategy'],
			area: 'Marketing',
			update_at: new Date().toISOString()
		},
		{
			title: 'Sales Targets',
			tags: ['Sales', 'Targets'],
			area: 'Sales',
			update_at: new Date().toISOString()
		},
		{
			title: 'Engineering Processes',
			tags: ['Engineering', 'Processes'],
			area: 'Engineering',
			update_at: new Date().toISOString()
		},
		{
			title: 'Customer Success Stories',
			tags: ['Customer', 'Success'],
			area: 'Customer Success',
			update_at: new Date().toISOString()
		},
		{
			title: 'HR Policies',
			tags: ['HR', 'Policies'],
			area: 'Human Resources',
			update_at: new Date().toISOString()
		},
		{
			title: 'Financial Reports',
			tags: ['Financial', 'Reports'],
			area: 'Finance',
			update_at: new Date().toISOString()
		},
		{
			title: 'Security Guidelines',
			tags: ['Security', 'Guidelines'],
			area: 'Security',
			update_at: new Date().toISOString()
		},
		{
			title: 'Company Culture',
			tags: ['Company', 'Culture'],
			area: 'Culture',
			update_at: new Date().toISOString()
		}
	];
	let isOpen = false;
</script>

<div class="flex flex-col gap-6 flex-1">
	<Card>
		<h2 class="card-title" slot="title">Recent Documents</h2>
		<div class="flex overflow-x-scroll space-x-4 pt-4 w-full" slot="content">
			{#each documents as _}
				<button
					on:click={() => {
						modalPanel.set({
							component: DocumentModal,
							open: true,
							props: { area: 'admin', id: 'test' }
						});
					}}
					class="flex shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 carousel-item h-52 w-52 dark:border-neutral-800"
				>
				</button>
			{/each}
		</div>
	</Card>

	<Card class=" ">
		<h2 class="card-title sticky top-0" slot="title">Collections</h2>

		<div
			class="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4"
			slot="content"
		>
			{#each documents as document}
				<button
					on:click={() => {
						sidePanel.set({
							component: CollectionPanel,
							open: true,
							props: { area: 'admin', title: 'Onboarding Collection' }
						});
					}}
					class="flex flex-col gap-2 bg-base-100 border border-base-200 rounded-md h-[120px] dark:border-neutral-800 dark:bg-neutral-800 items-start"
				>
					<h3
						class="sticky top-0 bg-neutral-50 p-2 py-3 border-b border-base-200 text-md dark:bg-neutral-800 dark:border-neutral-700 w-full text-left"
					>
						Onboarding
					</h3>
					<p
						class="p-3 py-1 text-xs dark:border-neutral-800 dark:text-neutral-300 text-neutral-500 text-left line-clamp-3"
					>
						This collection contains all the documents related to onboarding new employees.
					</p>
				</button>
			{/each}
		</div>
	</Card>
</div>
