<script lang="ts">
	import { slide } from 'svelte/transition';
	import DirectoryNavigation from './DirectoryNavigation.svelte';
	import HubNav from './HubNav.svelte';
	let isMobile = false;
	window.addEventListener('resize', () => {
		isMobile = window.innerWidth < 1200;
	});
	isMobile = window.innerWidth < 1200;
</script>

{#if !isMobile}
	<aside
		class="relative bg-100 z-10 w-[240px] flex flex-col overflow-hidden"
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<div class=" p-5 pt-10 flex flex-col flex-1">
			<div class="flex items-center gap-2 text-xl font-bold text-neutral-800 w-full pb-5">
				<span class="line-clamp-1">Launch Pad</span>
			</div>
			<div class=" pb-3">
				<div class="flex items-center gap-2">
					<!-- <input type="text" placeholder="Search" class="input input-bordered input-primary w-full max-w-xs h-8" /> -->
				</div>
			</div>
			<div class="flex flex-col flex-1 overflow-hidden h-20 pt-3 border-gray-100">
				<!-- <DirectoryNavigation /> -->
			</div>
			<HubNav />
		</div>
	</aside>
{/if}
