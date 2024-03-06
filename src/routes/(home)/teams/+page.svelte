<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import type { Team } from '$lib/types/types.js';
	import { fade } from 'svelte/transition';
	import { sidePanel } from '../../../stores/sidepanel.js';
	import NewTeamPanel from '$lib/components/portal/teams/newTeamPanel.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import PlusCircle from '$lib/components/general/icons/PlusCircle.svelte';
	let teams: Team[] = [];
	export let data;
	$: teams = data.teams;
	sidePanel.set({
		open: false,
		component: null,
		props: {}
	});

	async function newTeamPanelProvider() {
		sidePanel.set({
			open: true,
			component: NewTeamPanel,
			props: {}
		});
	}
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex gap-4 items-center p-2">
			<h1 class="text-2xl">Teams</h1>
			<button class=" btn-circle w-6 h-6 p-0" on:click={newTeamPanelProvider}
				><Icon width={'100%'}>
					<PlusCircle />
				</Icon></button
			>
		</div>
		<ul class="gap-4 flex flex-wrap justify-start items-center pt-10 flex-col">
			{#each teams as team}
				<a
					transition:fade|global={{ duration: 300 }}
					class="card flex bg-base-100 border border-base-200 rounded-md shadow-sm max-h-60 overflow-hidden flex-row w-full"
					href={`/teams/${team.label}-${team.id}`}
				>
					<img src={team.image_link} class="  object-cover flex-1 max-w-xs sm:w-xs" alt="cover" />
					<div
						class="card-body z-50 pointer-events-none py-4 justify-start items-start flex flex-col flex-2"
					>
						<p class="h-10 flex-0">
							<span class="badge text-sm badge-lg rounded-full">
								{#if team.meta_data.status}
									{team.meta_data.status}
								{:else}
									No status
								{/if}
							</span>
						</p>
						<h2 class="card-title">{team.label}</h2>

						<p class="py-2 text-sm overflow-ellipsis w-full flex flex-col flex-1">
							{team.description}
						</p>
						<div class="flex gap-4">
							{#if team.meta_data.terms}
								{#each team.meta_data.terms as term}
									<span class="badge badge-md rounded-full bg-opacity-80">{term}</span>
								{/each}
							{:else}
								<span class="badge badge-md rounded-full bg-opacity-80">No terms</span>
							{/if}
						</div>
					</div>
				</a>
			{/each}
		</ul>
	</div>
</MainPage>
