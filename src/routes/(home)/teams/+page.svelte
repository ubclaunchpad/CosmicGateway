<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
	let teams: string[] = [];
	export let data;

	onMount(() => {
		fetchTeams();
	});

	const fetchTeams = async () => {
		teams = data.teams;
	};

	const showTeam = (e) => {
		console.log(e);
	};
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div
			class="flex justify-between items-center p-2"
		>
			<h1 class="text-2xl">Teams</h1>
		</div>
		<ul class="gap-8 flex flex-wrap justify-start items-center pt-10">
			{#each teams as team}
			<button class="card w-72 bg-base-100 shadow-sm rounded-md" on:click={showTeam}>
				<figure class="px-3 pt-3">
				  <img src="https://source.unsplash.com/a-blurry-image-of-a-pink-and-blue-background-1md_hqzb0rw" alt="thumbnail" class="rounded-lg w-sm" />
				</figure>
				<div class="card-body items-center text-center justify-center">
				  <h2 class="card-title justify-center text-center">{team.name}</h2>
				  <!-- <p>team Desc</p> -->
				  <div class="card-actions">
					
				  </div>
				</div>
			</button>
				
			{/each}
		</ul>
	</div>
</MainPage>
