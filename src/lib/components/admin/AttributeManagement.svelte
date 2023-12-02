<script lang="ts">
	import type { IDict } from '$lib/types/User';
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	let attributes: { data: IDict<string>[] } = { data: [] };
	$: data = attributes.data;
	export let attrEndpointName: string;

	const getAttributes = async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/${attrEndpointName}`, { method: 'GET' });
		attributes = await response.json();
	};

	onMount(() => {
		getAttributes();
	});
</script>

<section class="flex flex-col space-y-4 flex-grow h-full p-4 overflow-y-scroll">
	<Info>
		<p class="text-sm text-gray-500">
			Currently, we don't support editing through the UI directly. Please use the API endpoints to
			edit the attributes.
		</p>
	</Info>

	<ul class="flex flex-col gap-4 h-full">
		{#each data as attr}
			<li class="flex flex-col bg-gray-100 rounded p-2 space-y h-fit">
				<div class="flex justify-between items-center">
					<p
						class="text-sm text-gray-500 h-fit
					"
					>
						{attr.label}
					</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
