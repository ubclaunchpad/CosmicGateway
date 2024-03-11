<script>
	import { Editor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { onMount } from 'svelte';
	import { Markdown } from 'tiptap-markdown';
	import Document from '@tiptap/extension-document';
	import Heading from '@tiptap/extension-heading';
	import Paragraph from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	// import './styles.css';
	export let area;
	export let id;

	let initialMarkdownContent = `**Example** Markdown Text This is a paragraph in Markdown. Subheading. 
		\n## Heading 1`;
	/**
	 * @type {Editor}
	 */
	let editor;

	onMount(() => {
		//   const response = await fetch("./README.md");
		//   if (response.ok) {
		// If the response is fine, then populate the markdown and html content
		// initialMarkdownContent = await response.text();
		// initialHTMLContent = marked(initialMarkdownContent);
		//   } else {
		//     console.error("Failed to fetch README.md");
		//   }
		// Properties for new editor
		editor = new Editor({
			extensions: [StarterKit, Markdown, Document, Heading, Paragraph, Text],
			content: initialMarkdownContent,
			editorProps: {
				attributes: {
					class: 'w-full prose dark:!prose-invert !w-full h-full max-w-none outline-none'
				}
			}
		});
	});
</script>

<div class="flex flex-col gap-6 flex-1 h-full min-h-[60svh] dark:bg-neutral-900 w-full">
	<EditorContent {editor} />
</div>
