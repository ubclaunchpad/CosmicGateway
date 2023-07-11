<script lang="ts">
	import type { IUser } from '$lib/types/User';
	import Modal from '../layouts/Modal.svelte';
	import ProfileView from '../portal/profile/ProfileView.svelte';
	export let user: IUser | undefined | null;
	export let isOpen: boolean;
</script>

<Modal title={'View Member'} on:modalevent isModalOpen={isOpen} type="side">
	<div class="modal-content" slot="modal-content">
		<ProfileView id={user.id} referenceUser={user} />
	</div>

	<div class="bottombar" slot="bottom-bar">
		<footer />
	</div>
</Modal>

<style lang="scss">
	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
		border-top: 1px solid var(--color-border-0);
		padding: 0.4rem 0;
		width: 100%;
	}
</style>
