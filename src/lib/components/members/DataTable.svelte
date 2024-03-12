<!-- DataTable.svelte -->
<script lang="ts">
	import type { Column } from '$lib/types/Column';

	// implement types later
	export let data: any[] = [];
	export let columns: Column[] = [];

	import { createEventDispatcher } from 'svelte';
	import Card from '../general/Card.svelte';

	const dispatch = createEventDispatcher();

	function handleClick(row: any) {
		dispatch('rowClicked', { data: row });
	}
</script>

<Card class="p-0" contentClass="p-1 flex flex-col">
<div class="overflow-x-auto w-full" slot="content">
	<table class="table dark:bg-neutral-900 border-collapse w-full">
		<thead class="flex w-full  bg-neutral-100 dark:bg-neutral-800 rounded-t ">
			<tr class="flex  border-b  flex-1 w-full border-b-neutral-200 dark:border-b-neutral-900">
				{#each columns as column}
					<div class=" min-w-40 flex-1 flex-shrink-0 items-center">
						<th class=" px-4 text-md text-black font-bold items-center py-3 h-full dark:text-white">{column.header}</th>
					</div>
				{/each}
			</tr>
		</thead>
		<tbody class="border-t-0 flex-1 w-full p-40">
			{#each data as row}
				<div class="pb-0.5 flex-1 w-full min-w-40 flex-shrink-0 last:rounded-b overflow-y-hidden first:pt-0.5">
					<tr
						class="flex   h-8 items-center  hover:cursor-pointer text-sm  bg-neutral-100 rounded-inherit
						 hover:bg-primary-300   border-none dark:bg-neutral-800 dark:border-none dark:hover:bg-primary-500 "
						on:click={() => handleClick(row)}
					>
						{#each columns as column}
							<td class="px-4 py-1  text-sm flex flex-1  text-overflow-ellipsis dark:text-white flex-shrink-0">
								<slot prop={{ row, column }} />
							</td>
						{/each}
					</tr>
				</div>
			{/each}
		</tbody>
	</table>
</div>

</Card>