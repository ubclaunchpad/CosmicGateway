<script lang="ts">
	export const options = [
		{
			name: 'Member',
			value: 'member'
		}
	];
	let selected = options[0].value;
</script>

<!-- toggle slider -->
<div class="slider">
	{#each options as option}
		<button class:selected={selected === option.value} on:click={() => (selected = option.value)}>
			{option.name}
		</button>
	{/each}
</div>

<style lang="scss">
	.slider {
		position: relative;
		display: flex;
		width: fit-content;
		padding: 2px;
		border-radius: 30px;
		border: 2px solid var(--color-bg-primary);
		background-color: var(--color-bg-0);
		overflow: hidden;
		flex-direction: row;
		column-gap: 1rem;

		button {
			border: 1px solid var(--color-bg-0);
			height: 100%;
			padding: 0.6rem 1rem;
			font-weight: 500;
			font-size: 0.9rem;
			color: var(--color-text-1);
			background-color: inherit;
			border-radius: 30px;
		}

		.selected {
			background-color: var(--color-bg-primary);
			color: var(--color-text-0-light);
		}
	}
</style>
