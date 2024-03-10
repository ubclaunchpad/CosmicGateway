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


</script>

<MainPage>
	<div slot="main" class="teamsList">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Groups</h1>
			
		</div>

		<div class="flex flex-col gap-4 items-center justify-between p-2">
			<Card>
				<div class="flex flex-col gap-6 flex-1" slot="content">
					<p>This page will be used to have a shared space for groups to collaborate and share information.</p>
				</div>
			</Card>

			
		</div>
	</div>
</MainPage>
