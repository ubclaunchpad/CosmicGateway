<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Timeline from '$lib/components/portal/Timeline.svelte';
	const waveEmoji = '\u{1F44B}';
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6">
		<!-- <h1 class="text-3xl pb-1">{waveEmoji} Welcome Back {`{{NAME}}`}</h1> -->
		<div class="flex justify-between items-center py-3 mb-3">
			<input
				type="text"
				placeholder="Search"
				class="w-80 rounded-md px-4 py-2 border border-gray-200"
			/>
		</div>

		<!-- <TeamList /> -->
		<div class="flex flex-row gap-3 w-full">
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg border border-gray-200" />
			<div class="container mx-auto px-4 bg-bg-50 w-fit h-80 rounded-lg border border-gray-200">
				<Timeline />
			</div>
		</div>
		<div class="flex flex-row gap-3">
			<div class="container mx-auto px-4 bg-bg-50 w-full h-96 rounded-lg border border-gray-200" />
			<div class="container mx-auto px-4 bg-bg-50 w-full h-96 rounded-lg border border-gray-200" />
		</div>
	</div>
</MainPage>
