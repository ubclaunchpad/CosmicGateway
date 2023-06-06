<script lang="ts">
	import { onMount } from 'svelte';
	export let height: string;
	export let width = '100%';

	onMount(() => {
		const bar = document.getElementById('loader-wrapper');
		bar.style.height = height;
		bar.style.width = width;
	});
</script>

<div id="loader-wrapper">
	<div id="bar" />
</div>

<style lang="scss">
	#loader-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
		// background-color: var(--color-bg-1);
		position: relative;

		#bar {
			background: repeating-linear-gradient(120deg, var(--color-bg-1), var(--color-bg-0));
			// background-repeat: repeat;
			height: 100%;
			position: absolute;
			background-size: 400% 100%;
			animation: AnimationName 2s ease-in-out infinite;
			width: 100%;
		}

		@keyframes AnimationName {
			0% {
				background-position: 100% 50%;
			}
			100% {
				background-position: -33% 50%;
			}
		}
	}
</style>
