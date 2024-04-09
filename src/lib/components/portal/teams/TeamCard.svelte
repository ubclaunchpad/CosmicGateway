<script lang="ts">
	import type { Team } from '$lib/types/types';
	export let team: Team;
</script>

<a
	class="card p-3 flex border bg-white overflow-hidden dark:border-neutral-900 border-base-200 rounded-3xl w-96 flex-col flex-shrink-0 relative dark:bg-neutral-800 shadow-sm"
	href={`/teams/${team.label}-${team.id}`}
>
	<div class="px-3 z-10 pb-8 py-6 items-center flex flex-col flex-2">
		<h2 class=" pb-2 font-semibold text-neutral-700 w-full">
			{team.label}
		</h2>
		<p class="text-xs text-neutral-500 dark:text-neutral-400 truncate w-full line-clamp-2">
			{team.description}
		</p>
	</div>
	<img
		class=" w-full object-cover rounded-2xl h-80"
		src={team.image_link
			? team.image_link
			: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDPlpGIQ3dL4B72cLafz5O3dpT3O_WzwZ6STP-CHu4w&s'}
		alt={team.label}
	/>
</a>
