<script lang="ts">
	import Navbar from './portal/navbar/Navbar.svelte';
	import { modalPanel } from '../../../stores/modal';
	import { blur, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
</script>

<div
	id="page"
	class="flex flex-col justify-start items-start overflow-hidden h-screen dark:text-white dark:border-neutral-800"
>
	{#if $modalPanel && $modalPanel.component}
		<div
			class={`fixed bg-[#ececec33] h-[100vh] w-[100vw] z-20 top-0 left-0 flex justify-center items-center p-10`}
			id="modal"
			in:blur={{ duration: 400, easing: quintOut }}
		>
			<button
				class="fixed z-30 w-full h-full bg-[#00000033] dark:bg-[#000000be]"
				on:click={() => modalPanel.set({ component: null, open: false, props: {} })}
			></button>

			<div
				class="flex flex-col z-40 gap-6 max-w-4xl bg-white dark:bg-neutral-900 rounded-md p-5 relative shadow-xl max-h-full overflow-scroll dark:bg-gray-800"
				in:scale={{ duration: 300, easing: quintOut }}
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
				id="main-page"
				class={'flex-1 flex flex-col justify-between items-start overflow-scroll h-full bg-bg-100 fade-in'}
			>
				<slot />
			</main>
		{/key}
	</div>
</div>
