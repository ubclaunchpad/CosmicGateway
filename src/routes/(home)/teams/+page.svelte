<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { fade } from 'svelte/transition';
	import NewTeamPanel from '$lib/components/portal/teams/newTeamPanel.svelte';
	import { modalPanel } from '../../../stores/modal.js';
	import Button from '$lib/components/general/Button.svelte';
	import TeamsSection from '$lib/components/portal/teams/TeamsSection.svelte';

	async function newTeamPanelProvider() {
		modalPanel.set({
			open: true,
			component: NewTeamPanel,
			props: {}
		});
	}
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Teams</h1>
			<Button class=" " on:click={newTeamPanelProvider}>New Team</Button>
		</div>

		<TeamsSection />
	</div>
</MainPage>
