<!-- DataTable.svelte -->
<script lang="ts">
	import type { Column } from '$lib/types/Column';

	// implement types later
	export let data: any[] = [];
	export let columns: Column[] = [];

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick(row: any) {
		dispatch('rowClicked', { data: row });
	}
</script>

<div class="overflow-x-auto w-full">
	<table class="table table-pin-rows bg-white rounded-none">
		<thead>
			<tr class="flex">
				{#each columns as column}
					<div class="w-1/4 border-b border-gray-200 border-solid">
						<th class="py-1 px-4 text-lg text-black font-medium">{column.header}</th>
					</div>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<div class="py-2 px-4 first:mt-2 last:mb-6">
					<tr
						class="flex rounded-md bg-[#E9E9E9] hover:cursor-pointer hover:bg-[#3F3356] hover:text-white"
						on:click={() => handleClick(row)}
					>
						{#each columns as column}
							<td class="w-1/4 px-4 py-1 whitespace-nowrap">
								<slot prop={{ row, column }} />
							</td>
						{/each}
					</tr>
				</div>
			{/each}
		</tbody>
	</table>
</div>
