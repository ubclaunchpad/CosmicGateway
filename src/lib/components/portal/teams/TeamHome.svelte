<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { modalPanel } from '../../../../stores/modal';
	import LinkRow from './LinkRow.svelte';
	import TeamAnnouncements from './TeamAnnouncements.svelte';
	import ModalTest from './modalTest.svelte';
	export let team: Team;
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="card w-full bg-base-100 rounded-lg border border-base-200">
		<div class="card-body py-5 gap-5">
			<p class="text-neutral-600">{team.description}</p>
			<LinkRow links={team.meta_data.links} />
		</div>
	</div>

	<button
		on:click={() => {
			modalPanel.set({
				component: ModalTest,
				open: true,
				props: {}
			});
		}}
		class="flex shadow-sm flex-col bg-neutral-50 rounded-lg border border-base-300 carousel-item h-52 w-52"
	>
	</button>
	<div class="flex gap-6 flex-1 flex-col xl:flex-row">
		<TeamAnnouncements {team} />
	</div>
</div>
