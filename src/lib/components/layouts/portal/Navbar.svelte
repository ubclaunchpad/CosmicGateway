<script lang="ts">
	import { goto } from '$app/navigation';
	import { HomeIcon, UsersIcon, SettingsIcon } from '$lib/components/general/icons';
	import ResourcesIcon from '$lib/components/general/icons/ResourcesIcon.svelte';
	import { writable } from 'svelte/store';

	let links = [
		{ url: '/portal', icon: HomeIcon, text: 'Dashboard' },
		{ url: '/portal/members', icon: UsersIcon, text: 'Members' },
		{ url: '/portal/teams', icon: UsersIcon, text: 'Teams' },
		{ url: '/portal/resources', icon: ResourcesIcon, text: 'Resources' },
		{ url: '/portal/account', icon: SettingsIcon, text: 'Settings' }
		// Add more links as needed
	];

	const currentPath = writable(window.location.pathname);

	function navigate(url) {
		window.history.pushState({}, '', url);
		currentPath.set(window.location.pathname);
		goto(url);
	}
</script>

<div class="flex flex-col justify-start h-full">
	<nav class="py-2">
		<ul class="flex flex-col gap-4 items-center justify-center w-full">
			{#each links as link}
				<li
					class="flex justify-center items-center w-full py-2 px-2 {$currentPath === link.url
						? 'bg-gray-100'
						: ''}"
				>
					<a
						href={link.url}
						on:click|preventDefault={() => navigate(link.url)}
						class="flex items-center gap-4 w-full text-sm font-medium"
					>
						<svelte:component this={link.icon} />
						{link.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
