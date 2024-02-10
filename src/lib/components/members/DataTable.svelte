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
	<table class="table table-pin-rows">
		<thead>
			<tr>
				{#each columns as column}
					<th class="border-b border-gray-200 border-solid py-3 px-4 text-xl text-black font-medium"
						>{column.header}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row}
				<tr
					class="bg-[#E9E9E9] hover:cursor-pointer hover:bg-[#3F3356] hover:text-white"
					on:click={() => handleClick(row)}
				>
					{#each columns as column}
						<td class="w-1/4 border-b border-gray-200 border-solid py-4 px-4 whitespace-nowrap">
							<slot prop={{ row, column }} />
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
