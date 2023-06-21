<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import type { IUser } from '$lib/types/User';
	import { COLUMN_MAPPER, getDate } from '$lib/util/user';
	import { onMount } from 'svelte';
	import { notificationStore } from '../../../../stores/notification';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	export let id: number;
	let user: IUser;

	onMount(async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		user = await response.json();
	});

	const attributeMapper = (key, value) => {
		switch (key) {
			case 'firstName':
			case 'lastName':
			case 'PrefName':
			case 'username':
				return value;
			case 'createdAt':
			case 'updatedAt':
				return getDate(value);
			case 'faculty':
			case 'standing':
			case 'specialization':
				return JSON.parse(value).name;
			case 'roles':
				return JSON.parse(value).map((role) => role.name);
			default:
				return value;
		}
	};

	async function updateRequest(): Promise<void> {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${user.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (response.ok) {
			notificationStore.update((n) => {
				return {
					title: 'Account Updated',
					message: 'User account has been updated.',
					type: 'success'
				};
			});
		} else {
			const error = await response.json();
			notificationStore.update((n) => {
				return {
					title: 'Oops!',
					message: `${error}. if error persists, please contact us at ${STRATEGY_EMAIL}`,
					type: 'warning'
				};
			});
		}
	}
</script>

{#if user}
	<section class="profile">
		{#each Object.entries(user) as [key, value]}
			<section class="attribute">
				<p>{COLUMN_MAPPER[key]}</p>
				<p>{attributeMapper(key, value)}</p>
			</section>
		{/each}
	</section>
{:else}
	<Loader width={'100%'} height={'100%'} />
{/if}

<style lang="scss">
	.profile {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
		gap: 1rem;
		border-radius: 1rem;
		overflow: hidden;
		width: 100%;
		height: 100%;

		.attribute {
			display: flex;
			flex-direction: column;

			gap: 0.2rem;
			p {
				padding: 0.5rem 0.4rem;
				font-size: 0.9rem;

				&:first-child {
					color: var(--color-text-2);

					font-weight: 300;
				}

				&:last-child {
					border: 1px solid var(--color-border-1);
					background-color: var(--color-bg-3);
					border-radius: var(--border-radius-medium);
				}
			}
		}
	}
</style>
