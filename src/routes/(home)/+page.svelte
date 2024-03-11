<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
	import { token, userStore } from '../../stores/auth';
	import TeamCard from '$lib/components/portal/teams/TeamCard.svelte';
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

	const colors = {
		gray: 'bg-base-100 dark:bg-neutral-800',
		yellow: 'bg-yellow-100 dark:bg-yellow-700',
		red: 'bg-red-100 dark:bg-red-700',
		green: 'bg-green-100 dark:bg-green-700',
		teal: 'bg-teal-100 dark:bg-teal-700',
		pink: 'bg-pink-100 dark:bg-pink-700'
	};

	let noteColor = localStorage.getItem('quickNoteColor') || 'yellow';
	let showColors = false;

	const fetchUserTeams = async () => {
		if (!$userStore || !$userStore.id) return;

		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams?userid=${$userStore?.id}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token
			}
		});
		const data = await res.json();
		teams = data;
	};

	onMount(() => {
		fetchUserTeams();
	});
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6 items-center">
		<section class="flex flex-col gap-6 w-full justify-center items-center pb-5">
			<h1 class="text-2xl font-bold">{`${greeting()}, ${$userStore?.pref_name}`}</h1>
		</section>

		<div class="flex gap-6 w-full flex-col max-w-5xl items-center">
			<Card class="w-full overflow-hidden">
				<div slot="content" class=" flex w-full overflow-x-scroll gap-2 h-60 items-center">
					{#if teams && teams.length > 0}
						{#each teams as team}
							<TeamCard {team} compact={true} />
						{/each}
					{:else}
						<div class="flex justify-center items-center w-full">
							<p class="text-neutral-500 text-center">
								{teams === null ? 'Loading...' : 'No teams found'}
							</p>
						</div>
					{/if}
				</div>
			</Card>

			<div class="flex gap-6 w-full items-center flex-col lg:flex-row">
				<Card class=" w-full h-96">
					<h1 class="text-sm font-bold" slot="title">Upcoming</h1>
					<div class="flex justify-center items-center flex-1" slot="content">
						<p class="text-neutral-500 text-center">Nothing on the horizon</p>
					</div>
				</Card>

				<Card class={`w-full h-96 ${colors[noteColor]}`}>
					<div class="flex w-full justify-between items-center" slot="title">
						<h1 class="text-sm font-bold w-full">Quick Notes</h1>
						<div
							class="flex gap-2 w-full h-6 justify-end items-center"
							on:mouseenter={() => (showColors = true)}
							on:mouseleave={() => (showColors = false)}
						>
							{#if showColors}
								{#each Object.entries(colors) as [color, value]}
									<button
										class={`w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600 ${value}`}
										on:click={() => {
											if (typeof window !== 'undefined' && window.localStorage) {
												localStorage.setItem('quickNoteColor', color);
												noteColor = color;
											}
										}}
									>
									</button>
								{/each}
							{:else}
								<button
									class={`w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600 ${colors[noteColor]}`}
								></button>
							{/if}
						</div>
					</div>

					<textarea
						on:change={(e) => {
							if (typeof window !== 'undefined' && window.localStorage) {
								localStorage.setItem('quickNote', e.target.value);
							}
						}}
						slot="content"
						class="w-full text-sm h-full resize-none overflow-scroll border border-transparent bg-transparent p-1 focus:outline-none focus:border-transparent px-2 rounded-md"
						placeholder={'Write a quick note'}
						value={localStorage.getItem('quickNote') || ''}
					/>
				</Card>
			</div>

			<!-- <Card class="w-fit">
				<div slot="content" class=" flex flex-wrap gap-2  w-fit h-fit">
					{#each Array(6) as _}
						<div class="flex gap-4 items-center w-32 h-32 bg-gray-100 rounded-lg">
						</div>
					{/each}
					</div>
			</Card> -->
		</div>
	</div>
</MainPage>
