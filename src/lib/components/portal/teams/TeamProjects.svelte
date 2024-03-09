<script lang="ts">
	import type { Team } from '$lib/types/types';
	import LinkRow from './LinkRow.svelte';
	import TeamMembers from './TeamMembers.svelte';
	export let team: Team;
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="card w-full bg-base-100 rounded-lg border border-base-200">
		<div class="card-body py-5 gap-5">
			<p class="text-neutral-600 line-clamp-2">{team.description}</p>
			<LinkRow links={team.meta_data?.links} />
		</div>
	</div>
	<TeamMembers {team} />
</div>
