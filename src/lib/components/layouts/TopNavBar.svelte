<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import { signout } from '../../../stores/auth';
	let dropdownOpen = false;
</script>

<nav class=" px-2 mt-0 w-full h-12 border-b-2 border-b-gray-200">
	<div class="mx-auto flex flex-wrap w-full h-full flex-row items-center">
		<div class="flex items-center">
			<img src={logo} alt="Logo" class="h-8 w-8 mr-2" />
			<span class="font-semibold text-xl tracking-tight">Launch Pad</span>
		</div>
		<ul class="flex justify-end items-center flex-grow">
			<li>
				<div class="relative inline-block text-left">
					<div>
						<button
							on:click={() => (dropdownOpen = !dropdownOpen)}
							type="button"
							class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-semibold text-gray-900"
							id="menu-button"
							aria-expanded="true"
							aria-haspopup="true"
						>
							<div class="circle-icon p-0 m-0 h-0 bg-gray-200" />
						</button>
					</div>

					{#if dropdownOpen}
						<div
							class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
							tabindex="-1"
						>
							<div class="py-1" role="none">
								<a
									href="/profile"
									class="text-gray-700 block px-4 py-2 text-sm"
									role="menuitem"
									tabindex="-1"
									id="menu-item-4">View Profile</a
								>
							</div>
							<div class="py-1" role="none">
								<button
									class="text-gray-700 block px-4 py-2 text-sm"
									role="menuitem"
									tabindex="-1"
									id="menu-item-6"
									on:click={() => signout()}>Sign out</button
								>
							</div>
						</div>
					{/if}
				</div>
			</li>
		</ul>
	</div>
</nav>

<style lang="scss">
	.circle-icon {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
</style>
