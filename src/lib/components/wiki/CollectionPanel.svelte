<script lang="ts">
	import { modalPanel } from '../../../stores/modal';
	import DocumentModal from './DocumentModal.svelte';
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
	<div class="flex flex-col space-x-1 pt-2 flex-1">
		<div class="flex flex-col gap-2 flex-1">
			<p class="p-3 py-1 text-xs dark:text-neutral-300 text-neutral-500">
				This collection contains all the documents related to onboarding new employees.
			</p>
			<div
				class="flex flex-col w-full divide-y divide-base-200 dark:divide-neutral-700 dark:border-t-neutral-700 px-2"
			>
				{#each documents as document}
					<button
						class="flex shadow-none text-sm flex-col p-2 carousel-item"
						on:click={() => {
							modalPanel.set({
								component: DocumentModal,
								open: true,
								props: { area: 'admin', id: 'test' }
							});
						}}
					>
						{document.title}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
