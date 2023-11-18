<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './portal/Navbar.svelte';
	import TopNavBar from './TopNavBar.svelte';
	let pageWidth: number;
	let collapse = true;
	const cutoff = 1200;
	$: transitionDuration = isCompact ? 300 : 0;
	$: isCompact = pageWidth < cutoff;

	onMount(() => {
		pageWidth = document.body.clientWidth;
		window.addEventListener('resize', () => {
			pageWidth = document.body.clientWidth;
		});
	});

	const collapseNav = () => {
		if (!collapse) collapse = true;
	};
</script>

<div id="page" class="flex flex-col justify-start items-start overflow-hidden h-screen">
	<TopNavBar />
    <div class="flex flex-row w-full h-full">
	<aside class="relative w-56 h-full bg-100 z-10 border-r-2 border-r-gray-200">
		<div class={`content flex-1 w-60 max-w-full transition-all duration-${transitionDuration}`}>
			<Navbar on:navigate={collapseNav} />
		</div>
	</aside>

	<main class={"flex-1 flex flex-col justify-between items-start overflow-hidden"}>
		<slot />
	</main>
	</div>
</div>