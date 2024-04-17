<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { modalPanel } from '../../../stores/modal';
	import Button from '$lib/components/general/Button.svelte';
	import AreaCard from '$lib/components/wiki/AreaCard.svelte';
	import NewDocument from '$lib/components/wiki/NewDocument.svelte';
	import CollectionCard from '$lib/components/wiki/CollectionCard.svelte';
	import PlusCircle from '$lib/components/general/icons/PlusCircle.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import NewArea from '$lib/components/wiki/NewArea.svelte';
</script>

<MainPage>
	<div class="flex flex-col gap-6 flex-1" slot="main">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Wiki</h1>
			<div class="flex gap-4">
				<Button
					class="flex gap-2 justify-center items-center rounded"
					on:click={() => {
						modalPanel.set({
							component: NewArea,
							open: true,
							props: {}
						});
					}}
				>
					New
					<Icon class={'w-5'}>
						<PlusCircle />
					</Icon>
				</Button>
			</div>
		</div>
		<AreaCard />
	</div>
</MainPage>
