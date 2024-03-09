<script lang="ts">
	import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
	import Icon from '$lib/components/general/Icon.svelte';
	import { PinIcon } from '$lib/components/general/icons';
	import { ANNOUNCEMENT_STATUS, ANNOUNCEMENT_TYPES, type Announcement } from '$lib/types/types';
	import { slide } from 'svelte/transition';
	import { sidePanel } from '../../../../stores/sidepanel';
	import PlusCircle from '$lib/components/general/icons/PlusCircle.svelte';
	import XIcon from '$lib/components/general/icons/XIcon.svelte';
	import { fetcher } from '$lib/util/fetcher';
	import { token } from '../../../../stores/auth';
	import Button from '$lib/components/general/Button.svelte';
	let newAnnouncement: Partial<Announcement> | undefined = undefined;
	export let teamid: number;

	let sideOpen = false;
	$: sidePanel.set({
		open: sideOpen,
		component: null,
		props: {}
	});

	function newAnnouncementHandler() {
		if (newAnnouncement) {
			newAnnouncement = undefined;
		} else {
			newAnnouncement = {
				teamid: teamid,
				title: 'New Announcement',
				contents: {
					body: ''
				},
				type: 'post',
				status: 'default'
			};
		}
	}

	async function postAnnouncement() {
		const m = await fetcher({
			URI: `${PUBLIC_TEAMS_API_URI}/posts`,
			requestInit: {
				method: 'POST',
				body: JSON.stringify(newAnnouncement),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer  ${$token}`
				}
			}
		});

		if (m.status === 200) {
			newAnnouncement = undefined;
		} else {
			console.error(m.status, m.statusText);
		}
	}
</script>

<div class={`w-full  rounded-lg border border-dashed border-base-200 p-0  bg-[#fefefe]`}>
	<div class={`card-body p-3 gap-2`}>
		<div class="  rounded-t-lg flex items-center gap-3">
			{#if newAnnouncement}
				<Icon>
					<PinIcon />
				</Icon>
				<input
					class="card-title
                                    text-sm flex-1 w-full bg-inherit"
					type="text"
					bind:value={newAnnouncement.title}
				/>
			{/if}
			<div class="flex items-center justify-end flex-1 gap-3">
				<button
					class="flex items-center justify-center rounded-full"
					on:click={newAnnouncementHandler}
				>
					<Icon width="24">
						{#if newAnnouncement}
							<XIcon />
						{:else}
							<PlusCircle />
						{/if}
					</Icon>
				</button>
			</div>
		</div>
		{#if newAnnouncement}
			<div
				class=" h-fit border border-base-200 rounded-lg overflow-hidden"
				in:slide={{ duration: 300, axis: 'y' }}
			>
				<textarea
					class="text-sm flex w-full bg-inherit resize-none h-40 rounded-lg p-2"
					bind:value={newAnnouncement.contents.body}
				></textarea>

				<div class=" h-fit flex p-2 gap-2 w-full justify-end">
					<select
						class="text-sm p-1 flex w-32 border border-base-200 resize-auto max-h-40 rounded-md"
						bind:value={newAnnouncement.type}
					>
						{#each Object.values(ANNOUNCEMENT_TYPES) as type}
							<option class="bg-base-200" value={type}>{type}</option>
						{/each}
					</select>
					<select
						class="text-sm p-1 flex w-32 border border-base-200 resize-auto max-h-40 rounded-md"
						bind:value={newAnnouncement.status}
					>
						{#each Object.values(ANNOUNCEMENT_STATUS) as status}
							<option class="bg-base-200" value={status}>{status}</option>
						{/each}
					</select>
				</div>
			</div>
			<div class="flex items-center justify-end flex-1 gap-3">
				<Button on:click={postAnnouncement}>Post</Button>
			</div>
		{/if}
	</div>
</div>
