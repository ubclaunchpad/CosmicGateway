<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../general/Icon.svelte';
	import CloseIcon from '../general/icons/CloseIcon.svelte';

	export let isModalOpen: boolean;
	export let title: string;

	const dispatch = createEventDispatcher();
	function sayHello() {
		dispatch('modalevent', {
			text: 'Hello!'
		});
	}
</script>

{#if isModalOpen}
	<div class="modal-wrapper" out:fade={{ duration: 400 }}>
		<div class="modal" in:fly={{ y: 200, duration: 400 }} out:fly={{ y: '100%', duration: 400 }}>
			<div class="topbar">
				<button on:click={sayHello}
					><Icon>
						<CloseIcon />
					</Icon></button
				>
				<h3>{title}</h3>
				<div />
			</div>
			<slot name="modal-content" />
			<slot name="bottom-bar" />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background-color: var(--color-bg-0);
		padding: 0rem;
		border-radius: 0.3rem;
		width: 100%;
		max-width: 700px;
		height: 100%;
		max-height: 800px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		:global(.modal-content) {
			flex: 1;
			overflow: scroll;
		}

		.topbar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 0.5rem 1rem;
			border-bottom: 1px solid var(--color-bg-1);
		}

		:global(.bottombar) {
			display: flex;
			justify-content: flex-end;
			flex-direction: column;
			row-gap: 1rem;
			width: 100%;
			padding: 1rem 1rem;
			border-top: 1px solid var(--color-bg-1);
			align-items: center;
		}
	}
</style>
