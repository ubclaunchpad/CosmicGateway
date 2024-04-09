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
	import { fetcher } from '$lib/util/fetcher';
	export let area;
	export let showInfo = false;

	export let id;
	let draft = '';
	let document = {};

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
						'w-full p-2 px-6   prose dark:!prose-invert  flex flex-col flex-1 outline-none w-full  min-h-20 min-w-[800px] max-w-[1000px] '
				}
			},

			onUpdate: ({ editor }) => {
				// html = editor.getHTML();
			}
		});
	});
</script>

<div class="flex flex-col gap-4 flex-1 h-full min-h-[60svh] w-full relative items-center">
	<div
		class="flex justify-center gap-4 text-xs top-0 rounded-full max-w-[60%] min-w-fit bg-white dark:bg-neutral-900 p-2 px-8 border border-neutral-200 dark:border-neutral-800"
	>
		<button
			on:click={() => {
				const md = editor.storage.markdown.getMarkdown();
				fetcher({
					URI: `${PUBLIC_WIKI_API_URI}/areas/${area}/docs/${id}`,
					requestInit: {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							content: md
						})
					},
					notifySuccess: {
						title: 'Document Saved',
						message: 'Your document has been saved'
					},
					notifyError: {
						title: 'Error',
						message: 'Failed to save document'
					}
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
	<div class=" h-full flex-1 flex flex-row w-full p-1 gap-4 justify-around">
		<div
			class=" h-full flex-2 flex flex-row max-w-full w-fit doc-wrapper focus:shadow-md border bg-white border-neutral-200 rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-800"
		>
			<EditorContent {editor} />
		</div>
		<!-- <div class=" flex-col gap-6  h-full sm:hidden xl:flex  xl:w-full flex-1 border-l p-4 border-neutral-200 dark:border-neutral-800 ">
		<h3 class="text-md font-medium w-full">Info</h3>
		<div class="flex flex-col gap-1 w-full flex-1 bg-neutral-50 p-2 rounded   text-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 text-xs">
			<div class="flex flex-row gap-2 w-full border-b border-b-neutral-200 dark:border-neutral-700">
				<h4 class="text-xs w-20">Created</h4>
				<p class="">{
					new Date(document.createdat).toLocaleDateString()
				}</p>
			</div>
			<div class="flex flex-row gap-2 w-full border-b border-b-neutral-200 dark:bg-neutral-800 dark:border-neutral-700">
				<h4 class=" w-20">Updated</h4>
				<p class="">{
					new Date(document.updatedat).toLocaleDateString()
				}</p>
			</div>	
		</div>
	

</div> -->
	</div>
</div>

<style lang="scss">
	:global(.doc-wrapper > div) {
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		flex: 1;
		flex-shrink: 0;
		align-items: center;
	}
</style>
