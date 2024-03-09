<script lang="ts">
	import Navbar from './portal/navbar/Navbar.svelte';
	import { modalPanel } from '../../../stores/modal';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
</script>

<div id="page" class="flex flex-col justify-start items-start overflow-hidden h-screen">
	{#if $modalPanel && $modalPanel.component}
		<div
			class={`fixed bg-[#ececec33] h-[100vh] w-[100vw] z-20 top-0 left-0 flex justify-center items-center p-10`}
			id="modal"
			in:blur={{ duration: 400, easing: quintOut }}
		>
			<button
				class="fixed z-30 w-full h-full bg-[#00000033]"
				on:click={() => modalPanel.set({ component: null, open: false, props: {} })}
			></button>

			<div
				class="flex flex-col z-40 gap-6 max-w-4xl bg-white rounded-md p-5 relative shadow-xl max-h-full overflow-scroll"
				in:blur={{ duration: 300, easing: quintOut }}
			>
				{#if $modalPanel.component}
					<svelte:component this={$modalPanel.component} {...$modalPanel.props} />
				{/if}
			</div>
		</div>
	{/if}
	<div class="flex flex-row w-full h-full">
		<Navbar />
		{#key $page.url.pathname}
			<main
				in:blur={{ duration: 500, easing: quintOut }}
				id="main-page"
				class={'flex-1 flex flex-col justify-between items-start overflow-scroll h-full bg-bg-100 fade-in'}
			>
				<slot />
			</main>
		{/key}
	</div>
</div>
