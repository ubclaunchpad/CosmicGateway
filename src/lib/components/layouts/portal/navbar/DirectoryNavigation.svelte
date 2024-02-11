<script lang="ts">
	import SectionNavigation from '$lib/components/layouts/portal/navbar/SectionNavigation.svelte';
	export let directories = [
		{
			name: 'home',
			files: [
				{ slug: 'home' },
				{ slug: 'about' },
				{ slug: 'contact' }
			],
			directories: [
				{
					name: 'contact',
					files: [
						{ slug: 'contact' },
						{ slug: 'support' },
						{ slug: 'sales' }
					]
				}
			]
		},
		{
			name: 'about',
			files: [
				{ slug: 'about' },
				{ slug: 'team' },
				{ slug: 'values' }
			]
		},
		
	];
</script>

<div class="flex flex-col justify-start items-center overflow-y-scroll p-0  flex-1  ">
	{#each directories as { name: directory, files, directories: dirs } }
		<SectionNavigation directory={{ name: directory, files: files, directories: dirs }} />
	{/each}
</div>