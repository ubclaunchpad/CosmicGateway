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
						'w-full p-2 px-6   prose dark:!prose-invert  py-5 outline-none w-full  min-h-20 min-w-[800px] max-w-[1000px] '
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
	<div class=" h-full flex-1 flex flex-row w-full p-1 gap-4 justify-around">
		<div class=" h-full flex-2 flex flex-row max-w-full w-full doc-wrapper focus:shadow-md border bg-white border-neutral-200 rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-800">
			<EditorContent {editor} />
		</div>
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
