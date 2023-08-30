<script lang="ts">
	export let checked = false;
	export let color = '#2196F3';
	export let options = [
		{ value: '1', label: 'Option 1' },
		{ value: '2', label: 'Option 2' },
		{ value: '3', label: 'Option 3' }
	];
</script>

<label class="switch">
	{#each options as option}
		<button on:click={() => (checked = !checked)}>
			{option.label}
		</button>
	{/each}

	<!--    <span class="slider" />-->
</label>

<style lang="scss">
	.switch {
		position: relative;
		display: flex;
		background-color: var(--color-bg-2);
		border-radius: var(--border-radius-large);

		button {
			background-color: var(--color-bg-2);
			color: var(--color-text-1);
		}
	}

	/*.slider {*/
	/*    position: absolute;*/
	/*    cursor: pointer;*/
	/*    top: 0;*/
	/*    left: 0;*/
	/*    right: 0;*/
	/*    bottom: 0;*/
	/*    background-color: #ccc;*/
	/*    -webkit-transition: 0.4s;*/
	/*    transition: 0.4s;*/
	/*    border-radius: 34px;*/
	/*}*/

	/*.slider:before {*/
	/*    position: absolute;*/
	/*    content: "";*/
	/*    height: 26px;*/
	/*    width: 26px;*/
	/*    left: 4px;*/
	/*    bottom: 4px;*/
	/*    background-color: white;*/
	/*    -webkit-transition: 0.4s;*/
	/*    transition: 0.4s;*/
	/*    border-radius: 50%;*/
	/*}*/
</style>
