<script lang="ts">
	import Icon from '$lib/components/general/Icon.svelte';
	import UsersIcon from '$lib/components/general/icons/UsersIcon.svelte';
	import type { Announcement } from '$lib/types/types';
	import { slide } from 'svelte/transition';
	import AnnouncementIcon from '$lib/components/general/icons/AnnouncementIcon.svelte';
	import LocationIcon from '$lib/components/general/icons/LocationIcon.svelte';
	import SmileIcon from '$lib/components/general/icons/SmileIcon.svelte';

	export let announcement: Announcement;
</script>

<div
	transition:slide
	class={`w-full z-10 bg-[#F9F9F9] rounded-lg border p-0 hover:shadow-sm hover:border-base-300 dark:hover:border-neutral-800
				dark:bg-neutral-800 dark:border-neutral-800 border-base-200 `}
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
