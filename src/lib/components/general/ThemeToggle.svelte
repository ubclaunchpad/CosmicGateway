<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, updateTheme } from '../../../stores/theme';
	import Icon from './Icon.svelte';
	import MoonIcon from './icons/MoonIcon.svelte';
	import SunIcon from './icons/SunIcon.svelte';

	let isDark = $theme === 'dark';

	onMount(() => {
		theme.subscribe((value) => {
			isDark = value === 'dark';
		});
	});

	function toggleTheme() {
		updateTheme(isDark ? 'light' : 'dark');
	}
</script>

<div
	class="relative w-full flex justify-start items-center align-middle select-none transition duration-200 ease-in"
>
	<button
		name="toggle"
		id="toggle"
		on:click={toggleTheme}
		class="flex w-6 h-6 rounded-full dark:bg-neutral-700 justify-center items-center cursor-pointer bg-neutral-200"
	>
		<Icon>
			{#if isDark}
				<MoonIcon />
			{:else}
				<SunIcon />
			{/if}
		</Icon>
	</button>
</div>
