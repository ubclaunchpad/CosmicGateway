<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import {
		type IFaculty,
		type IRole,
		type ISpecialization,
		type IStanding,
		type IUser,
		type IUserPatchRequest,
		UserRequestMapper
	} from '$lib/types/User';
	import { getDate } from '$lib/util/user';
	import { notificationStore } from '../../../../stores/notification';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	export let id: number;
	let user: IUser;
	export let editView = false;
	export let referenceUser: IUser;
	let listOfFaculties: IFaculty = [];
	let listOfSpecializations: ISpecialization = [];
	let listOfStandings: IStanding = [];
	let listOfRoles: IRole = [];
	let querying = true;
	let hide = false;
	let changedFields = {};
	$: if (user && referenceUser) {
		changedFields = getChangedFields(referenceUser, user);
	}
	$: if (editView) {
		fetchFormDetails();
	}

	function getChangedFields(originalRef: IUser, modifiedRef: IUser) {
		const originalFields: IUserPatchRequest = UserRequestMapper(originalRef);
		const modifiedFields: IUserPatchRequest = UserRequestMapper(modifiedRef);
		const changedFields: IUserPatchRequest = {};

		for (const key in originalFields) {
			const fieldKey = key as keyof IUserPatchRequest;
			if (JSON.stringify(originalFields[fieldKey]) !== JSON.stringify(modifiedFields[fieldKey])) {
				const partialkey = key as keyof IUserPatchRequest;
				// TODO: fix TS error
				changedFields[partialkey] = modifiedFields[fieldKey];
			}
		}
		return changedFields;
	}

	async function getUserInfo(refresh = false) {
		if (!referenceUser || refresh) {
			const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			referenceUser = await response.json();
			user = structuredClone(referenceUser);
		} else if (!user) {
			user = structuredClone(referenceUser);
			return;
		}
	}

	const fetchFormDetails = async () => {
		const response = await fetch('/api/resources', {
			method: 'GET'
		});

		const resources = await response.json();
		listOfFaculties = resources.listOfFaculties;
		listOfSpecializations = resources.listOfSpecializations;
		listOfStandings = resources.listOfStandings;
		listOfRoles = resources.listOfRoles;
	};

	export const updateProfile = async () => {
		if (Object.keys(changedFields).length === 0) {
			notificationStore.set({
				title: 'Nothing to update',
				message: 'Please change one or more fields',
				type: 'warning'
			});
			return;
		}
		hide = true;

		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${referenceUser.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(changedFields)
		});

		if (response.ok) {
			notificationStore.set({
				title: 'Account Updated',
				message: 'User account has been updated.',
				type: 'success'
			});
		} else {
			const error = await response.json();
			notificationStore.set({
				title: 'Oops!',
				message: `${JSON.stringify(
					error
				)}. if error persists, please contact us at ${STRATEGY_EMAIL}`,
				type: 'warning'
			});
		}
		querying = true;
		hide = false;
	};

	$: if (querying) {
		getUserInfo(true).then(() => (querying = false));
	}
</script>

