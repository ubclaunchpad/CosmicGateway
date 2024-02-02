<script lang="ts">
	import ResourceViewModal from '$lib/components/admin/ResourceViewModal.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import RoleOverview from '$lib/components/admin/RoleOverview.svelte';
	let showResources = false;
	let resourcesType = '';
</script>

<ResourceViewModal
	on:modalevent={() => {
		showResources = false;
	}}
	isOpen={showResources}
	type={resourcesType}
/>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6">
		<h1 class="text-3xl pb-1">Admin</h1>
		<div class="flex flex-row gap-3 w-full">
			<div
				class="container mx-auto py-4 px-2 bg-bg-50 h-80 rounded-lg border border-gray-200 w-full"
			>
				<div class="flex flex-col gap-4">
					<h3 class="text-lg text-center">Resources</h3>
					<button
						class="bg-gray-100 rounded-sm px-4 py-2 w-full"
						on:click={() => {
							resourcesType = 'standings';
							showResources = true;
						}}>Standings</button
					>
					<button
						class="bg-gray-100 rounded-sm px-4 py-2 w-full"
						on:click={() => {
							resourcesType = 'faculties';
							showResources = true;
						}}>Faculties</button
					>
					<button
						class="bg-gray-100 rounded-sm px-4 py-2 w-full"
						on:click={() => {
							resourcesType = 'specializations';
							showResources = true;
						}}>Specializations</button
					>
				</div>
			</div>
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg border border-gray-200" />
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg border border-gray-200" />
		</div>
	</div>
	<RoleOverview />
</MainPage>
