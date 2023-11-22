<script lang="ts">
	import Icon from '../general/Icon.svelte';
	import ArrowRightIcon from '../general/icons/ArrowRightIcon.svelte';
	export let title: string;
	export let description: string;
	export let links: { link: string; text: string }[] = [];
	export let type = 0;
</script>

<div class="w-full">
	{#each Array(type) as _}
		<div />
	{/each}
	<div
		class="flex flex-col justify-start items-start w-full h-full gap-4 rounded shadow-sm p-4 border border-gray-200 bg-gray-100"
	>
		<div class="flex flex-row gap-4 items-center">
			<h3>{title}</h3>
		</div>
		<p>
			{description}
		</p>
		<div class="flex flex-1 h-full flex-col w-full items-end justify-end gap-4">
			{#each links as link}
				<a
					href={link.link}
					target="_blank"
					class="flex flex-row justify-between items-center bg-transparent gap-2 py-1 px-0 border-b border-gray-300 transition-all duration-200 ease-in-out transform hover:scale-105"
				>
					<p class="text-sm font-medium text-gray-800">{link.text}</p>
					<Icon>
						<ArrowRightIcon />
					</Icon>
				</a>
			{/each}
		</div>
	</div>
</div>
