<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../general/Icon.svelte';
	import CloseIcon from '../general/icons/CloseIcon.svelte';
	import { sineOut } from 'svelte/easing';
	export let type = 'center';
	export let isModalOpen: boolean;
	export let title: string;

	const dispatch = createEventDispatcher();
	function sayHello() {
		dispatch('modalevent', {});
	}
</script>

{#if isModalOpen}
	{#if type === 'side'}
		<div
			class="modal-wrapper side bg-[#00000033]
		"
			out:fade|global={{ duration: 300, easing: sineOut }}
		>
			<div
				in:fly|global={{ x: 400, duration: 400, easing: sineOut }}
				out:fly|global={{ x: 400, duration: 400, easing: sineOut }}
				class="modal bg-bg-50 border-l-2 border-red-200"
			>
				<div class="topbar">
					<button on:click={sayHello}>
						<CloseIcon />
					</button>
					<h3>{title}</h3>
				</div>
				<slot name="modal-content" />
				<slot name="bottom-bar" />
			</div>
		</div>
	{:else}
		<div class={'modal-wrapper'} out:fade|global={{ duration: 300, easing: sineOut }}>
			<div
				in:fade|global={{ duration: 300, easing: sineOut }}
				out:fly|global={{ y: 1000, duration: 300, easing: sineOut }}
				class="modal"
			>
				<div class="topbar">
					<button on:click={sayHello}
						><Icon>
							<CloseIcon />
						</Icon></button
					>
					<h3>{title}</h3>
				</div>
				<slot name="modal-content" />
				<slot name="bottom-bar" />
			</div>
		</div>
	{/if}
{/if}

<style lang="scss">
	.modal-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&.side {
			justify-content: flex-end;
			align-items: center;
			.modal {
				width: 400px;
				max-width: 100%;
				height: 100%;
				max-height: 100%;
				border-radius: var(--border-radius-small);
			}
		}
		:global(svg) {
			width: 18px;
			height: 18px;
			stroke-width: 2px;
		}
	}

	.modal {
		padding: 0;
		width: 100%;
		max-width: 750px;
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
			padding: 0.9rem 1rem;
			// background-color: var(--color-bg-primary-faded);

			h3 {
				font-size: 1rem;
				font-weight: 600;
			}

			button {
				background-color: transparent;

				&:hover {
					transform: scale(1.04);
				}
			}
		}

		:global(.bottombar) {
			display: flex;
			justify-content: flex-end;
			flex-direction: column;
			row-gap: 1rem;
			width: 100%;
			padding: 1rem 1rem;
			align-items: center;
		}
	}
</style>
