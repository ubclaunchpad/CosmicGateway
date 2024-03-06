<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './portal/navbar/Navbar.svelte';
	import { modalPanel } from '../../../stores/modal';
	import { blur, fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
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

	let modal;
	modalPanel.subscribe((value) => {
		modal = value;
	});
</script>

<div id="page" class="flex flex-col justify-start items-start overflow-hidden h-screen">
	{#if modal && modal.component}
		<div
			class={`fixed bg-[#ececec33] h-[100vh] w-[100vw] z-20 top-0 left-0 flex justify-center items-center p-10`}
			in:blur|global={{ duration: 400, easing: quintOut }}
		>
			<button
				class="fixed z-30 w-full h-full bg-[#00000033]"
				on:click={() => modalPanel.set({ component: null, open: false, props: {} })}
			></button>
			<div
				class="flex flex-col z-40 w-full gap-6 max-w-4xl bg-white rounded-md p-5 relative shadow-xl max-h-full overflow-scroll"
				in:blur|global={{ duration: 400, easing: quintOut }}
			>
				{#if modal.component}
					<svelte:component this={$modalPanel.component} {...$modalPanel.props} />
				{/if}
			</div>
		</div>
	{/if}
	<div class="flex flex-row w-full h-full">
		<Navbar on:navigate={collapseNav} />
		<main
			class={'flex-1 flex flex-col justify-between items-start overflow-scroll h-full bg-bg-100 '}
		>
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
