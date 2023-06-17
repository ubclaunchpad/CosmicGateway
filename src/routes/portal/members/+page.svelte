<script lang="ts">
	let querying = true;
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import { onMount } from 'svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import { FACULTIES_V2, STANDINGS_V2 } from '../../../seed/util';
	import Icon from '$lib/components/general/Icon.svelte';
	import FilterIcon from '$lib/components/general/icons/FilterIcon.svelte';
	import OrderIcon from '$lib/components/general/icons/OrderIcon.svelte';
	import VerticalDotsIcon from '$lib/components/general/icons/VerticalDotsIcon.svelte';
	import type { UserI } from '../../../stores/auth';
	import MemberViewModal from '$lib/components/members/MemberViewModal.svelte';
	import { ExpandIcon, UsersIcon } from '$lib/components/general/icons';
	import InProgress from '$lib/components/blocks/InProgress.svelte';
	import Loader from '$lib/components/blocks/Loader.svelte';
	let users = [];
	let shownUser: UserI | null = null;
	onMount(() => {
		fetchUsers();
	});
	const fetchUsers = async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
			method: 'GET'
		});
		users = await response.json();
		querying = false;
	};

	function attributeMapper(key, value) {
		if (key === 'standing') {
			return STANDINGS_V2[value];
		}
		if (key === 'faculty') {
			return FACULTIES_V2[value];
		}
		if (key === 'resumeLink') {
			return `<a href="//${value}" target='_blank'>External Link</a>`;
		}
		if (key === 'email') {
			return `<a href="//mailto:${value}">${value}</a>`;
		}
		if (key === 'userId') {
			return ` <button style="background-color:transparent;"></button>`;
		}

		return value;
	}

	const COLUMN_MAPPER = {
		firstName: 'First Name',
		lastName: 'Last Name',
		prefName: 'Preferred Name',
		email: 'Email',
		faculty: 'Faculty',
		program: 'Program',
		standing: 'Standing',
		resumeLink: 'Resume',
		role: 'Role',
		userId: ''
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

		<div class="cards">
			<div class="c1">
				<InProgress title="Total Members" description="Total number of members in the system" />
			</div>
			<div class="c2">
				<InProgress title="pinned" description="pinned" />
			</div>
		</div>

		<div class="table-wrapper">
			{#if true}
				<Loader height={'100%'} width={'100%'} />
			{:else}
				<table>
					<thead>
						<tr>
							<th />
							{#each Object.keys(users[0]) as key}
								<th>{COLUMN_MAPPER[key]}</th>
							{/each}
						</tr>
					</thead>

					<tbody>
						{#each users as user}
							<tr>
								<td
									><button
										on:click={() => {
											shownUser = user;
										}}
									>
										<Icon>
											<ExpandIcon />
										</Icon>
									</button></td
								>
								{#each Object.entries(user) as [key, value]}
									{#if typeof value === 'object'}
										<td>
											{#if value != null}
												{#each Object.values(value) as val}{val}{/each}
											{:else}
												{'N/A'}
											{/if}
										</td>
									{:else}
										<td>{@html attributeMapper(key, value)}</td>
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

<MemberViewModal
	on:modalevent={() => {
		console.log('closing');
		shownUser = null;
	}}
	isOpen={shownUser != null}
	user={shownUser}
/>

<style lang="scss">
	.cards {
		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 100%;
		height: 20rem;
		gap: 1rem;
		padding: 1rem 0;

		> div {
			border-radius: var(--border-radius-xlarge);
			background-color: var(--color-bg-2);
			box-shadow: var(--box-shadow-small);
		}
	}
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
				img {
					width: 20px;
				}
			}
		}
	}
	.table-wrapper {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 0rem 0rem;
		overflow-x: scroll;
		border-radius: var(--border-radius-xlarge);
		border: 1px solid var(--color-border-1);
		flex: 1;

		table {
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 2px;
			padding: 0rem;
			border-collapse: separate;
			border-spacing: 0px;
			border-radius: 1rem;

			thead > :first-child > :last-child {
				border-top-right-radius: 5px;
			}

			thead th:first-of-type {
				border-top-left-radius: 5px;
			}

			tbody > :last-child > :last-child {
				border-bottom-right-radius: 5px;
			}

			tbody > :last-child > :first-child {
				border-bottom-left-radius: 5px;
			}

			thead tr {
				text-align: left;
			}

			tr {
				th {
					font-weight: 400;
					background-color: var(--color-bg-primary);
					font-size: 0.9rem;
					white-space: nowrap;
				}
				td,
				th {
					padding: 1rem;
					white-space: nowrap;
				}
			}

			tbody {
				font-size: 0.9rem;

				a {
					background-color: transparent;
				}
				button {
					background-color: transparent;
					img {
						width: 20px;
					}
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