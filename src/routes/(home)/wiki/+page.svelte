<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { modalPanel } from '../../../stores/modal';
	import Button from '$lib/components/general/Button.svelte';
	import DocumentModal from '$lib/components/wiki/DocumentModal.svelte';
	import AreaCard from '$lib/components/wiki/AreaCard.svelte';
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
							component: DocumentModal,
							open: true,
							props: { area: 'admin', id: 'test' }
						});
					}}>New Document</Button
				>

				<!-- <Button class="">New Area</Button> -->
			</div>
		</div>
		<AreaCard />

		<Card>
			<h2 class="card-title" slot="title">Recent Documents</h2>
			<div class="flex overflow-x-scroll space-x-4 pt-4 w-full" slot="content">
				{#each Array(10) as _}
					<button
						on:click={() => {
							modalPanel.set({
								component: DocumentModal,
								open: true,
								props: { area: 'admin', id: 'test' }
							});
						}}
						class="flex shadow-sm flex-col bg-neutral-50 dark:bg-neutral-800 rounded-lg border border-base-300 carousel-item h-52 w-52 dark:border-neutral-800"
					>
					</button>
				{/each}
			</div>
		</Card>

		<Card>
			<h2 class="card-title" slot="title">Areas</h2>

			<div class="flex overflow-x-scroll space-x-4 pt-4 h-60" slot="content"></div>
		</Card>
	</div>
</MainPage>
