<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import TabbedView from '$lib/components/layouts/TabbedView.svelte';
	import TeamHome from '$lib/components/portal/teams/TeamHome.svelte';
	import TeamProjects from '$lib/components/portal/teams/TeamProjects.svelte';
	import TeamSettings from '$lib/components/portal/teams/TeamSettings.svelte';
	import TeamWiki from '$lib/components/portal/teams/TeamWiki.svelte';
	import type { Team } from '$lib/types/types.js';
	export let data;
	let team = data.team as Team;
	let tabs = [
		{ title: 'Dashboard', content: TeamHome, props: { team: team } },
		// { title: 'Team', content: TeamProjects, props: {} },
		// { title: 'Wiki', content: TeamWiki, props: {} },
		{ title: 'Settings', content: TeamSettings, props: { team: team } }
	];
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6 h-full">
		<TabbedView title={team.label} {tabs} />
	</div>
</MainPage>
