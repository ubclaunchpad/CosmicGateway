<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { blur, fade } from 'svelte/transition';

	type Tab = {
		title: string;
		content: typeof SvelteComponent | null;
		props: Record<string, any | unknown> | null;
	};

	export let title: string;
	let shownTab = 0;
	export let tabs: Tab[];
</script>

<div class="flex flex-col flex-1">
	<div role="tablist" class="w-full justify-end flex items-end">
		<h1 class="p-3 text-2xl text-bold flex-1">{title}</h1>
		<div
			class="flex bg-[#f9f9f9] h-fit w-fit border border-b-0 border-base-200 rounded-t-lg overflow-hidden dark:bg-neutral-800 dark:border-neutral-800"
		>
			{#each tabs as tab, i}
				<button
					id="tab-{i}"
					name="tab"
					class="p-2 text-sm px-4"
					class:active={i === shownTab}
					on:click={() => (shownTab = i)}
				>
					{tab.title}
				</button>
			{/each}
		</div>
	</div>
	<div
		role=""
		class="flex flex-col flex-1 border-base-200 rounded-lg p-3 border rounded-tr-none overflow-scroll dark:border-neutral-800"
	>
		{#each tabs as tab, i}
			{#if i === shownTab && tab.content}
				<div in:fade={{ duration: 300 }} class="flex flex-col flex-1">
					<svelte:component this={tabs[shownTab].content} {...tabs[shownTab].props} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	// [role='tablist'] button {
	// 	background-color: #f9f9f9;
	// }
	// [role='tablist'] button.active {
	// 	background-color: #fff;
	// }
	// [role='tablist'] button:hover {
	// 	background-color: #fff;
	// }
</style>
