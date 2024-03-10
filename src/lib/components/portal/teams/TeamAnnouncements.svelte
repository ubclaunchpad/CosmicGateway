<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Icon from '$lib/components/general/Icon.svelte';
	import UsersIcon from '$lib/components/general/icons/UsersIcon.svelte';
	import type { Announcement, Team } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sidePanel } from '../../../../stores/sidepanel';
	import NewAnnouncement from './NewAnnouncement.svelte';
	import AnnouncementIcon from '$lib/components/general/icons/AnnouncementIcon.svelte';
	import LocationIcon from '$lib/components/general/icons/LocationIcon.svelte';
	import SmileIcon from '$lib/components/general/icons/SmileIcon.svelte';
	import AnnouncementPanel from './AnnouncementPanel.svelte';
	import Card from '$lib/components/general/Card.svelte';

	export let team: Team;
	let announcements: Announcement[] = [];
	$: sidePanel.set({
		open: false,
		component: null,
		props: {}
	});

	onMount(async () => {
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/posts?teamid=${team.id}`, {});
		const data = await res.json();
		announcements = [...data];
	});
</script>

<Card>
	<h2 class="card-title" slot="title">Posts</h2>

	<div class="flex flex-col gap-6 pt-2" slot="content">
		<NewAnnouncement teamid={team.id} />
		{#each announcements as announcement}
			<button
				transition:slide
				class={` w-full bg-[#F9F9F9] rounded-lg border p-0 hover:shadow-sm hover:border-base-300 dark:hover:border-neutral-800
				dark:bg-neutral-700 dark:border-neutral-800 border-base-200`}
				on:click={() => {
					sidePanel.set({
						open: true,
						component: AnnouncementPanel,
						props: { announcement: announcement }
					});
				}}
			>
				<div class="card-body p-3">
					<div class="  rounded-t-lg flex items-center gap-3">
						<Icon>
							{#if announcement.type === 'announcement'}
								<AnnouncementIcon />
							{:else if announcement.type === 'event'}
								<LocationIcon />
							{:else if announcement.type === 'update'}
								<SmileIcon />
							{:else}
								<UsersIcon />
							{/if}
						</Icon>

						<h3 class="card-title text-sm flex-1">{announcement.title}</h3>
						<p class="text-sm max-w-fit flex-0">
							{new Date(announcement.updated_at).toLocaleDateString(undefined, {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								hour12: true,
								hour: 'numeric',
								minute: 'numeric'
							})}
						</p>
					</div>
					<div class="pl-7">
						<p class="text-sm w-full items-start text-left">{announcement.contents.body}</p>
					</div>
					<div class="  rounded-t-lg flex justify-end gap-3 w-full">
						<p class="text-sm max-w-fit flex-0">
							{announcement.author}
						</p>
					</div>
				</div></button
			>
		{/each}
	</div>
</Card>
