<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import DocumentEditor from '$lib/components/wiki/DocumentEditor.svelte';

	export let data;
</script>

<MainPage>
	<div class="flex flex-col gap-2 w-full h-full flex-grow" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">{data.doc.name}</h1>
		</div>
		<div class="flex gap-4 items-center justify-between p-2 flex-1 flex-row">
			<DocumentEditor area={data.area.id} id={data.doc.id} />
		</div>
	</div>
</MainPage>
