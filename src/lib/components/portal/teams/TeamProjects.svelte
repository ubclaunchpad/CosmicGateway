<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import type { Team } from '$lib/types/types';
	import LinkRow from './LinkRow.svelte';
	import TeamMembers from './TeamMembers.svelte';
	export let team: Team;
</script>

<div class="flex flex-col gap-6 flex-1">
	<Card>
		<div class=" py-5 gap-5" slot="content">
			<p class="text-neutral-600 dark:text-neutral-200 line-clamp-2">{team.description}</p>
			<LinkRow links={team.meta_data?.links} />
		</div>
	</Card>
	<TeamMembers {team} />
</div>
