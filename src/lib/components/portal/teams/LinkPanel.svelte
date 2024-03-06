<script lang="ts">
	import Icon from '$lib/components/general/Icon.svelte';
	import IconMapper from '$lib/components/general/IconMapper.svelte';
	import { LinkIcon } from '$lib/components/general/icons';
	import { slide } from 'svelte/transition';

	export let links: any[];
	let newLink = {
		label: 'New Link',
		href: '',
		domain: 'link'
	};

	let showNewBtn = false;
</script>

<div class="flex flex-col gap-1 flex-wrap">
	{#each links as link}
		<a
			href={link.href}
			class="text-sm h-8 py-1 px-2 flex items-center gap-3 rounded-md hover:border-base-300 border border-base-200"
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconMapper domain={link.domain} />
			{link.label}
		</a>
	{/each}

	<div
		class="flex flex-col text-sm min-h-8 p-1 justify-center items-end gap-3 rounded-md hover:border-base-300 border border-base-200 border-dashed"
	>
		{#if showNewBtn}
			<form class="flex flex-col gap-1 px-1 w-full" in:slide={{ duration: 300, axis: 'y' }}>
				<section class="flex justify-between items-center gap-3">
					<label for="label-input" class="block w-12 text-xs text-gray-500">Label</label>
					<input
						id="label-input"
						type="text"
						bind:value={newLink.label}
						class=" h-8 w-full py-1 text-xs px-2 flex items-center gap-3 rounded-md hover:border-base-300 border border-base-200"
					/>
				</section>
				<section class="flex justify-between items-center gap-3">
					<label for="href-input" class="block w-12 text-xs text-gray-500">Link</label>
					<input
						id="href-input"
						type="text"
						bind:value={newLink.href}
						class="text-xs h-8 w-full py-1 px-2 flex items-center gap-3 rounded-md hover:border-base-300 border border-base-200"
					/>
				</section>
			</form>
		{/if}
		<div class="flex justify-end items-center gap-3 px-1">
			<button
				class={`text-sm w-fit py-1 h-7 px-2 flex items-center gap-3 rounded-md hover:border-dashed hover:border-base-300 ${
					showNewBtn ? 'border border-base-300' : 'border border-transparent'
				}`}
				on:click={() => (showNewBtn = !showNewBtn)}
			>
				<Icon>
					<LinkIcon />
				</Icon>
				New Link
			</button>
		</div>
	</div>
</div>
