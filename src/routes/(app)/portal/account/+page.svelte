<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import Info from '$lib/components/blocks/Info.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import ProfileView from '$lib/components/portal/profile/ProfileView.svelte';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	import { userStore, signout, token } from '../../../../stores/auth';
	import { getUserInfo, type IUser } from '$lib/types/User';
	import { onMount } from 'svelte';
	import { fetcher } from '$lib/util/fetcher';
	import Loader from '$lib/components/blocks/Loader.svelte';
	let isOnEdit = false;
	let updating = false;
	let updateProfile: () => Promise<void>;
	let user: IUser;
	onMount(() => {
		if ($userStore && 'id' in $userStore) {
			getUserInfo($userStore.id).then((res) => {
				user = res;
			});
		}
	});

	async function deleteRequest(): Promise<void> {
		await fetcher({
			URI: `${PUBLIC_USERS_API_URI}/users/${$userStore?.id}`,
			requestInit: {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer  ${$token}`
				}
			},
			onSuccess() {
				signout();
			},
			notifySuccess: {
				title: 'Account deleted',
				message: 'User account has been deleted.',
				type: 'info'
			},
			notifyError: {
				title: 'Account deleted',
				message: `Account could not be deleted. if error persists, please contact us at ${STRATEGY_EMAIL}`,
				type: 'error'
			}
		});
	}

	async function modifyProfile() {
		updating = true;
		await updateProfile();
		isOnEdit = false;

		if ($userStore && 'id' in $userStore) {
			getUserInfo($userStore.id).then((res) => {
				user = res;
				updating = false;
			});
		}
	}
</script>

<MainPage>
	<div slot="main" class="content">
		<h1>Settings</h1>
		{#if updating}
			<Loader width={'100%'} height={'100%'} />
		{:else}
			<div class="account-group">
				<section class="account-section profile">
					<div class="header">
						<h2>Profile</h2>
						<div class="buttons">
							{#if isOnEdit}
								<button
									on:click={() => {
										isOnEdit = false;
									}}>Cancel</button
								>
								<button
									on:click={() => {
										modifyProfile();
									}}>Save</button
								>
							{:else}
								<button
									on:click={() => {
										isOnEdit = true;
									}}>Edit</button
								>
							{/if}
						</div>
					</div>

					{#if user}
						<ProfileView referenceUser={user} id={user.id} editView={isOnEdit} bind:updateProfile />
					{/if}
				</section>

				<section class="account-section integration">
					<h2>Integrations</h2>

					<section class="section-content">
						<Info>
							<p>
								Manage your integrations with external services. You can revoke access to any of
								these at any time.
							</p>
						</Info>
					</section>
				</section>

				<section class="account-section account">
					<h2>Account</h2>

					<section class="section-content">
						<form>
							<Info>
								<p>
									Deleting your account will remove all your data from our servers. This action is
									irreversible.
								</p>
							</Info>

							<div class="form-actions">
								<button type="submit" on:click={() => deleteRequest()}
									>Request to delete account</button
								>
							</div>
						</form>
					</section>
				</section>
			</div>
		{/if}
	</div>
</MainPage>

<style lang="scss">
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 10px;
		width: 100%;
		row-gap: 1rem;
		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		overflow: scroll;
	}

	h1 {
		padding-bottom: 0;
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: column;
	}

	.account-group {
		display: grid;
		grid-template-areas: 'profile integration' 'profile account';
		grid-template-columns: 1fr 1fr;
		width: 100%;
		height: 100%;
		padding: 0;
		grid-gap: 1rem;
		overflow-y: scroll;

		@media screen and (max-width: 1000px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-template-areas: 'profile' 'integration' 'account';
		}

		.profile {
			grid-area: profile;
		}
		.integration {
			grid-area: integration;
		}
		.account {
			grid-area: account;
		}
	}
	.account-section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		border: 0.8px solid var(--color-border-1);
		background-color: var(--color-bg-2);
		border-radius: var(--border-radius-small);
		box-shadow: var(--box-shadow-small);
		flex-wrap: nowrap;
		min-width: 0;
		padding: 0.5rem 0.5rem 0.6rem;
		width: 100%;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;

			.buttons {
				display: flex;
				flex-direction: row;
				column-gap: 0.4rem;
			}

			button {
				max-width: fit-content;
				padding: 0.5rem 1rem;
				border-radius: var(--border-radius-medium);
				background-color: var(--color-bg-0-faded);
				color: var(--color-text-1);
				border: 1px solid var(--color-border-2);
				font-size: 0.8rem;
				font-weight: 600;
				height: fit-content;
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				&:hover {
					background-color: var(--color-bg-primary);
				}
			}
		}

		h2 {
			font-size: 1.1rem;
			padding: 0.5rem 1rem;
			width: 8rem;
			font-weight: 500;
			color: var(--color-text-1);
		}
		.section-content {
			padding: 1rem;
			display: flex;
			grid-gap: 1rem;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			width: 100%;
			height: 100%;
			flex: 1;
			.form-actions {
				display: flex;
				justify-content: flex-end;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0;
				button {
					max-width: fit-content;
					padding: 0.5rem 1rem;
					border-radius: 4px;
					background-color: var(--color-bg-0-faded);
					color: var(--color-text-1);
					border: none;
					font-size: 0.9rem;
					font-weight: 500;
					cursor: pointer;
					transition: all 0.2s ease-in-out;
					&:hover {
						background-color: var(--color-bg-primary);
					}
				}
			}

			form {
				display: grid;
				grid-template-columns: 1fr;
				grid-gap: 1rem;
				column-gap: 4rem;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;

				@media screen and (max-width: 900px) {
					grid-template-columns: 1fr;
					grid-gap: 1rem;
					column-gap: 0;
				}
			}
		}
	}
</style>
