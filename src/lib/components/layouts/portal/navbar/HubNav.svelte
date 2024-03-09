<script lang="ts">
	import Icon from '$lib/components/general/Icon.svelte';
	import { HomeIcon, UsersIcon, SettingsIcon } from '$lib/components/general/icons';
	import GridIcon from '$lib/components/general/icons/GridIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function triggerNavEffect() {
		dispatch('navigate', {});
	}

	const links = [
		{
			name: 'Home',
			icon: HomeIcon,
			link: '/'
		},
		{
			name: 'Members',
			icon: UsersIcon,
			link: '/members'
		},
		{
			name: 'Teams',
			icon: GridIcon,
			link: '/teams'
		},
		{
			name: 'Settings',
			icon: SettingsIcon,
			link: '/account'
		}
	];
</script>

<nav
	class={`flex flex-col gap-4 justify-start items-center transition-all duration-300  h-fit pb-4`}
>
	<ul class=" flex flex-col gap-4 justify-start items-center w-full transition-all duration-300">
		{#each links as link}
			<li class="w-full rounded flex justify-center items-center hover:bg-gray-100 text-sm">
				<a
					href={link.link}
					on:click={triggerNavEffect}
					class="flex items-center gap-4 w-full justify-center"
				>
					<Icon width="0.9rem">
						<svelte:component this={link.icon} />
					</Icon>
					<span class="flex-1 line-clamp-1">{link.name}</span>
				</a>
			</li>
		{/each}
	</ul>
</nav>
