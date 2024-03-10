<script lang="ts">
	import type { Team } from '$lib/types/types';
	import TeamAnnouncements from './TeamAnnouncements.svelte';
	export let team: Team;
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="flex gap-6 flex-1 flex-col xl:flex-row">
		<TeamAnnouncements {team} />
	</div>
</div>
