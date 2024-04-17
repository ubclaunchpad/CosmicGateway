<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, updateTheme } from '../../../stores/theme';
	import Icon from './Icon.svelte';
	import MoonIcon from './icons/MoonIcon.svelte';
	import SunIcon from './icons/SunIcon.svelte';
	import { cn } from '$lib/utils';
	export let isCompact = false;
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
	class={cn(
		'relative w-fit gap-2 pb-4 flex flex-col justify-center items-center align-middle select-none transition duration-200 ease-in',
		`${isCompact ? 'flex-col' : 'flex-row'}`
	)}
>
	<button
		name="toggle"
		id="toggle"
		on:click={toggleTheme}
		class="flex w-8 h-8 rounded-full dark:bg-neutral-700 justify-center items-center cursor-pointer bg-neutral-200"
	>
		<Icon>
			{#if isDark}
				<MoonIcon />
			{:else}
				<SunIcon />
			{/if}
		</Icon>
	</button>
	<button
		name="toggle"
		id="toggle"
		on:click={toggleTheme}
		class="flex w-8 h-8 rounded-full dark:bg-neutral-700 justify-center items-center cursor-pointer bg-neutral-200"
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
