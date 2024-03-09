<script lang="ts">
	import { userScopes } from '../../../stores/scopes';
	let querying = true;
	import { onMount } from 'svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import {
		ExpandIcon,
		FilterIcon,
		OrderIcon,
		VerticalDotsIcon
	} from '$lib/components/general/icons';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import {
		userFieldMapper,
		type IUser,
		userFieldLabelMapper,
		userFieldVisibilityMapper
	} from '$lib/types/User';
	import { token } from '../../../stores/auth';
	import MemberViewModal from '$lib/components/members/MemberViewModal.svelte';
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	let users: IUser[] = [];
	let shownUser: IUser | null = null;
	$: scopes = $userScopes;
	export let data;
	onMount(() => {
		fetchUsers();
	});
	const fetchUsers = async () => {
		
		const res = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + $token
		}
	});
	const data = await res.json();
	users = data.data;
	};

	

	const showUser = (user: IUser) => {
		shownUser = user;
	};
</script>

<MainPage>
	<div slot="main" class=" flex flex-col gap-6">
		<div class="flex justify-between items-center w-full h-full">
			<h1 class="text-3xl pb-1">Members</h1>
		</div>

		<input
			type="text"
			placeholder="Search members"
			class="border border-gray-200 bg-gray-100 h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
		/>

		<div
			class="flex justify-start w-full overflow-scroll overflow-y-auto rounded border-gray-200 border"
		>
			{#if !users || users.length === 0}
				<Loader height={'100%'} width={'100%'} />
			{:else}
				<table
					class="w-full text-left border-collapse table-auto divide-y divide-gray-200 overflow-scroll"
				>
					<thead class="">
						<tr>
							<th />
							{#each Object.keys(users[0]) as key}
								{#if userFieldVisibilityMapper(key)}
									<th class="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
										>{userFieldLabelMapper(key)}</th
									>
								{/if}
							{/each}
						</tr>
					</thead>

					<tbody class=" divide-y divide-gray-200">
						{#each users as user}
							<tr>
								<td>
									{#if scopes.has('admin:read')}
										<button
											on:click={() => {
												showUser(user);
											}}
										>
											<Icon>
												<ExpandIcon />
											</Icon>
										</button>
									{/if}
								</td>
								{#each Object.entries(user) as [key, value]}
									{#if userFieldVisibilityMapper(key)}
										<td class="px-6 py-4 whitespace-nowrap">
											{userFieldMapper(key, value)}
										</td>
									{/if}
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>
	</div>
</MainPage>

<!-- {#if shownUser != null}
	<MemberViewModal
	  on:modalevent={() => {
		shownUser = null;
	  }}
	  isOpen={shownUser != null}
	  referenceUser={shownUser}
	/>
  {/if} -->
