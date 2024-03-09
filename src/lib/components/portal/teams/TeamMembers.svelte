<script lang="ts">
	import type { Team } from '$lib/types/types';
	import { sidePanel } from '../../../../stores/sidepanel';
	export let team: Team;
	let members: any = [];

	const fetchMembers = async () => {
		members = [];
	};
</script>

<div class="card w-full bg-base-100 rounded-lg border border-base-200">
	<div class="card-body">
		<div class="header flex justify-between items-center pb-4">
			<h2 class="card-title">Members</h2>
			<div class="flex gap-4 justify-end"></div>
		</div>

		{#if members.length === 0}
			<div class="flex justify-center items-center h-40">
				<p class="text-neutral-500 text-center">No members yet</p>
			</div>
		{:else}
			<div class="grid grid-cols-3 gap-8 gap-y-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
				{#each members as member}
					<button
						on:click={() => {
							// sidePanel.set({
							// 	open: true,
							// 	props: {}
							// });
						}}
						class="flex p-2 hover:shadow-sm flex-col bg-neutral-50 rounded-md border border-base-300 carousel-item h-fit w-full"
					>
						<div class="flex gap-2">
							<div class="flex flex-col bg-neutral-50 rounded-md h-20 w-20">
								<img src={member.avatar} class="rounded-md" alt="avatar" />
							</div>
							<div class="flex flex-col gap-1">
								<h3 class="text-lg">{member.name}</h3>
								<p class="text-sm p-0 w-fit">{member.role}</p>
							</div>
						</div></button
					>
				{/each}
			</div>
		{/if}
	</div>
</div>
