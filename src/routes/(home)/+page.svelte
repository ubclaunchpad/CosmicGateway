<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';

	function greeting() {
		const date = new Date();
		const hours = date.getHours();
		if (hours < 12) {
			return '☀️ Good Morning ';
		} else if (hours < 18) {
			return '⛅ Good Afternoon';
		} else {
			return '🌙 Good Evening';
		}
	}
</script>

<MainPage>
	<div slot="main" class="content flex flex-col gap-6 items-center">
		<section class="flex flex-col gap-6 w-full justify-center items-center pb-5">
			<h1 class="text-2xl font-bold">{greeting()}</h1>
		</section>

		<div class="flex gap-6 w-full flex-col max-w-5xl items-center">
			<Card class="w-full overflow-hidden">
				<div slot="content" class=" flex w-full overflow-x-scroll gap-2 h-fit">
					<div class="flex justify-center items-center h-40 w-full">
						<p class="text-neutral-500 text-center">No teams yet</p>
					</div>
					<!-- {#each Array(6) as _}
						<div class=" flex-shrink-0 flex gap-4 items-center w-40 h-40 bg-gray-100 rounded-lg">
						</div>

					{/each} -->
				</div>
			</Card>

			<div class="flex gap-6 w-full items-center flex-col lg:flex-row">
				<Card class=" w-full h-96">
					<h1 class="text-sm font-bold" slot="title">Upcoming</h1>
					<div class="flex justify-center items-center flex-1" slot="content">
						<p class="text-neutral-500 text-center">Nothing on the horizon</p>
					</div>
				</Card>

				<Card class="bg-yellow-100 w-full h-96">
					<h1 class="text-sm font-bold" slot="title">Quick Notes</h1>
					<textarea
						slot="content"
						class="w-full text-sm h-full resize-none overflow-scroll border border-dashed border-transparent bg-transparent p-1 focus:outline-none focus:border-gray-200 px-2 rounded-md"
						placeholder="Type here..."
					/>
				</Card>
			</div>

			<!-- <Card class="w-fit">
				<div slot="content" class=" flex flex-wrap gap-2  w-fit h-fit">
					{#each Array(6) as _}
						<div class="flex gap-4 items-center w-32 h-32 bg-gray-100 rounded-lg">
						</div>
					{/each}
					</div>
			</Card> -->
		</div>
	</div>
</MainPage>
