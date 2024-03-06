<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Icon from '$lib/components/general/Icon.svelte';
	import UsersIcon from '$lib/components/general/icons/UsersIcon.svelte';
	import type { Announcement } from '$lib/types/types';
	import { slide } from 'svelte/transition';
	import AnnouncementIcon from '$lib/components/general/icons/AnnouncementIcon.svelte';
	import LocationIcon from '$lib/components/general/icons/LocationIcon.svelte';
	import SmileIcon from '$lib/components/general/icons/SmileIcon.svelte';
	import { sidePanel } from '../../../../stores/sidepanel';

	export let announcement: Announcement;

	async function deleteAnnouncement() {
		sidePanel.set({ open: false, component: null, props: {} });
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/announcements/${announcement.id}`, {
			method: 'DELETE'
		});

		const data = await res.json();

		if (res.ok) {
			console.log('Announcement deleted');
		} else {
			console.error(data);
		}
	}
</script>

<div class="flex gap-6 flex-1 flex-col">
	<div class="flex flex-col gap-6 pt-5 flex-1">
		<div
			transition:slide
			class={` w-full bg-[#F9F9F9]  flex flex-col rounded-lg border p-0 
                        ${
													announcement.level === 'pinned' ? 'border-neutral-300' : 'border-base-200'
												}
                        `}
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
				</div>
				<div class="pl-7">
					<p class="text-sm">{announcement.contents.body}</p>
				</div>

				<div
					class="flex items
                                -center justify-between w-full pt-3 pl-7"
				>
					<p class="text-sm max-w-fit flex-0"></p>
					<p class="text-sm max-w-fit flex-0">
						{new Date(announcement.updated_at).toLocaleDateString()}
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="flex gap-6 flex-row">
		<!-- <button class="btn text-sm flex-1 border">Edit</button> -->
		<button class="btn text-sm flex-1 border" on:click={deleteAnnouncement}>Delete</button>
	</div>
</div>
