<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { modalPanel } from '../../../stores/modal';
	import Button from '$lib/components/general/Button.svelte';
	import AreaCard from '$lib/components/wiki/AreaCard.svelte';
	import NewDocument from '$lib/components/wiki/NewDocument.svelte';
</script>

<MainPage>
	<div class="flex flex-col gap-6 flex-1" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Wiki</h1>
			<div class="flex gap-4">
				<Button
					class=""
					on:click={() => {
						modalPanel.set({
							component: NewDocument,
							open: true,
							props: { area: 'admin', id: 'test' }
						});
					}}>New Document</Button
				>

				<!-- <Button class="">New Area</Button> -->
			</div>
		</div>
		<AreaCard />
	</div>
</MainPage>
