<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { sidePanel } from '../../../stores/sidepanel';
	let panel;
	sidePanel.set({ component: null, props: {}, open: false });
	// $: sidePanel.subscribe((value) => {
	// 	panel = value;
	// });
</script>

<div class="h-full overflow-scroll flex w-full">
	<div class="relative flex-col overflow-scroll flex-1 h-full px-4 py-8">
		<slot name="main" class="content" />
	</div>

	{#if $sidePanel && $sidePanel.component}
		<div
			class={`flex flex-col gap-6 ${$sidePanel.open ? 'w-96' : 'w-10'} bg-white rounded-l-sm p-5 relative slider`}
			transition:slide={{ duration: 300, axis: 'x', easing: quintOut }}
		>
			{#if $sidePanel.component}
				<svelte:component this={$sidePanel.component} {...$sidePanel.props} />
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.slider {
		transition: width 0.2s ease-out;
	}
</style>
