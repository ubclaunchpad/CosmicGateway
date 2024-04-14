<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { userStore } from '../../stores/auth';
	import TeamList from '$lib/components/portal/teams/TeamList.svelte';
	import QuickLinks from '$lib/components/dashboard/QuickLinks.svelte';
	import QuickNotes from '$lib/components/dashboard/QuickNotes.svelte';
	import { cachedSWR } from '$lib/util/fetcher';
	let teams: any[] | null = null;
	function greeting() {
		const date = new Date();
		const hours = date.getHours();
		if (hours < 12) {
			return '☀️ Good Morning';
		} else if (hours < 18) {
			return '⛅ Good Afternoon';
		} else {
			return '🌙 Good Evening';
		}
	}

	// ?userid=${$userStore?.id}
	const { data } = cachedSWR.useSWR(`${PUBLIC_TEAMS_API_URI}/teams`);

	$: if ($data) {
		teams = $data;
	}
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6 items-center">
		<section class="flex flex-col gap-6 w-full justify-center items-center pb-5">
			<h1 class="text-2xl font-bold">{`${greeting()}, ${$userStore?.pref_name}`}</h1>
		</section>

		<div class="flex gap-6 w-full flex-col max-w-5xl items-center">
			<div class="flex gap-6 w-full items-center flex-col lg:flex-row overflow-hidden">
				<Card class="w-fit h-96">
					<div slot="content" class=" flex flex-wrap gap-2 w-fit"></div>
				</Card>
				<TeamList {teams} />
			</div>
			<div class="flex gap-6 w-full items-center flex-col lg:flex-row overflow-hidden">
				<QuickLinks />
				<QuickNotes />
			</div>

			<Card class="w-fit">
				<div slot="content" class=" flex flex-wrap gap-2 w-fit h-44"></div>
			</Card>
		</div>
	</div>
</MainPage>
