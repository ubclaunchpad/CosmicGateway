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
			link: '/portal'
		},
		{
			name: 'Documentation',
			icon: ResourcesIcon,
			link: DOCS_LINK
		},
		{
			name: 'Members',
			icon: UsersIcon,
			link: '/portal/members'
		},
		{
			name: 'Teams',
			icon: UsersIcon,
			link: '/portal/teams'
		},
		{
			name: 'Settings',
			icon: SettingsIcon,
			link: '/portal/account'
		},
		{
			name: 'Admin',
			icon: SettingsIcon,
			link: '/portal/admin'
		}
	];

	let isMobile = false;

	// update isMobile when the window is resized
	window.addEventListener('resize', () => {
		isMobile = window.innerWidth < 1200;
	});

	// set isMobile based on the initial window width
	isMobile = window.innerWidth < 1200;
</script>

<aside class="relative h-full bg-100 z-10">
	<div class="h-full pt-14 flex flex-col">
		<nav
			class={`flex flex-col gap-4 justify-start items-center h-full transition-all duration-300 flex-1 ${
				isMobile ? 'w-20' : 'w-52'
			} px-2`}
		>
			{#if !isMobile}
				<div class="flex items-center gap-2 text-lg mb-4 font-bold w-full px-3">
					<img src={logo} alt="logo" width="36px" />

					<span class=" nav-text line-clamp-1">Launch Pad</span>
				</div>
			{:else}
				<div class="flex items-center gap-2 text-lg mb-4 font-bold w-full px-3 justify-center">
					<img src={logo} alt="logo" width="36px" />
				</div>
			{/if}

			<ul
				class=" flex flex-col gap-4 justify-start items-center w-full transition-all h-full duration-300 px-2"
			>
				{#each links as link}
					<li class="p-2 w-full rounded flex justify-center items-center hover:bg-gray-100">
						<a
							href={link.link}
							on:click={triggerNavEffect}
							class="flex items-center gap-2 w-full justify-center"
						>
							<svelte:component this={link.icon} />

							{#if !isMobile}
								<span
									class="flex-1 line-clamp-1
									">{link.name}</span
								>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
			<div class="flex flex-row justify-between items-center w-full border-t border-gray-200 p-2">
				<button
					type="button"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					on:click={() => (dropdownOpen = !dropdownOpen)}
					class=" w-full justify-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-semibold text-gray-900"
				>
					<div class="circle-icon p-0 m-0 h-0 bg-gray-200" />
				</button>

				{#if dropdownOpen}
					<div
						class="absolte right-0 bottom-full w-40 origin-bottom-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="menu-button"
						tabindex="-1"
					>
						<div class="py-1 w-32" role="none">
							<button
								class="text-gray-700 px-4 py-2 text-sm"
								role="menuitem"
								tabindex="-1"
								id="menu-item-6"
								on:click={() => signout()}>Sign out</button
							>
						</div>
					</div>
				{/if}
			</div>
		</nav>
	</div>
</aside>

<style lang="scss">
	.circle-icon {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}

	@media (max-width: 1000px) {
		.nav-text {
			display: none;
		}
	}
</style>