<div class="profile-content">
	<section class="profile">
		{#if querying || hide}
			<Loader width={'100%'} height={'100%'} />
		{:else}
			<h2>{editView ? '' : user.prefName}</h2>

			<section class="grid-row">
				{#if editView}
					<section class="attribute">
						<p>Preferred Name</p>
						<input bind:value={user.prefName} />
					</section>
				{:else}
					<section class="attribute role">
						<p />
						<p>{user.roles.map((role) => role.name).join(', ')}</p>
					</section>
				{/if}
			</section>

			<section class="grid-row">
				<section class="attribute">
					<p>Name</p>
					{#if !editView}
						<p>{referenceUser.firstName}</p>
					{:else}
						<input bind:value={user.firstName} />
					{/if}
				</section>

				<section class="attribute">
					<p>Last name</p>
					{#if !editView}
						<p>{referenceUser.lastName}</p>
					{:else}
						<input bind:value={user.lastName} />
					{/if}
				</section>
			</section>
			<section class="grid-row">
				<section class="attribute">
					<p>Email</p>
					<p>{user.email}</p>
				</section>

				<section class="attribute">
					<p>Username</p>
					{#if !editView}
						<p>{referenceUser.username}</p>
					{:else}
						<input bind:value={user.username} />
					{/if}
				</section>
			</section>

			<h3>Background</h3>

			<section class="grid-row">
				<section class="attribute">
					<p>Faculty</p>
					{#if !editView}
						<p>{referenceUser.faculty.name}</p>
					{:else}
						<select value={user.faculty.id}>
							{#each listOfFaculties as field}
								<option selected={user.faculty.id === field.id} value={field.id}
									>{field.name}</option
								>
							{/each}
						</select>
					{/if}
				</section>

				<section class="attribute">
					<p>Specialization</p>
					{#if !editView}
						<p>{referenceUser.specialization.name}</p>
					{:else}
						<select bind:value={user.specialization.id}>
							{#each listOfSpecializations as field}
								<option selected={user.specialization.id === field.id} value={field.id}
									>{field.name}
								</option>
							{/each}
						</select>
					{/if}
				</section>
			</section>

			<section class="attribute">
				<p>Standing</p>
				{#if !editView}
					<p>{referenceUser.standing.name}</p>
				{:else}
					<select bind:value={user.standing.id}>
						{#each listOfStandings as field}
							<option selected={user.standing.id === field.id} value={field.id}>{field.name}</option
							>
						{/each}
					</select>
				{/if}
			</section>

			<section class="attribute">
				<p>Resume</p>
				{#if !editView}
					<p>{referenceUser.resumeLink}</p>
				{:else}
					<input bind:value={user.resumeLink} />
				{/if}
			</section>

			<section class="grid-row">
				<section class="attribute">
					<p>Created At</p>
					<p class="stamp">{getDate(referenceUser.createdAt)}</p>
				</section>

				<section class="attribute">
					<p>Updated At</p>
					<p class="stamp">{getDate(referenceUser.updatedAt)}</p>
				</section>
			</section>
		{/if}
	</section>
</div>

<style lang="scss">
	.profile-content {
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
		overflow: hidden;
	}
	.profile {
		display: grid;
		grid-template-columns: 1fr;

		gap: 0.5rem;
		border-radius: 1rem;
		overflow-y: scroll;
		overflow-x: hidden;
		width: 100%;
		height: 100%;

		h2 {
			padding: 1rem 0 0rem;
			font-size: 1rem;
		}

		h3 {
			font-size: 0.9rem;
			padding: 1rem 0 1rem;
		}

		.grid-row {
			display: flex;
			justify-content: space-between;
			column-gap: 0.5rem;
			flex-wrap: wrap;

			> section {
				flex: 1;
			}
		}

		.attribute {
			display: flex;
			flex-direction: column;

			&.role {
				border-top: 1px solid var(--color-border-1);

				> p {
					&:not(:first-child) {
						background-color: var(--color-bg-primary-faded);
						color: var(--color-text-2);
						font-weight: 600;
						font-size: 0.8rem;
						width: fit-content;
						padding: 0.4rem 1rem;

						border: 1px solid transparent;
					}
				}
			}
			> p {
				padding: 0.5rem 0.4rem;
				font-size: 0.9rem;

				&:first-child {
					color: var(--color-text-2);
					font-weight: 400;
					font-size: 0.8rem;
				}
				&:last-child {
					border: 1px solid var(--color-border-2);
					color: var(--color-text-1);
					border-radius: var(--border-radius-medium);
				}

				&.info {
					color: var(--color-bg-primary);
					font-style: italic;
					font-weight: bold;
				}

				&.stamp {
					color: var(--color-text-2);
					background-color: inherit;
					border-color: transparent;
					font-weight: bold;
				}
			}

			input,
			select {
				padding: 0.5rem 0.4rem;
				border: 2px solid var(--color-border-2);
				color: var(--color-text-2);
				background-color: var(--color-bg-3);
				border-radius: var(--border-radius-medium);
				width: 100%;

				&:focus {
					border-color: var(--color-text-primary);
				}
			}
		}
	}
</style>
