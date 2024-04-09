<script lang="ts">
	import Card from '../general/Card.svelte';

	const colors = {
		default: 'bg-primary-100 dark:bg-primary-700',
		gray: 'bg-base-100 dark:bg-neutral-800',
		yellow: 'bg-yellow-100 dark:bg-yellow-700',
		red: 'bg-red-100 dark:bg-red-700',
		green: 'bg-green-100 dark:bg-green-700',
		teal: 'bg-teal-100 dark:bg-teal-700',
		pink: 'bg-pink-100 dark:bg-pink-700'
	};

	let noteColor = localStorage.getItem('quickNoteColor') || 'default';
	let showColors = false;
</script>

<Card class={`w-full h-96 flex-2 ${colors[noteColor]}`}>
	<div class="flex w-full justify-between items-center h-full" slot="title">
		<h1 class="text-sm font-bold w-full">Quick Notes</h1>
		<div
			class="flex gap-2 w-full h-6 justify-end items-center"
			on:mouseenter={() => (showColors = true)}
			on:mouseleave={() => (showColors = false)}
		>
			{#if showColors}
				{#each Object.entries(colors) as [color, value]}
					<button
						class={`w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600 ${value}`}
						on:click={() => {
							if (typeof window !== 'undefined' && window.localStorage) {
								localStorage.setItem('quickNoteColor', color);
								noteColor = color;
							}
						}}
					>
					</button>
				{/each}
			{:else}
				<button
					class={`w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-600 ${colors[noteColor]}`}
				></button>
			{/if}
		</div>
	</div>

	<textarea
		on:change={(e) => {
			if (typeof window !== 'undefined' && window.localStorage) {
				localStorage.setItem('quickNote', e.target.value);
			}
		}}
		slot="content"
		class="w-full text-sm h-full resize-none overflow-scroll border border-transparent bg-transparent p-1 focus:outline-none focus:border-transparent px-2 rounded-md"
		placeholder={'Write a quick note'}
		value={localStorage.getItem('quickNote') || ''}
	/>
</Card>
