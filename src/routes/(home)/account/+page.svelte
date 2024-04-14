<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { userStore, signout, token } from '../../../stores/auth';
	import { getUserInfo, type IUser } from '$lib/types/User';
	import { onMount } from 'svelte';
	import Button from '$lib/components/general/Button.svelte';
	import Card from '$lib/components/general/Card.svelte';
	import { updateTheme, theme } from '../../../stores/theme';
	import { sidePanel } from '../../../stores/sidepanel';
	import MemberSideView from '$lib/components/members/MemberSideView.svelte';

	// let updateProfile: () => Promise<void>;
	sidePanel.set({
		component: null,
		props: {},
		open: true
	});
	let user: IUser;
	let authTokens: string;
	onMount(() => {
		console.log($userStore);
		if ($token) {
			authTokens = $token;
		} else {
			signout();
		}
		if ($userStore && 'id' in $userStore) {
			getUserInfo($userStore.id).then((res) => {
				user = res;
				sidePanel.set({
					component: MemberSideView,
					props: { userID: res.id },
					open: true
				});
			});
		} else {
			signout();
		}
	});

	async function deleteRequest(): Promise<void> {
		// await fetcher({
		// 	URI: `${PUBLIC_USERS_API_URI}/users/${user.id}`,
		// 	requestInit: {
		// 		method: 'DELETE',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: 'Bearer ' + $token
		// 		}
		// 	},
		// 	onSuccess() {
		// 		signout();
		// 	},
		// 	notifySuccess: {
		// 		title: 'Account deleted',
		// 		message: 'User account has been deleted.',
		// 		type: 'info'
		// 	},
		// 	notifyError: {
		// 		title: 'Account deleted',
		// 		message: `Account could not be deleted. if error persists, please contact us at ${STRATEGY_EMAIL}`,
		// 		type: 'error'
		// 	}
		// });

		const res = await fetch(`${PUBLIC_USERS_API_URI}/users/${user.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + authTokens
			}
		});

		if (res.ok) {
			signout();
		} else {
			console.error(
				'Account could not be deleted. if error persists, please contact us at ${STRATEGY_EMAIL}'
			);
		}
	}
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Account</h1>
			<div class="flex gap-4">
				<Button on:click={signout} class="w-fit">Sign out</Button>
				<Button on:click={signout} class="w-fit" variant="danger" on:click={deleteRequest}
					>Delete Account</Button
				>
			</div>
		</div>

		<div class="flex flex-col gap-4 items-center justify-between p-2"></div>
	</div>
</MainPage>
