<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import type { IUser } from '$lib/types/User';
	import { getDate, getFaculties, getSpecializations, getStandings } from '$lib/util/user';
	import { onMount } from 'svelte';
	import { notificationStore } from '../../../../stores/notification';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	export let id: number;
	let user: IUser;
	let referenceCopy: IUser;
	let copy: IUser;
	export let editView: boolean = false;
	
	$: if (editView) {
		fetchFormDetails();
	}

	let listOfFaculties: { id: number; name: string }[] = [];
	let listOfSpecializations: { id: number; name: string }[] = [];
	let listOfStandings: { id: number; name: string }[] = [];

	const fetchFormDetails = async () => {
		listOfFaculties = await getFaculties();
		listOfSpecializations = await getSpecializations();
		listOfStandings = await getStandings();
	};



	onMount(async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

	 referenceCopy = await response.json();
		user = getUserFields(referenceCopy);
		copy = getUserFields(referenceCopy);
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
				return value.name;
			case 'roles':
				return JSON.parse(value).map((role) => role.name);
			default:
				return value;
		}
	};

	const fieldVisibility = (key) => {
		switch (key) {
			case 'firstName':
			case 'lastName':
			case 'PrefName':
			case 'username':
			case 'standing':
			case 'faculty':
			case 'roles':
			case 'specialization':
				return true;
			default:
				return false;
		}
	};

	const getUserFields = (userInfo: IUser) => {
		return {
			firstName: userInfo.firstName,
			lastName: userInfo.firstName,
			prefName: userInfo.prefName,
			email: userInfo.email,
			username: userInfo.username,
			resumeLink: userInfo.resumeLink,
			facultyId: userInfo.faculty.id,
			standingId: userInfo.standing.id,
			specializationId: userInfo.specialization.id,
		}
	}

		
	let changedFields = {}
	$: if (user && copy) {
		changedFields =  getChangedFields(user, copy);
	}


	function getChangedFields(changed, copy) {
		const changedFields = {};
		for (const key in changed) {
			if (changed[key] !== copy[key]) {
				changedFields[key] = changed[key];
			} 
		}
		return changedFields;
	}

	

	export const updateProfile = async () => {
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${referenceCopy.id}`, {
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
					message: `${JSON.stringify(error)}. if error persists, please contact us at ${STRATEGY_EMAIL}`,
					type: 'warning'
				};
			});
		}
	};


</script>

{#if user}
	<div class="profile-content">
		<section class="profile">

			<h3>Personal Info</h3>
			<section class="grid-row">
				<section class="attribute">
					<p>Preferred Name</p>
					{#if !editView}
						<p>{referenceCopy.prefName}</p>
					{:else}
						<input bind:value={user.prefName}   />
					{/if}
				</section>
				<section class="attribute">
					<p>Member Since</p>
					{#if referenceCopy.memberSince}
						<p class="info">{getDate(referenceCopy.memberSince)}</p>
					{:else}
						<p class="info">Hopefully soon</p>
					{/if}
				</section>

				{#if referenceCopy.memberSince}
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
						<p>{referenceCopy.firstName}</p>
					{:else}
						<input bind:value={user.firstName}  />
					{/if}
				</section>

				<section class="attribute">
					<p>Last name</p>
					{#if !editView}
						<p>{referenceCopy.lastName}</p>
					{:else}
						<input bind:value={user.lastName}   />
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
					<p>{referenceCopy.username}</p>
				{:else}
					<input bind:value={user.username}   />
				{/if}
			</section>

			<h3>Background</h3>

			<section class="grid-row">
				<section class="attribute">
					<p>Faculty</p>
					{#if !editView}
						<p>{referenceCopy.faculty.name}</p>
					{:else}
						<select  value={user.facultyId}  >
							{#each listOfFaculties as field}
								<option selected={user.facultyId === field.id} value={field.id}
									>{field.name}</option
								>
							{/each}
						</select>
					{/if}
				</section>

				<section class="attribute">
					<p>Specialization</p>
					{#if !editView}
						<p>{referenceCopy.specialization.name}</p>
					{:else}
						<select bind:value={user.specializationId}  >
							{#each listOfSpecializations as field}
								<option selected={user.specializationId === field.id} value={field.id}
									>{field.name}</option
								>
							{/each}
						</select>
					{/if}
				</section>
			</section>

			<section class="attribute">
				<p>Standing</p>
				{#if !editView}
					<p>{referenceCopy.standing.name}</p>
				{:else}
				{user.standingId}
					<select bind:value={user.standingId} >
						{#each listOfStandings as field}
							<option selected={user.standingId === field.id} value={field.id}>{field.name}</option
							>
						{/each}
					</select>
				{/if}
			</section>

			<section class="attribute">
				<p>Resume</p>
				<!-- <p>{referenceCopy.resumeLink}</p> -->
			</section>

			<h3 />

			<section class="grid-row">
				<section class="attribute">
					<p>Created At</p>
					<p class="stamp">{getDate(referenceCopy.createdAt)}</p>
				</section>

				<section class="attribute">
					<p>Updated At</p>
					<p class="stamp">{getDate(referenceCopy.updatedAt)}</p>
				</section>
			</section>
		</section>
	</div>
{:else}
	<Loader width={'100%'} height={'100%'} />
{/if}

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
