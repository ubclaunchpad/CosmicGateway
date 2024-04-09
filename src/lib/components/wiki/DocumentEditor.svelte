<script>
	import { Editor, EditorContent } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { onMount } from 'svelte';
	import { Markdown } from 'tiptap-markdown';
	import Document from '@tiptap/extension-document';
	import Heading from '@tiptap/extension-heading';
	import Paragraph from '@tiptap/extension-paragraph';
	import Text from '@tiptap/extension-text';
	import { PUBLIC_WIKI_API_URI } from '$env/static/public';
	// import './styles.css';
	import DocumentInfoSide from '$lib/components/wiki/DocumentInfoSide.svelte';
	import { sidePanel } from '$stores/sidepanel';

	let html = '<h1>Document Content</h1>';
	onMount(() => {
		sidePanel.set({
			component: DocumentInfoSide,
			props: { title: 'Details', dom: html },
			open: true
		});
	});
	export let area;
	export let id;

	$: html &&
		sidePanel.set({
			component: DocumentInfoSide,
			props: { title: 'Details', dom: html },
			open: true
		});

	let document = {
		name: 'Document Name',
		id: 'document-id',
		content: 'Document Content'
	};

	let draft = '';

	/**
	 * @type {Editor}
	 */
	let editor;

	onMount(async () => {
		const response = await fetch(`${PUBLIC_WIKI_API_URI}/areas/${area}/docs/${id}?content=true`);
		if (response.ok) {
			document = await response.json();
			draft = document.content;
		} else {
			console.error('Failed to fetch README.md');
		}

		editor = new Editor({
			extensions: [StarterKit, Markdown, Document, Heading, Paragraph, Text],
			content: draft,
			autofocus: true,
			editorProps: {
				attributes: {
					class:
						'w-full prose dark:!prose-invert !w-full h-full  outline-none w-full h-full min-h-20 min-w-[600px] max-w-full '
				}
			},

			onUpdate: ({ editor }) => {
				html = editor.getHTML();
			}
		});
	});
</script>

<div class="flex flex-col gap-6 flex-1 h-full min-h-[60svh] w-full relative items-center">
	<div
		class="flex justify-center gap-4 text-xs top-0 w-fit rounded-full bg-white dark:bg-neutral-800 p-2 px-8 border border-neutral-200 dark:border-neutral-800"
	>
		<button
			on:click={() => {
				const md = editor.storage.markdown.getMarkdown();
				fetch(`${PUBLIC_WIKI_API_URI}/areas/${area}/docs/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						content: md
					})
				});
			}}
		>
			Save
		</button>
		<button
			on:click={() => {
				editor.commands.setContent(document.content);
			}}
		>
			Cancel
		</button>

		<button
			on:click={() => {
				editor.commands.clearContent();
			}}
		>
			Clear
		</button>
	</div>
	<!-- <DocumentInfoSide dom={html} /> -->
	<EditorContent {editor} />
</div>
