<script lang="ts">
	import IconMapper from '$lib/components/general/IconMapper.svelte';
	export let links: any[];
</script>

<div class="card-actions gap-4 overflow-x-scroll">
	{#each links as link}
		<a
			href={link.href}
			class="text-sm py-1 px-2 h-8 flex items-center gap-3 rounded-md hover:border-base-300 border border-base-200 shadow-sm"
			target="_blank"
			rel="noopener noreferrer"
		>
			<IconMapper domain={link.domain} />
			{link.label}
		</a>
	{/each}
</div>
