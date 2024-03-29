<script lang="ts">
	import type { INotification } from '$lib/types/INotification';
	import { blur, fly } from 'svelte/transition';
	import { notificationStore } from '../../../stores/notification';
	import Icon from '$lib/components/general/Icon.svelte';
	import InfoIcon from '$lib/components/general/icons/InfoIcon.svelte';
	import CheckedIcon from '$lib/components/general/icons/CheckedIcon.svelte';
	import AlertIcon from '$lib/components/general/icons/AlertIcon.svelte';
	let notification: INotification | undefined;

	notificationStore.subscribe((value) => {
		notification = value;
	});

	$: if (notification) {
		setTimeout(() => {
			notificationStore.set(undefined);
		}, notification.timeout || 4000);
	}
</script>

{#if notification}
	<div
		class="fixed z-50 bottom-0 right-0 p-6 w-fit flex justify-end"
		in:fly|global={{ duration: 500, y: 100 }}
		out:fly|global={{ duration: 500, y: 100 }}
	>
		<div
			class="flex flex-col gap-3 bg-neutral-100 p-4 rounded-lg md:min-w-96 w-full md:max-w-md shadow-lg border border-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-800"
		>
			<div class="flex flex-row gap-2 items-center">
				<Icon>
					{#if notification.type === 'info'}
						<InfoIcon />
					{:else if notification.type === 'success'}
						<CheckedIcon />
					{:else if notification.type === 'warning'}
						<AlertIcon />
					{:else if notification.type === 'error'}
						<AlertIcon />
					{/if}
				</Icon>
				<h2 class="text-md font-medium">{notification.title}</h2>
			</div>

			<p class="pl-6 text-xs line-clamp-2">{notification.message}</p>
		</div>
	</div>
{/if}
