<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	const waveEmoji = "\u{1F44B}";
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6">
		<h1 class="text-3xl pb-1"
		>{waveEmoji} Welcome Back {`{{NAME}}`}</h1>
		<div class="container mx-auto px-4 bg-gray-100 w-full h-72 rounded-lg" />

		  <div class="flex flex-row gap-3">
			<div class="container mx-auto px-4 bg-gray-100 w-full h-80 rounded-lg">
			</div>
			<div class="container mx-auto px-4 bg-gray-100 w-full h-80 rounded-lg">
			</div>

		  </div>
	</div>
</MainPage>
