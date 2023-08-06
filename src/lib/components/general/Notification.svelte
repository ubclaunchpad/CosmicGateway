<script lang="ts">
	import type { INotification } from '$lib/types/INotification';
	import { fly } from 'svelte/transition';
	import { notificationStore } from '../../../stores/notification';
	import Icon from '$lib/components/general/Icon.svelte';
	import InfoIcon from '$lib/components/general/icons/InfoIcon.svelte';
	import CheckedIcon from '$lib/components/general/icons/CheckedIcon.svelte';
	import AlertIcon from '$lib/components/general/icons/AlertIcon.svelte';
	import { onMount } from 'svelte';
	let notification: INotification | undefined;
	let width = 0;
	let pageWidth: number;
	const cutoff = 600;
	$: isCompact = pageWidth < cutoff;
	onMount(() => {
		pageWidth = document.body.clientWidth;
		window.addEventListener('resize', () => {
			pageWidth = document.body.clientWidth;
		});
	});

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
	{#if !isCompact}
		<div
			class="notification-wrapper"
			in:fly|global={{ x: 500, duration: 500 }}
			out:fly|global={{ x: width, duration: 500 }}
			bind:clientWidth={width}
		>
			<div class="notification">
				<div class="header">
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
					<h2>{notification.title}</h2>
				</div>

				<p>{notification.message}</p>
			</div>
		</div>
	{:else}
		<div
			class="notification-wrapper-top"
			in:fly|global={{ y: '-200px', duration: 500 }}
			out:fly|global={{ y: '-100px', duration: 500 }}
		>
			<div class="notification">
				<div class="header">
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
					<h2>{notification.title}</h2>
				</div>

				<p>{notification.message}</p>
			</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	.notification {
		display: flex;
		flex-direction: column;
		border-radius: var(--border-radius-medium);
		padding: 0.7rem 1rem;
		border: 1px solid var(--color-bg-0);
		background-color: var(--color-bg-3);

		.header {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding-bottom: 0.9rem;
			column-gap: 0.4rem;

			:global(svg) {
				width: 1.6rem;
				height: 1.6rem;
				stroke-width: 1.7px;
				stroke: var(--color-bg-primary);
			}
		}
		h2 {
			margin: 0;
			font-size: 1rem;
			//padding-bottom: 0.5rem;
		}
		p {
			margin: 0;
			padding-left: 1.5rem;
			font-size: 0.8rem;
		}
	}

	.notification-wrapper-top {
		position: fixed;
		top: 0;
		right: 50%;
		transform: translateX(50%);
		min-width: 400px;
		width: 100%;
		max-width: 700px;
		height: 100px;
		padding: 1rem;
		z-index: 10000;
	}
	.notification-wrapper {
		position: fixed;
		top: 0;
		right: 0;
		min-width: 400px;
		width: fit-content;
		max-width: 100%;
		height: 100px;
		padding: 1rem;
		z-index: 10000;
	}
</style>
