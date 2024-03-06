<script lang="ts">
	import Info from '$lib/components/blocks/Info.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
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
		<Info>
			<p>
				This section is under construction. You can navigate to other sections using the navigation
				bar.
			</p>
		</Info>
	</div>
</MainPage>
