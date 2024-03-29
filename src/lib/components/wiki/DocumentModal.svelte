<script lang="ts">
	import DocumentEditor from './DocumentEditor.svelte';
	export let area: string;
	export let id: string;
</script>

<div class="flex flex-col gap-2 w-full flex-1 min-w-[700px] max-w-full min-h-[600px] max-h-full">
	<div class="flex overflow-x-scroll space-x-4 pt-4 w-full">
		<DocumentEditor {area} {id} />
	</div>
</div>
