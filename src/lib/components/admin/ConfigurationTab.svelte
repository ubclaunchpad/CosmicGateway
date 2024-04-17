<script lang="ts">
	import Card from '$lib/components/general/Card.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { configuration } from '$stores/configuration';
	import { modalPanel } from '../../../stores/modal';
	import Input from '../common/input/Input.svelte';
	import Button from '../general/Button.svelte';
</script>

<MainPage>
	<div class="flex flex-col gap-6 flex-1" slot="main">
		<div class="flex gap-6 flex-1">
			<Card class=" ">
				<h1 class="text-md font-bold" slot="title">Appearance and Identity</h1>
				<div
					class="flex flex-col gap-4 justify-between p-2 divide-y divide-neutral-200"
					slot="content"
				>
					<div class="flex flex-col gap-4 b p-2 flex-1 py-4">
						<div class="gap-5 items-center w-full flex">
							<label for="font">Name</label>
							<Input id="font" class="w-1/2" value={$configuration.name} />
						</div>
						<div class="gap-5 items-center w-full flex">
							<label for="font">Logo</label>
							<Input id="font" class="w-1/2" value={$configuration.logo} />
						</div>
					</div>
					<div class="flex flex-col gap-4 b p-2 flex-1 py-4">
						<h4 class="font-medium">Color Palette</h4>
						<div class="grid gap-5 items-center overflow-scroll grid-cols-6">
							{#each Object.entries($configuration.appearance.colorPalette) as [k, v]}
								<div class="flex gap-5 items-center">
									<div class="w-6 h-6 rounded-full border" style="background-color: {v}"></div>
									<span>{k}</span>
								</div>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-4 b p-2 flex-1 py-4">
						<h4 class="font-medium">Fonts and Misc.</h4>
						<div class="gap-5 items-center w-full flex">
							<label for="font">Font</label>
							<select id="font" class="w-1/2">
								<option value="Arial">Arial</option>
								<option value="Arial">Arial</option>
								<option value="Arial">Arial</option>
								<option value="Arial">Arial</option>
							</select>
						</div>
					</div>
				</div></Card
			>
			<Card class=" ">
				<h1 class="text-md font-bold" slot="title">Admin Account</h1>
			</Card>
		</div>
		<Card class=" ">
			<h1 class="text-md font-bold" slot="title">Feature Flags</h1>
			<div
				class="flex flex-col gap-4 justify-between p-2 divide-y divide-neutral-200"
				slot="content"
			>
				<ul
					class="flex flex-col flex-1 pb-3 overflow-y-hidden divide-y divide-neutral-200 border border-neutral-200 rounded-lg"
				>
					<li class="flex gap-5 items-center text-sm bg-neutral-200 p-3 font-medium">
						<span class="w-24 justify-center center flex">Enabled</span>
						<span class="w-40">Feature</span>

						<span class="w-32">Status</span>
						<span>Description</span>
					</li>
					{#each $configuration.featureFlags as flag}
						<li class="flex gap-5 items-center text-sm pt-2 pb-1">
							<input class={'w-24 '} type="checkbox" checked={flag.enabled} />
							<span class="w-40 border-r border-neutral-200 font-medium">{flag.label}</span>

							<span class="w-32 border-r border-neutral-200">{flag.status}</span>
							<span>{flag.description}</span>
						</li>
					{/each}
				</ul>
			</div>
		</Card>
	</div>
</MainPage>
