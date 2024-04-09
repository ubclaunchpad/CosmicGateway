<script lang="ts">
	import IconMapper from '$lib/components/general/IconMapper.svelte';
	import { quickLinks } from '$lib/util/links';
	import Card from '$lib/components/general/Card.svelte';
	export let links: { href: string; domain: string; label: string }[] = quickLinks;
</script>

<Card class=" flex-1 h-96 overflow-y-hidden flex-shrink-0 min-w-80">
	<div class="flex w-full justify-between items-center" slot="title">
		<h1 class="text-sm font-bold">Links</h1>
	</div>
	<div class="flex flex-wrap gap-2 w-full h-fit" slot="content">
		<div class="flex-start gap-1 overflow-y-scroll w-full grid grid-cols-1 sm:grid-cols-1 max-h-96">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm py-1 px-2 h-8 flex items-center gap-3 rounded-md hover:border-primary-300 border border-base-200 shadow-sm w-full whitespace-nowrap
            text-neutral-600 dark:text-neutral-400 dark:border-neutral-800 dark:hover:border-primary-400 dark:bg-neutral-800"
					target="_blank"
					rel="noopener noreferrer"
				>
					<IconMapper domain={link.domain} />
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</Card>
