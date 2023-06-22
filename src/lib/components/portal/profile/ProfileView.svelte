<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import type {
		IFaculty,
		IRole,
		ISpecialization,
		IStanding,
		IUser,
		IUserPatchRequest
	} from '$lib/types/User';
	import { getDate } from '$lib/util/user';
	import { notificationStore } from '../../../../stores/notification';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	export let id: number;
	export let user: IUser;
	export let editView: boolean = false;
	let referenceUser: IUser;
	let listOfFaculties: IFaculty = [];
	let listOfSpecializations: ISpecialization = [];
	let listOfStandings: IStanding = [];
	let listOfRoles: IRole = [];
	let changedFields = {};
	$: if (user && referenceUser) {
		changedFields = getChangedFields(user, referenceUser);
	}
	$: if (editView) {
		fetchFormDetails();
	}

	function getChangedFields(originalRef: IUser, modifiedRef: IUser) {
		const changedFields: Partial<Record<keyof IUserPatchRequest, string | undefined>> = {};
		for (const key in originalRef) {
			const fieldKey = key as keyof IUser;
			if (originalRef[fieldKey] !== modifiedRef[fieldKey]) {
				const partialkey = key as keyof IUserPatchRequest;

				if (typeof modifiedRef[fieldKey] === typeof changedFields[partialkey]) {
					changedFields[partialkey] = modifiedRef[fieldKey] as string | undefined;
				}
			}
		}
		return changedFields;
	}

	async function getUserInfo() {
		if (!user) {
			const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			referenceUser = await response.json();
			user = Object.assign({}, referenceUser);
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

	// const getUserFields = (userInfo: IUser) => {
	// 	return {
	// 		firstName: userInfo.firstName,
	// 		lastName: userInfo.firstName,
	// 		prefName: userInfo.prefName,
	// 		email: userInfo.email,
	// 		username: userInfo.username,
	// 		resumeLink: userInfo.resumeLink,
	// 		facultyId: userInfo.faculty.id,
	// 		standingId: userInfo.standing.id,
	// 		specializationId: userInfo.specialization.id
	// 	};
	// };

	export const updateProfile = async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${referenceUser.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(changedFields)
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
					message: `${JSON.stringify(
						error
					)}. if error persists, please contact us at ${STRATEGY_EMAIL}`,
					type: 'warning'
				};
			});
		}
	};
</script>

{#await getUserInfo()}
	<Loader width={'100%'} height={'100%'} />
{:then _}
	<div class="profile-content">
		<section class="profile">
			<h3>Personal Info</h3>
			<section class="grid-row">
				<section class="attribute">
					<p>Preferred Name</p>
					{#if !editView}
						<p>{referenceUser.prefName}</p>
					{:else}
						<input bind:value={user.prefName} />
					{/if}
				</section>
				<section class="attribute">
					<p>Member Since</p>
					{#if referenceUser.memberSince}
						<p class="info">{getDate(referenceUser.memberSince)}</p>
					{:else}
						<p class="info">Hopefully soon</p>
					{/if}
				</section>

				{#if referenceUser.memberSince}
					<section class="attribute">
						<p>Roles</p>
						<p>{user.prefName}</p>
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
				<p>{referenceUser.resumeLink}</p>
			</section>

			<br />

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
		</section>
	</div>
{/await}

<style lang="scss">
	.profile {
		display: grid;
		grid-template-columns: 1fr;
		padding: 0 1rem;
		gap: 0.5rem;
		border-radius: 1rem;
		overflow-y: scroll;
		width: 100%;
		height: 100%;

		h3 {
			padding: 1rem 0 1rem;
			border-bottom: 1px solid var(--color-border-1);
		}

		.grid-row {
			display: flex;
			justify-content: space-between;
			column-gap: 0.5rem;

			> section {
				flex: 1;
			}
		}

		.attribute {
			display: flex;
			flex-direction: column;

			gap: 0.2rem;
			> p {
				padding: 0.5rem 0.4rem;
				font-size: 0.9rem;

				&:first-child {
					color: var(--color-text-2);
					font-weight: 400;
					font-size: 0.8rem;
				}

				&:last-child {
					border: 1px solid var(--color-border-1);
					color: var(--color-text-2);
					background-color: var(--color-bg-1);
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
				border: 1px solid var(--color-border-1);
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
