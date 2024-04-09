<script lang="ts">
	import { onMount } from 'svelte';
	import { modalPanel } from '../../../stores/modal';
	export let dom;

	const generateTableofContents = () => {
		console.log(dom);
		if (!dom) return [];

		console.log(dom);

		const headers = Array.from(dom.querySelectorAll('h2, h3, h4, h5, h6'));
		const toc = headers.map((header) => {
			return {
				level: parseInt(header.tagName[1]),
				title: header.innerText,
				id: header.id
			};
		});
		return toc;
	};

	let toc = [];

	onMount(() => {
		toc = generateTableofContents();
	});
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="flex flex-col pt-2 flex-1">
		<div
			class="flex flex-col gap-2 bg-base-100 border border-base-200 rounded-md dark:border-neutral-700 flex-1"
		>
			<h3 class="sticky top-0 p-2 py-3 border-b border-base-200 text-md dark:border-neutral-700">
				Info
			</h3>
			<div
				class="flex flex-col w-full divide-y border-t border-base-200 divide-base-200 dark:divide-neutral-700 dark:border-t-neutral-700 px-2"
			>
				<div class="flex flex-col gap-2 w-full">
					<h3 class="text-lg font-bold">Table of Contents</h3>
					{#each toc as item}
						<a
							href={`#${item.id}`}
							class="flex shadow-none text-sm flex-col bg-base-100 p-2 carousel-item dark:bg-neutral-800"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
