<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './portal/navbar/Navbar.svelte';
	let pageWidth: number;
	let collapse = true;

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
	<div class="flex flex-row w-full h-full">
		<Navbar on:navigate={collapseNav} />
		<main class={'flex-1 flex flex-col justify-between items-start overflow-scroll h-full bg-bg-100 '}>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	:global(body) {
		-ms-overflow-style: none;

		/* For Firefox */
		scrollbar-width: none;

		/* For Chrome, Safari, Opera */
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
