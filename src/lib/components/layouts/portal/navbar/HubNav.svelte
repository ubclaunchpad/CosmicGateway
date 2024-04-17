<script lang="ts">
	import Icon from '$lib/components/general/Icon.svelte';
	import { HomeIcon, SettingsIcon } from '$lib/components/general/icons';
	import GridIcon from '$lib/components/general/icons/GridIcon.svelte';
	import OpenBook from '$lib/components/general/icons/OpenBook.svelte';
	import UsersListIcon from '$lib/components/general/icons/UsersListIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function triggerNavEffect() {
		dispatch('navigate', {});
	}
	export let compact = false;

	const links = [
		{
			name: 'Home',
			icon: HomeIcon,
			link: '/'
		},
		{
			name: 'Members',
			icon: UsersListIcon,
			link: '/members'
		},

		{
			name: 'Groups',
			icon: GridIcon,
			link: '/groups'
		},
		{
			name: 'Wiki',
			icon: OpenBook,
			link: '/wiki'
		},
		{
			name: 'Account',
			icon: SettingsIcon,
			link: '/account'
		},
		{
			name: 'Admin',
			icon: SettingsIcon,
			link: '/admin'
		}
	];

	const expandedStyle = 'flex items-center gap-4 w-full justify-center';
	const compactStyle =
		'flex w-8 h-8 rounded-full dark:bg-neutral-700  p-1 justify-center items-center cursor-pointer bg-neutral-100';
</script>

<nav
	class={`flex flex-col gap-4 justify-start items-center transition-all duration-300  h-fit pb-4`}
>
	<ul class=" flex flex-col gap-1 justify-start items-center w-full transition-all duration-300">
		{#each links as link}
			<li
				class="w-full rounded flex justify-center items-center py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-neutral-700 dark:hover:text-neutral-200
			text-sm"
			>
				<a
					href={link.link}
					on:click={triggerNavEffect}
					class={compact ? compactStyle : expandedStyle}
				>
					<Icon>
						<svelte:component this={link.icon} />
					</Icon>
					{#if !compact}
						<span class="flex-1 line-clamp-1">{link.name}</span>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</nav>
