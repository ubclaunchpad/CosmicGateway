<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	const waveEmoji = '\u{1F44B}';
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6">
		<h1 class="text-3xl pb-1">{waveEmoji} Welcome Back {`{{NAME}}`}</h1>
		<div class="flex flex-row gap-3">
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg shadow-sm" />
			<div class="container mx-auto px-4 bg-bg-50 w-4/6 h-80 rounded-lg shadow-sm" />
		</div>
		<div class="flex flex-row gap-3">
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg shadow-sm" />
			<div class="container mx-auto px-4 bg-bg-50 w-full h-80 rounded-lg shadow-sm" />
		</div>
		<div class="container mx-auto px-4 bg-bg-50 w-full h-72 rounded-lg shadow-sm" />
	</div>
</MainPage>
