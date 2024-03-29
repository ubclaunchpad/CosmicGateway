<script lang="ts">
	import { onMount } from 'svelte';
	import { sidePanel } from '../../../stores/sidepanel';
	import ChevronRightIcon from '../general/icons/ChevronRightIcon.svelte';
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	let url;

	if ($sidePanel.component) {
		sidePanel.set({
			open: false,
			component: null,
			props: {}
		});
	}

	onMount(() => {
		url = window.location.pathname;
	});

	let breadcrumb = [];

	$: {
		console.log($page.url.pathname);
		const urlParts = $page.url.pathname.split('/').slice(1, -1);
		console.log(urlParts);

		const crumb = urlParts.map((part, index) => {
			return {
				name: part,
				url: urlParts.slice(0, index + 1).join('/')
			};
		});
		console.log(crumb);
		breadcrumb = crumb;
	}
</script>

<div class="h-full overflow-scroll flex w-full dark:bg-neutral-950" id="main-page">
	<div class="relative flex-col overflow-scroll flex-1 h-full px-4 py-1">
		<div
			id="breadcrumb"
			class="flex gap-2 items-center p-2 border-neutral-200 dark:border-neutral-800"
		>
			{#each breadcrumb as crumb}
				<a
					class="text-base text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
					href={crumb.url}
				>
					{crumb.name}
				</a>
				{#if crumb.url !== '/'}
					<span class="text-neutral-500 dark:text-neutral-400"> &rsaquo; </span>
				{/if}
			{/each}
		</div>
		<slot name="main" class="content" />
	</div>

	{#if $sidePanel && $sidePanel.component}
		<div
			class={`flex flex-col gap-2 ${$sidePanel.open ? 'w-96' : 'w-10'} bg-white dark:bg-neutral-950 rounded-l-sm   relative slider
			border-l border-neutral-200 dark:border-neutral-800 max-h-100svh overflow-y-scroll
			`}
			transition:slide={{ duration: 200, delay: 0, axis: 'x' }}
			id="side-panel"
		>
			<div
				class="flex justify-start gap-2 items-center sticky top-0 bg-white dark:bg-neutral-950 z-20 border-b py-3 px-3 border-neutral-200 dark:border-neutral-800"
			>
				<button
					class="flex items-center justify-center w-6 h-6 bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden"
					on:click={() => {
						sidePanel.set({
							open: false,
							component: null,
							props: {}
						});
					}}
				>
					<ChevronRightIcon />
				</button>
				<h2 class="text-md font-bold">
					{$sidePanel.props.title ? $sidePanel.props.title : ''}
				</h2>
			</div>
			{#if $sidePanel.component}
				<div class="flex flex-col gap-2 px-5">
					<svelte:component this={$sidePanel.component} {...$sidePanel.props} />
				</div>
			{/if}
		</div>
	{/if}
</div>
