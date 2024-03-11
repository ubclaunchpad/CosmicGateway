<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import DocumentEditor from '$lib/components/wiki/DocumentEditor.svelte';

	export let data;
</script>

<MainPage>
	<div class="flex flex-col gap-2 w-full flex-1" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">{data.area}/{data.id}</h1>
		</div>
		<DocumentEditor area={data.area} id={data.id} />
	</div>
</MainPage>
