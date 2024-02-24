<script lang="ts">
	import type { Team } from '$lib/types/types';
	import LinkPanel from './LinkPanel.svelte';
	export let team: Team;
	let description = team.description;
	let changed = false;
	$: changed = description !== team.description;
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="flex flex-col gap-6 flex-1">
		<div class="card w-full bg-base-100 rounded-lg border border-base-200">
			<div class="card-body py-5 gap-5 relative">
				<h2 class="card-title">About</h2>
				<textarea
					class="text-neutral-600 border-dashed border p-2 px-4 rounded-md"
					rows="6"
					bind:value={team.description}
				></textarea>
				<div class="flex gap-4 w-full justify-end bottom-10 right-10">
					<button class=" border border-base-200 btn btn-sm shadow-none" disabled={!changed}>
						Save
					</button>
				</div>
			</div>
		</div>

		<div class="card w-full bg-base-100 rounded-lg border border-base-200">
			<div class="card-body py-5 gap-5">
				<h2 class="card-title">Resources</h2>
				<LinkPanel links={team.meta_data.links} />
			</div>
		</div>
	</div>
</div>
