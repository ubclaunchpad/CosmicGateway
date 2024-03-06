<script lang="ts">
	import type { Team } from '$lib/types/types';
	import LinkPanel from './LinkPanel.svelte';
	export let team: Team;
	let description = team.description;
	let changed = false;
	$: changed = description !== team.description;
</script>

<div class="flex flex-col gap-6 flex-1">
	<div class="flex flex-col gap-6 flex-1">
		<div class="card w-full bg-base-100 rounded-lg border border-base-200">
			<div class="card-body py-5 gap-5 relative">
				<h2 class="card-title">About</h2>
				<textarea
					class="text-neutral-600 border-dashed border p-2 px-4 rounded-md"
					rows="6"
					bind:value={team.description}
				></textarea>
				<div class="flex gap-4 w-full justify-end bottom-10 right-10">
					<button class=" border border-base-200 btn btn-sm shadow-none" disabled={!changed}>
						Save
					</button>
				</div>
				<div class="relative inline-flex w-full">
					<svg
						class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 412 232"
						><path
							d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.762-9.763 25.592 0 35.355l181 181c9.763 9.763 25.592 9.763 35.355 0l181-181c9.763-9.763 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
							fill="#648299"
							fill-rule="nonzero"
						/></svg
					>
					<select
						multiple
						class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
					>
						<option>2023</option>
						<option>2022</option>
						<option>2021</option>
						<option>2020</option>
					</select>
				</div>
			</div>
		</div>

		<div class="card w-full bg-base-100 rounded-lg border border-base-200">
			<div class="card-body py-5 gap-5">
				<h2 class="card-title">Resources</h2>
				<LinkPanel links={team.meta_data.links} />
			</div>
		</div>

		<div class="card w-full bg-base-100 rounded-lg border border-base-200">
			<div class="card-body py-5 gap-5">
				<h2 class="card-title">Visibility</h2>
				<p class="text-neutral-600 text-sm">Control who can see your team and its contents.</p>
				<form class="flex flex-col gap-4 items-end">
					<select class="select select-bordered select-sm w-full">
						<option>Public</option>
						<option>Public to members</option>
						<option>Private</option>
					</select>
					<button class="btn btn-sm btn-primary">Save</button>
				</form>
			</div>
		</div>

		<div class="card w-full bg-base-200 rounded-lg border border-red-400">
			<div class="card-body py-5 gap-5">
				<h2 class="card-title">Admin</h2>
				<p class="text-neutral-600 text-sm">Transfer ownership or delete this team.</p>
				<form class="flex flex-row gap-4 items-end">
					<button class="btn btn-warning btn-sm btn-primary">Archive Team</button>
					<button class="btn btn-sm btn-error btn-primary">Delete Team</button>
				</form>
			</div>
		</div>
	</div>
</div>
