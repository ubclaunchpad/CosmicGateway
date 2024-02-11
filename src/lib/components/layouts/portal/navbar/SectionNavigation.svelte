<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '$lib/components/general/Icon.svelte';
	import ChevronDownIcon from '$lib/components/general/icons/ChevronDownIcon.svelte';
	import ChevronRightIcon from '$lib/components/general/icons/ChevronRightIcon.svelte';
	import FolderIcon from '$lib/components/general/icons/FolderIcon.svelte';
	import FileIcon from '$lib/components/general/icons/FileIcon.svelte';
	export let directory;
	export let isExpanded = true;
	const toggleList = () => {
		isExpanded = !isExpanded;
	};
</script>

<div class="flex p-0 w-full">
	<li class="p-0 font-medium flex-1 relative overflow-hidden list-none">
		<div
			class="flex w-full space-x-2 py-1 rounded-md bg-inherit text-gray-500 items-center relative"
		>
			<span class="flex items-center gap-3 w-full">
				<Icon width="1rem">
					<FolderIcon />
				</Icon>
				<p class="line-clamp-1 flex items-center justify-center">
					{directory.name}
				</p>
			</span>

			<button class="bg-transparent flex justify-center items-center" on:click={toggleList}>
				<Icon>
					{#if isExpanded}
						<ChevronDownIcon />
					{:else}
						<ChevronRightIcon />
					{/if}
				</Icon>
			</button>
		</div>
		{#if isExpanded}
			<div class=" border-gray-200 pl-2">
				<ul class="pl-1 list-none" in:slide={{ axis: 'y', duration: 500 }}>
					{#if directory.files.length > 0}
						{#each directory.files as file}
							<li class="py-1">
								<a
									class="flex space-x-2 items-center text-decoration-none"
									href={`/docs/${directory.name}/${file.slug}`}
								>
									<Icon>
										<FileIcon />
									</Icon>
									<p class="overflow-ellipsis overflow-hidden">{file.slug}</p>
								</a>
							</li>
						{/each}
					{/if}

					{#if directory.directories && directory.directories.length > 0}
						{#each directory.directories as subDirectory}
							<svelte:self directory={subDirectory} />
						{/each}
					{/if}
				</ul>
			</div>
		{/if}
	</li>
</div>

<style lang="scss">
	:global(svg) {
		stroke-width: 2px;
		background-color: inherit;
		stroke: var(--color-text-3);
	}
</style>
