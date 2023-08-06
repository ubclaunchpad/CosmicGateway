<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from '../layouts/Modal.svelte';
	import RoleManagementModal from "$lib/components/admin/RoleManagementModal.svelte";
	import AttributeManagement from "$lib/components/admin/AttributeManagement.svelte";
	export let isOpen: boolean;
	export let type;
	let res;

	const getResources = async () => {
		const response = await fetch('/api/resources', { method: 'GET' });
		res = (await response.json()).listOfRoles;
	};

	onMount(() => {
		getResources();
	});
</script>

<Modal title={'Manage Resources'} on:modalevent isModalOpen={isOpen} type="center">
	<div class="modal-content" slot="modal-content">
		{#if type === "roles"}
			<RoleManagementModal />
		{:else}
			<AttributeManagement attrEndpointName={type} />
		{/if}
	</div>

	<div class="bottombar" slot="bottom-bar">
		<footer>
			<!-- <button disabled={isEqual}>Save</button> -->
		</footer>
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

	.modal-content {
		padding: 1rem;
	}
</style>
