<script lang="ts">
	import type { IDict, IUser } from '$lib/types/User';
	import { userFieldMapper } from '$lib/types/User';
	import { modalPanel } from '../../../stores/modal';
	import EditMemberInfoModal from './EditMemberModal.svelte';
	import EditMemberStatusModal from './EditMemberStatusModal.svelte';
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import { token } from '../../../stores/auth';

	export let userID: number;
	export let adminView: boolean;

	let user: IUser = {
		id: 0,
		first_name: '',
		last_name: '',
		pref_name: '',
		member_since: '',
		roles: [],
		teams: [],
		email: '',
		faculty: {} as IDict<string>,
		specialization: {} as IDict<string>,
		standing: {} as IDict<string>,
		created_at: '',
		updated_at: '',
		username: '',
	};
	let loading: boolean = false;

	$: if (userID) {
		fetchUserData(userID);
	}

	async function fetchUserData(userID: number) {
		loading = true;
		const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${userID}`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + $token
			}
		});
		user = await response.json();
		loading = false;
	}

	const onEditInfo = (e: Event) => {
		modalPanel.set({
			component: EditMemberInfoModal,
			props: { user: user, title: 'profile' },
			open: true
		});
	};

	const onEditStatus = (e: Event) => {
		modalPanel.set({
			component: EditMemberStatusModal,
			props: { user: user, title: 'profile' },
			open: true
		});
	};
</script>

<div>
	{#if loading}
		<div class="flex w-full py-4 pb-6 items-center justify-center">
			<div class="skeleton w-48 h-48"></div>
		</div>

		<div class="flex justify-between mb-6">
			<div class="skeleton h-6 w-2/3"></div>
		</div>

		<div class="w-full border-t border-t-neutral-200 dark:border-t-neutral-800 pb-2"></div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-2">
				<div class="skeleton h-5 w-2/3 mb-2"></div>
				<div class="skeleton h-4 w-2/3"></div>
				<div class="skeleton h-4 w-2/3"></div>
				<div class="skeleton h-4 w-2/3"></div>
			</div>

			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<div class="skeleton h-5 w-2/3 mb-2"></div>
				</div>
				<div>
					<div class="skeleton h-4 w-2/3"></div>
				</div>
			</div>

			<div class="w-full border-b border-b-neutral-200 dark:border-b-neutral-800"></div>

			<div class="flex flex-col gap-2">
				<div class="skeleton h-5 w-2/3 mb-2"></div>
				<div class="skeleton h-4 w-2/3"></div>
				<div class="skeleton h-4 w-2/3"></div>
				<div class="skeleton h-4 w-2/3"></div>
			</div>

			<div class="flex flex-col gap-2">
				<div class="skeleton h-5 w-2/3 mb-2"></div>
				<div class="skeleton h-4 w-2/3"></div>
				<div class="skeleton h-4 w-2/3"></div>
			</div>
		</div>
	{:else}
		<div class="flex w-full py-4 pb-6 items-center justify-center">
			<div class="w-48 h-48 bg-neutral-100 rounded dark:bg-neutral-800"></div>
		</div>

		<div class="flex justify-between pb-2">
			<h1 class="text-lg font-medium">{user.first_name}</h1>
			{#if adminView}
				<button class="text-blue-600 underline" on:click={onEditInfo}>Edit</button>
			{/if}
		</div>

		<div class="w-full border-t border-t-neutral-200 dark:border-t-neutral-800 pb-2"></div>

		<div class="flex flex-col gap-4 pt-2">
			<div class="flex flex-col gap-2">
				<h3 class="text-md font-semibold">Member Information</h3>
				<div class="text-sm">
					<span class="font-semibold">Member Since:</span>
					{user.member_since}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Club Role:</span>
					{userFieldMapper('roles', user.roles)}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Team:</span>
					{userFieldMapper('teams', user.teams)}
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<h3 class="text-md font-semibold">Contact Information</h3>
					<!-- {#if adminView}
					<button class="text-blue-600 underline" on:click={onEdit}>Edit</button>
				{/if} -->
				</div>
				<div class="text-sm">
					<span class="font-semibold">Email:</span>
					{user.email}
				</div>
			</div>

			<div class="w-full border-b border-b-neutral-200 dark:border-b-neutral-800"></div>

			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<h3 class="text-md font-semibold">Student Status</h3>
					{#if adminView}
						<button class="text-blue-600 underline" on:click={onEditStatus}>Edit</button>
					{/if}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Faculty:</span>
					{userFieldMapper('faculty', user.faculty)}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Major & Standing:</span>
					{`${userFieldMapper('specialization', user.specialization)} - ${userFieldMapper('standing', user.standing)}`}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Student Number:</span>
					123456789
				</div>
			</div>

			<div class="w-full border-b border-b-neutral-200 dark:border-b-neutral-800"></div>

			<div class="flex flex-col gap-2">
				<div class="flex justify-between">
					<h3 class="text-md font-semibold">Health Information</h3>
					{#if adminView}
						<button class="text-blue-600 underline" on:click={onEditInfo}>Edit</button>
					{/if}
				</div>
				<div class="text-sm">
					<span class="font-semibold">Dietary:</span>
					N/A
				</div>
				<div class="text-sm">
					<span class="font-semibold">Emergency Contact:</span>
					N/A
				</div>
			</div>

			<a href="#">
				<h3 class="text-primary-500 text-sm font-semibold underline">Resume Link</h3>
			</a>
		</div>
	{/if}
</div>
