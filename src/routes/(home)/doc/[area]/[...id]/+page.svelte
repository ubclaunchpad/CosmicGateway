<script>
	import DocumentEditor from "$lib/components/wiki/DocumentEditor.svelte";

	export let data;
</script>

<main>
	<DocumentEditor area={data.area} id={data.id}/>
</main>

<style>
	main {
		max-width: 800px;
		margin: 40px auto;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>
