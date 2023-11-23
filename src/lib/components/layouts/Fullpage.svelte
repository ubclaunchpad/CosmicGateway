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
	<!-- <TopNavBar /> -->

	<div class="flex flex-row w-full h-full">
		<aside class="relative w-56 h-full bg-100 z-10">
			<Navbar on:navigate={collapseNav} />
		</aside>

		<main
			class={'flex-1 flex flex-col justify-between items-start overflow-scroll h-full bg-bg-100 '}
		>
			<slot />
		</main>
	</div>
</div>
