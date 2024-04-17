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
						'w-full p-2 px-6   prose dark:!prose-invert  py-5 outline-none w-full  min-h-20 max-w-[900px] '
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
	<div class="flex flex-col gap-4 w-full h-full p-4">
		<div class=" h-full flex-1 flex flex-row w-full p-1 gap-4 justify-around">
			<div
				class=" relative flex flex-row w-full doc-wrapper border-neutral-200 rounded-lg overflow-hidden dark:bg-neutral-900 dark:border-neutral-800"
			>
				<EditorContent {editor} />
				<div
					class=" flex-col gap-4 p-4 max-w-[200px] border rounded-lg shadow-sm min-w-80 border-neutral-200 dark:border-neutral-800 top-0 hidden lg:flex"
				>
					<h1 class="text-xl font-medium">Info</h1>
					<!-- <div class="prose dark:prose-invert" innerHTML={editor.storage.markdown.getHTML()}></div> -->
				</div>
			</div>
		</div>
		<footer class="p-4 w-full border-t border-neutral-200 dark:border-neutral-800">
			<p class="text-xs text-neutral-500 dark:text-neutral-400"></p>
		</footer>
	</div>
</div>

<style lang="scss">
	:global(.doc-wrapper > div:first-child) {
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
	}
</style>
