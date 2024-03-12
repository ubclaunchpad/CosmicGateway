<script lang="ts">
	import { sidePanel } from '../../../stores/sidepanel';
	if ($sidePanel.component) {
		sidePanel.set({
			open: false,
			component: null,
			props: {}
		});
	}
</script>

<div class="h-full overflow-scroll flex w-full dark:bg-neutral-950" id="main-page">
	<div class="relative flex-col overflow-scroll flex-1 h-full px-4 py-8">
		<slot name="main" class="content" />
	</div>

	{#if $sidePanel && $sidePanel.component}
		<div
			class={`flex flex-col gap-6 ${$sidePanel.open ? 'w-96' : 'w-10'} bg-white dark:bg-neutral-950 rounded-l-sm p-5 relative slider
			border-l border-neutral-200 dark:border-neutral-800
			`}
			id="side-panel"
		>
			{#if $sidePanel.component}
				<svelte:component this={$sidePanel.component} {...$sidePanel.props} />
			{/if}
		</div>
	{/if}
</div>