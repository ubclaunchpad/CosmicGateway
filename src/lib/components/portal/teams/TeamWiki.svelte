<script lang="ts">
	import { modalPanel } from '../../../../stores/modal';
	import DocModal from '../wiki/docModal.svelte';

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
	<div class="card w-full bg-base-100 rounded-lg border border-base-200">
		<div class="card-body">
			<h2 class="card-title">Recent Documents</h2>
			<div class="flex overflow-x-scroll space-x-4 pt-4 w-full">
				{#each documents as document}
					<button
						on:click={() => {
							modalPanel.set({
								component: DocModal,
								open: true,
								props: {}
							});
						}}
						class="flex shadow-sm flex-col bg-neutral-50 rounded-lg border border-base-300 carousel-item h-52 w-52"
					>
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div class="card w-full bg-base-100 rounded-lg border border-base-200">
		<div class="card-body">
			<h2 class="card-title">Collections</h2>
			<div class="flex overflow-x-scroll space-x-4 pt-4">
				{#each documents as document}
					<div
						class="flex flex-col overflow-y-scroll gap-2 bg-base-100 border border-base-200 rounded-md min-w-[500px] shadow-sm h-96"
					>
						<h3 class="sticky top-0 bg-neutral-50 p-2 py-3 border-b border-base-200 text-md">
							Onboarding
						</h3>
						<p class="p-3 text-sm bg-neutral-50 border-y border-base-200">
							This collection contains all the documents related to onboarding new employees.
						</p>
						<div class="flex flex-col gap-2 p-2 w-full">
							{#each documents as document}
								<div
									class="flex shadow-none text-sm flex-col bg-base-100 p-2 rounded-lg border border-base-200 carousel-item"
								>
									{document.title}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
