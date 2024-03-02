<script lang="ts">
	import { sidePanel } from '../../../stores/sidepanel';
	let panel;
	sidePanel.subscribe((value) => {
		panel = value;
	});
</script>

<div class="h-full overflow-scroll flex w-full">
	<div class="relative flex-col overflow-scroll flex-1 h-full px-14 py-8">
		<slot name="main" class="content" />
	</div>

	{#if panel && panel.component}
		<div
			class={`flex flex-col gap-6 ${panel.open ? 'w-96' : 'w-10'} bg-white rounded-xl p-5 relative slider overflow-scroll`}
			transition:slide={{ duration: 300, axis: 'x', easing: quintOut }}
		>
			<!-- <button on:click={() => sidePanel.update((prev) => ({...prev, open: !prev.open}))} class=" z-30 w-4 h-10 left-0 bg-white p-2 rounded-full  overflow-hidden absolute  border border-gray-500 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
				
				<div></div>
			</button> -->
			{#if panel.component}
				<svelte:component this={$sidePanel.component} {...$sidePanel.props} />
			{/if}
		</div>
	{/if}
</div>
