<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	// import DirectoryNavigation from './DirectoryNavigation.svelte';
	import HubNav from './HubNav.svelte';
	import ThemeToggle from '$lib/components/general/ThemeToggle.svelte';
	import Button from '$lib/components/general/Button.svelte';
	let isCompact = false;
	export let isMobile = false;
	let showNav = false;
	let draggedContainer = null;
	let startY;
	let currentY;
	let dragging = false;

	window.addEventListener('resize', () => {
		isCompact = window.innerWidth < 1200;
	});
	$: isCompact = window.innerWidth < 1200;

	function onTouchStart(e) {
		console.log(e);
		startY = e.touches[0].clientY;
		dragging = true;
	}

	function onTouchMove(e) {
		if (!dragging) return;
		currentY = e.touches[0].clientY;
		const relativeDragPosition = window.innerHeight - currentY;
		const bottomTenPercent = window.innerHeight * 0.3;
		if (relativeDragPosition <= bottomTenPercent) {
			showNav = !showNav;
		}
	}

	function onTouchEnd() {
		dragging = false;
	}
</script>

{#if isMobile}
	<div
		class={`  z-10    flex flex-col h-10 overflow-hidden flex-shrink-0 w-full`}
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<button class=" flex justify-center items-center" on:click={() => (showNav = !showNav)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
	</div>
	{#if showNav}
		<div class="flex fixed w-full flex-col flex-1 z-50 h-screen bg-black bg-opacity-30">
			<aside
				bind:this={draggedContainer}
				on:touchstart={onTouchStart}
				on:touchmove={onTouchMove}
				on:touchend={onTouchEnd}
				class={`absolute  bg-white z-60 min-h-[40vh] max-h-[70vh] h-fit bottom-0 flex flex-col shadow-2xl  rounded-t-xl overflow-hidden dark:bg-neutral-900 flex-shrink-0 w-full pointer-events-auto`}
				out:fly={{ duration: 400, y: '500' }}
				in:fly={{ duration: 400, y: '500' }}
			>
				<div class={`pb-2  flex flex-col flex-1  px-5`}>
					<div
						class="flex items-center gap-2 text-xl font-bold text-neutral-800
		dark:text-neutral-200
			w-full pb-5"
					></div>
					<div class=" pb-3">
						<div class="flex items-center gap-2">
							<!-- <input type="text" placeholder="Search" class="input input-bordered input-primary w-full max-w-xs h-8" /> -->
						</div>
					</div>
					<button class=" flex justify-center items-center" on:click={() => (showNav = !showNav)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
					<HubNav compact={false} />
					<div class="flex flex-col flex-1 overflow-hidden h-20 pt-3 border-gray-100">
						<!-- <DirectoryNavigation /> -->
					</div>
					<ThemeToggle />
				</div>
			</aside>
		</div>
	{/if}
{:else}
	<aside
		class={`relative bg-100 z-10   bg-neutral-50 dark:border-neutral-900 border-neutral-200 flex flex-col overflow-hidden dark:bg-neutral-950 flex-shrink-0 ${
			isCompact ? 'w-16' : 'w-60'
		}`}
		transition:slide={{ duration: 300, axis: 'x' }}
	>
		<div class={`pb-2 pt-10 flex flex-col flex-1 ${isCompact ? 'items-center p-0' : ' p-5'}`}>
			<div
				class="flex items-center gap-2 text-xl font-bold text-neutral-800
		dark:text-neutral-200
			w-full pb-5"
			>
				{#if !isCompact}
					<span class="line-clamp-1">Launch Pad</span>
				{:else}
					<span class="line-clamp-1 center w-full flex justify-center">{' '}</span>
				{/if}
			</div>
			<div class=" pb-3">
				<div class="flex items-center gap-2">
					<!-- <input type="text" placeholder="Search" class="input input-bordered input-primary w-full max-w-xs h-8" /> -->
				</div>
			</div>
			<HubNav compact={isCompact} />
			<div class="flex flex-col flex-1 overflow-hidden h-20 pt-3 border-gray-100">
				<!-- <DirectoryNavigation /> -->
			</div>
			<ThemeToggle {isCompact} />
		</div>
	</aside>
{/if}
