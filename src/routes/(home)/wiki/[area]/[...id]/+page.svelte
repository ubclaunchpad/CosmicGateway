<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import DocumentContentSide from '$lib/components/wiki/DocumentContentSide.svelte';
	import DocumentEditor from '$lib/components/wiki/DocumentEditor.svelte';
	import { sidePanel } from '$stores/sidepanel';
	import { onMount } from 'svelte';

	export let data;

	// onMount(() => {
	// 	sidePanel.set({
	// 	component: DocumentContentSide,
	// 	props: { area: data.area, id: data.id , title: 'Details' },
	// 	open: true
	// });
	// });
</script>

<MainPage>
	<div class="flex flex-col gap-2 w-full flex-1" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">{data.doc.name}</h1>
		</div>
		<DocumentEditor area={data.area.id} id={data.doc.id} />
	</div>
</MainPage>
