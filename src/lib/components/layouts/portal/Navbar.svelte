<script>
	import Icon from '$lib/components/general/Icon.svelte';
	import { HomeIcon, UsersIcon, SettingsIcon, ResourcesIcon } from '$lib/components/general/icons';
	import logo from '$lib/assets/logo.png';
	import { signout } from '../../../../stores/auth';
	import { createEventDispatcher } from 'svelte';
	import { DOCS_LINK } from '$lib/util/links';
	import VerticalDotsIcon from '$lib/components/general/icons/VerticalDotsIcon.svelte';
	const dispatch = createEventDispatcher();
	function triggerNavEffect() {
		dispatch('navigate', {});
	}
	let dropdownOpen = false;


	const links = [
		{
			name: 'Dashboard',
			icon: HomeIcon,
			link: '/portal',
		},
		{
			name: 'Documentation',
			icon: ResourcesIcon,
			link: DOCS_LINK
		},
		{
			name: 'Members',
			icon: UsersIcon,
			link: '/portal/members',
		},
		{
			name: 'Teams',
			icon: UsersIcon,
			link: '/portal/teams',
		},
		{
			name: 'Settings',
			icon: SettingsIcon,
			link: '/portal/account',
		
		}
	]
</script>

<div class="h-full pt-14 flex flex-col">
	<nav class="flex flex-col gap-4 justify-start items-center h-full transition-all duration-300 flex-1">
	  <div class="flex items-center gap-2 text-lg mb-4 font-bold  w-full px-3">
		<img src={logo} alt="logo" width="24px" />
		Launch Pad
	  </div>
	  <ul class=" flex flex-col gap-4 justify-start items-center w-full transition-all h-full duration-300 px-4">
		{#each links as link }
		<li class="p-2 w-full rounded flex justify-center items-center transition-all duration-200 hover:bg-gray-100">

			<a href={link.link} on:click={triggerNavEffect} class="flex items-center gap-2 w-full">
				<Icon>
					<svelte:component this={link.icon} />
				</Icon>
				{link.name}
			</li>
			{/each}
	  </ul>
	  <div class="flex flex-row justify-between items-center w-full border-t border-gray-200 p-2">
		<ul class="flex justify-start  items-center flex-grow">
			<li>
				<div class="relative inline-block text-left">
					<div>
					  <button
					   type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-2 py-1 text-sm font-semibold text-gray-900  " >
						<div class="circle-icon p-0 m-0 h-0 bg-gray-200 "></div>
					  </button>
					</div>
				  
				  </div>
			</li>
			
		</ul>	

		<div class="relative inline-block text-left ">
		<div>


		<button class="flex items-center gap-2 "  id="menu-button" aria-expanded="true" aria-haspopup="true" on:click={() => dropdownOpen = !dropdownOpen}>
			<VerticalDotsIcon />

		</button>
		</div>

		{#if dropdownOpen}
		<div class="absolute right-0 bottom-full mb-2 w-40 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
			<div class="py-1" role="none">
				<a href="/profile" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">View Profile</a>
			</div>
			<div class="py-1" role="none">
				<button class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-6" on:click={() => signout()}>Sign out</button>
			</div>
		</div>
	{/if}
		
	</div>
	  </div>
	</nav>
  </div>


<style lang="scss">
    .circle-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

</style>
