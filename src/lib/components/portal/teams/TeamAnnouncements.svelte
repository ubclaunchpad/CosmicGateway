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

	export let team: Team;
	let announcements: Announcement[] = [];
	let sideOpen = false;
	$: sidePanel.set({
		open: sideOpen,
		component: null,
		props: {}
	});

	onMount(async () => {
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/announcements?teamid=${team.id}`, {});
		const data = await res.json();
		announcements = [...data];
	});
</script>

<div class="flex gap-6 flex-1 flex-col xl:flex-row">
	<div class="card w-full bg-base-100 rounded-lg border border-base-200">
		<div class="card-body">
			<div class="header flex justify-between items-center">
				<h2 class="card-title">Announcements</h2>
				<div class="flex gap-4 justify-end"></div>
			</div>

			<div class="flex flex-col gap-6 pt-5">
				<NewAnnouncement teamid={team.id} />
				{#each announcements as announcement}
					<button
						transition:slide|global
						class={` w-full bg-[#F9F9F9] rounded-lg border p-0 hover:shadow-sm hover:border-base-300
                        ${announcement.level === 'pinned' ? 'border-neutral-300' : 'border-base-200'}
                        `}
						on:click={() => {
							sideOpen = true;
							sidePanel.set({
								open: sideOpen,
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
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
