<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { STRATEGY_EMAIL } from '$lib/util/links';
	import { userStore, signout, token } from '../../../stores/auth';
	import { getUserInfo, type IUser } from '$lib/types/User';
	import { onMount } from 'svelte';
	import { fetcher } from '$lib/util/fetcher';
	import Button from '$lib/components/general/Button.svelte';
	import Card from '$lib/components/general/Card.svelte';
	import { updateTheme, theme } from '../../../stores/theme';

	// let updateProfile: () => Promise<void>;
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

	async function toggleTheme() {
		if ($theme === 'dark') {
			updateTheme('light');
		} else {
			updateTheme('dark');
		}
	}
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Settings</h1>
			<Button on:click={signout} class="w-1/2">Sign out</Button>
		</div>

		<div class="flex flex-col gap-4 items-center justify-between p-2">
			<Card>
				<div class="flex flex-col gap-6 flex-1" slot="content">
					<p>Settings page is under construction</p>
				</div>
			</Card>
		</div>
	</div>
</MainPage>
