<script lang="ts">
	import Card from '../general/Card.svelte';
	import DocumentEditor from './DocumentEditor.svelte';
	export let area;
	export let id;
</script>

<div>
	<div class="flex flex-col gap-2 w-full flex-1">
		<Card>
			<h2
				class="card-title
            "
				slot="title"
			>
				Info
			</h2>
			<div class="flex overflow-x-scroll space-x-4 pt-4 w-full" slot="content">
				<p class="text-neutral-500 dark:text-neutral-400">
					At the moment, the document editor state is not being saved. This means that if you
					refresh the page, all your changes will be lost. This feature is coming soon.
				</p>
			</div>
		</Card>

		<Card>
			<div class="flex overflow-x-scroll space-x-4 pt-4 w-full" slot="content">
				<DocumentEditor {area} {id} />
			</div>
		</Card>
	</div>
</div>
