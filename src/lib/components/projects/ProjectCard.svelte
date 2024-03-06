<script lang="ts">
	import VerticalDotsIcon from '$lib/components/general/icons/VerticalDotsIcon.svelte';
	import ProjectStatusIndicator from './ProjectStatusIndicator.svelte';
	export let project: any;
</script>

<div class="shadow-md h-40 p-8 bg-bg-50 rounded-lg">
	<div class="flex items-center mb-6 justify-between">
		<div class="flex gap-8 items-center">
			<h2 class="text-xl">{project.name}</h2>
			<ProjectStatusIndicator status={project.status} />
		</div>

		<button class="flex items-center gap-2">
			<VerticalDotsIcon />
		</button>
	</div>
	<div class="flex gap-12 text-slate-300 text-sm">
		<div>
			<p class="mb-1">Project Manager</p>
			<div class="bg-slate-300 p-4 rounded-full w-fit"></div>
		</div>
		<div>
			<p class="mb-1">Members</p>
			<div class="relative">
				<div class="absolute bg-slate-300 p-4 rounded-full w-fit"></div>
				<div class="absolute bg-slate-400 p-4 rounded-full w-fit left-4"></div>
				<div class="absolute bg-slate-500 p-4 rounded-full w-fit left-8"></div>
			</div>
		</div>
	</div>
</div>
