<script>
	import { Editor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { marked } from 'marked'; // For Markdown to HTML
	import { onMount } from 'svelte';


	// TODO - Marked extension for tiptap - when saving to DB
	let initialMarkdownContent = '# Example Markdown Text This is a paragraph in Markdown. ## Subheading';
	let initialHTMLContent;
	/**
	 * @type {Editor}
	 */
	let editor;
	//   export async function load({ params }) {
	//     const { id } = params;

	// 	// When we implement id, fetch the doc based on id - save to json
	//     const doc = await fetch(``).then(res => res.json());

	//     return {
	//       props: {
	//         doc
	//       }
	//     };
	//   }
		
	onMount(async () => {
		//   const response = await fetch("./README.md");
		//   if (response.ok) {
		// If the response is fine, then populate the markdown and html content
		// initialMarkdownContent = await response.text();
		initialHTMLContent = marked(initialMarkdownContent);
		//   } else {
		//     console.error("Failed to fetch README.md");
		//   }
		// Properties for new editor
		editor = new Editor({
			extensions: [StarterKit],
			content: initialHTMLContent
		});
	});
</script>

<main>
	<EditorContent {editor} />
</main>

<style>
	main {
		max-width: 800px;
		margin: 40px auto;
		padding: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
</style>
