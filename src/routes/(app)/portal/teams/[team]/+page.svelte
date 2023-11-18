<script>
	import MainPage from '$lib/components/layouts/MainPage.svelte';

	export let data;
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6 h-full">
		<h1 class="text-2xl text-bold">{data.title}</h1>
		<div class="flex flex-row w-full h-full m-2 gap-6">
			<!-- Left Column -->
			<div class="flex flex-col gap-6 w-1/2">
				<div class="bg-gray-100 h-1/2 rounded-lg px-4">
					<h1 class="">About</h1>
				</div>
				<div class="bg-gray-100 h-1/2 rounded-lg px-4">
					<h1 class="">Upcoming meetings</h1>
				</div>
			</div>

			<!-- Right Column -->
			<div class="flex flex-col gap-6 w-1/2">
				<div class="bg-gray-100 h-2/3 rounded-lg px-4">
					<h1 class="">Members</h1>
				</div>
				<div class="flex flex-row gap-6 h-1/3">
					<div class="bg-gray-100 w-3/5 rounded-lg px-4">
						<h1 class="">Meetings Notes</h1>
					</div>
					<div class="bg-gray-100 w-2/5 rounded-lg px-4">
						<h1 class="">Showcase</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</MainPage>
