<script lang="ts">
	import { userScopes } from '../../../../stores/scopes';
	let querying = true;
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
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
	import { token } from '../../../../stores/auth';
	import MemberViewModal from '$lib/components/members/MemberViewModal.svelte';
	let users: IUser[] = [];
	let shownUser: IUser | null = null;
	$: scopes = $userScopes;
	onMount(() => {
		fetchUsers();
	});
	const fetchUsers = async () => {
		let userToken;
		token.subscribe((value) => {
			userToken = value;
		});
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + userToken
			}
		});
		users = await response.json();
		querying = false;
	};

	const showUser = (user: IUser) => {
		shownUser = user;
	};
</script>

<MainPage>
	<div slot="main" class="content">
		<div class="header">
			<h1>Members</h1>
			<div class="header-buttons">
				<button disabled>
					<Icon>
						<FilterIcon />
					</Icon>
				</button>
				<button disabled>
					<Icon>
						<OrderIcon />
					</Icon>
				</button>
				<button disabled>
					<Icon>
						<VerticalDotsIcon />
					</Icon>
				</button>
			</div>
		</div>

		<div class="table-wrapper">
			{#if querying}
				<Loader height={'100%'} width={'100%'} />
			{:else}
				<table>
					<thead>
						<tr>
							<th />
							{#each Object.keys(users[0]) as key}
								{#if userFieldVisibilityMapper(key)}
									<th>{userFieldLabelMapper(key)}</th>
								{/if}
							{/each}
						</tr>
					</thead>

					<tbody>
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
										<td>
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

{#if shownUser != null}
	<MemberViewModal
		on:modalevent={() => {
			shownUser = null;
		}}
		isOpen={shownUser != null}
		referenceUser={shownUser}
	/>
{/if}

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		padding: 0;
		width: 100%;
		.header-buttons {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: fit-content;
			column-gap: 10px;

			button {
				padding: 0.4rem;
				border-radius: 5px;
				transition: all 0.2s ease-in-out;
				border: 1px solid var(--color-bg-1);

				background-color: transparent;
				&:hover {
					background-color: var(--color-bg-1);
				}
			}
		}
	}
	.table-wrapper {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 0;
		overflow-x: scroll;
		border-radius: var(--border-radius-small);
		flex: 1;

		table {
			padding: 0;
			border-collapse: separate;
			border-spacing: 0;
			border-radius: var(--border-radius-small);
			thead > :first-child > :last-child {
				border-top-right-radius: var(--border-radius-small);
			}
			thead th:first-of-type {
				border-top-left-radius: var(--border-radius-small);
			}

			tbody > :last-child > :last-child {
				border-bottom-right-radius: var(--border-radius-small);
			}

			tbody > :last-child > :first-child {
				border-bottom-left-radius: var(--border-radius-small);
			}

			thead tr {
				text-align: left;
			}

			tr {
				th {
					font-weight: 400;
					background-color: var(--color-bg-primary-faded);
					font-size: 0.9rem;
					white-space: nowrap;
				}
				td,
				th {
					padding: 0.9rem;
					white-space: nowrap;
					font-weight: 600;
				}
			}

			tbody {
				font-size: 0.8rem;
				button {
					background-color: transparent;
				}
				tr:nth-of-type(odd) {
					background-color: var(--color-bg-2);
				}
				tr:nth-of-type(even) {
					background-color: var(--color-bg-3);
				}
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;
	}
</style>
