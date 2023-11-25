<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import { onMount } from 'svelte';
	const waveEmoji = '\u{1F44B}';

	let teams: string[] = [];
	export let data;

	onMount(() => {
		const fetchTeams = async () => {
			teams = data.teams;
		};

		fetchTeams();
	});


</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6">
		<h1 class="text-3xl pb-1">{waveEmoji} Welcome Back {`{{NAME}}`}</h1>
		<div class="flex flex-row gap-3">
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg shadow-sm" />
			<div class="container mx-auto px-4 bg-bg-50 w-4/6 h-80 rounded-lg shadow-sm" />
		</div>
		<div class="flex flex-row gap-3">
			<div class="container mx-auto w-full rounded-lg">
				<h2 class="text-2xl font-medium mb-3">Projects</h2>
				<div class="overflow-scroll space-y-4 h-80">
					{#if teams.length > 0}
						{#each teams as team}
							<ProjectCard project={team}/>
						{/each}
					{/if}
				</div>
			</div>
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg shadow-sm" />
		</div>
	</div>
</MainPage>
