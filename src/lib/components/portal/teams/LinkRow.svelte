<script lang="ts">
	import IconMapper from '$lib/components/general/IconMapper.svelte';
	export let links: any[] | undefined = [];
</script>

<div class="flex-start gap-4 overflow-x-scroll flex w-full">
	{#each links as link}
		<a
			href={link.href}
			class="text-sm py-1 px-2 h-8 flex items-center gap-3 rounded-md hover:border-base-300 border border-base-200 shadow-sm w-fit whitespace-nowrap"
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconMapper domain={link.domain} />
			{link.label}
		</a>
	{/each}
</div>
