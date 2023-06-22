<script lang="ts">
	import type { IUser } from '$lib/types/User';
	import Modal from '../layouts/Modal.svelte';
	import ProfileView from '../portal/profile/ProfileView.svelte';
	export let user: IUser | undefined | null;
	export let isOpen: boolean;
</script>

<Modal title={'View Member'} on:modalevent isModalOpen={isOpen}>
	<div class="modal-content" slot="modal-content">
		<ProfileView id={user.id} referenceUser={user} />
	</div>

	<div class="bottombar" slot="bottom-bar">
		<footer>
			<!-- <button disabled={isEqual}>Save</button> -->
		</footer>
	</div>
</Modal>

<style lang="scss">
	.article {
		padding: 1rem;
		section {
			padding: 1rem 0;
			border-bottom: 1px solid var(--color-border-1);
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			width: 100%;

			:first-child {
				font-weight: 500;
				color: var(--color-text-2);
			}

			input,
			select {
				width: 100%;
			}

			* {
				font-size: 0.9rem;
				color: var(--color-text-1);
			}
		}
		.header {
			padding: 0rem 0 1rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			h2 {
				font-size: 1.2rem;
				color: var(--color-text-1);
			}
		}
	}

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
		border-top: 1px solid var(--color-border-0);
		padding: 0.4rem 0;
		width: 100%;

		button {
			padding: 0.5rem 1rem;
			color: var(--color-text-1);
			border-radius: 0.3rem;
			background-color: var(--color-bg-primary);
			&:disabled {
				background: var(--color-bg-2);
				cursor: not-allowed;
			}
		}
		* {
			color: var(--color-text-2);
			font-size: 0.9rem;
		}
	}
</style>
