<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import type { Announcement } from '$lib/types/types';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';
	import { sidePanel } from '../../../../stores/sidepanel';
	import AnnouncementCard from './AnnouncementCard.svelte';
	import NewAnnouncement from './NewAnnouncement.svelte';

	export let announcement: Announcement;
	let announcementThread: Announcement[] = [];

	async function deleteAnnouncement() {
		sidePanel.set({ open: false, component: null, props: {} });
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/posts/${announcement.id}`, {
			method: 'DELETE'
		});

		const data = await res.json();

		if (res.ok) {
			console.log('Announcement deleted');
		} else {
			console.error(data);
		}
	}

	async function getAnnouncementThread() {
		announcementThread = [announcement, announcement, announcement, announcement, announcement];
	}

	getAnnouncementThread();
</script>

<div class="flex gap-6 flex-col relative">
	<AnnouncementCard {announcement} />
	<div
		class="w-1 h-full flex flex-col flex-1 absolute top-0 left-4 bg-neutral-100 rounded-full dark:bg-neutral-800"
	></div>
	<div class="flex flex-col gap-1">
		{#if announcementThread.length > 0}
			{#each announcementThread as announcement, i}
				{#key announcement.id}
					<div
						class="flex justify-center items-center relative w-full pl-8"
						in:blur={{ duration: 600, delay: i * 100 }}
					>
						<!-- <div class="h-1 z-10 flex flex-col flex-1 absolute w-1/2 top-6 left-4 bg-neutral-200 rounded-full rounded-tr-none">
				</div> -->
						<svg class="h-12 w-12 top-0 absolute left-4" viewBox="0 0 32 32">
							<path
								fill="none"
								stroke-width="3"
								d="M10,20 a12,12 0 0,1 -10,-10"
								class="stroke-current text-neutral-100 dark:text-neutral-800"
							>
							</path>
						</svg>
						<AnnouncementCard {announcement} />
					</div>
				{/key}
			{/each}
		{/if}
		<div class="flex justify-center items-center relative w-full pl-8">
			<NewAnnouncement teamid={2} />
		</div>
	</div>
	<!-- <div class="flex gap-6 flex-row"> -->
	<!-- <button class="btn text-sm flex-1 border">Edit</button> -->
	<!-- <Button class="text-sm flex-1 " on:click={deleteAnnouncement}>Delete</Button> -->
	<!-- </div> -->
</div>
