<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Card from '$lib/components/general/Card.svelte';
	import type { Team } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { token } from '../../../../stores/auth';
	export let team: Team;
	let members: any[] | undefined = undefined;

	const fetchMembers = async () => {
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams/${team.id}/members`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + $token
			}
		});
		members = await res.json();
	};

	onMount(() => {
		fetchMembers();
	});
</script>

<Card>
	<div class="header flex justify-between items-center pb-4" slot="title">
		<h2 class="card-title">Members</h2>
		<div class="flex gap-4 justify-end"></div>
	</div>

	<div class="" slot="content">
		{#if !members || members.length === 0}
			<div class="flex justify-center items-center h-32">
				<p class="text-neutral-500 text-center">
					{#if !members}
						Loading...
					{:else}
						No members
					{/if}
				</p>
			</div>
		{:else}
			<div class="flex flex-row gap-2">
				{#each members as member}
					<button
						on:click={() => {
							// sidePanel.set({
							// 	open: true,
							// 	props: {}
							// });
						}}
						class="flex p-2 hover:shadow-sm flex-col bg-neutral-50 rounded-2xl border border-base-300 h-32 w-32 dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-800"
					>
						<!-- <div class="flex gap-2"> -->
						<!-- <div class="flex flex-col bg-neutral-50 rounded-md h-20 w-20">
								<img src={member.avatar} class="rounded-md" alt="avatar" />
							</div> -->
						<div class="flex flex-1 flex-col gap-1 w-full items-center justify-center">
							<p class="text-xs p-0 w-fit h-fit flex-0">
								{member.first_name}
								{member.last_name}
							</p>
							<p class="text-xs p-0 w-fit h-fit flex-0">{member.team_role}</p>

							<!-- </div> -->
						</div></button
					>
				{/each}
			</div>
		{/if}
	</div>
</Card>
