<script lang="ts">
	import Modal from '../layouts/Modal.svelte';
	import AttributeManagement from '$lib/components/admin/AttributeManagement.svelte';
	export let isOpen: boolean;
	export let type: string = ' ';
</script>

<Modal title={`${type}`} on:modalevent isModalOpen={isOpen} type="center">
	<div slot="modal-content" class="h-full py-2">
		<AttributeManagement attrEndpointName={type} />
	</div>

	<div class="border-t border-gray-200 py-2 w-full" slot="bottom-bar">
		<footer class="flex justify-center items-center space-x-4" />
	</div>
</Modal>
