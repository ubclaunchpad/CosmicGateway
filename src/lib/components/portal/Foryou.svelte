<script lang="ts">
	import Info from '$lib/components/blocks/Info.svelte';
	import { userStore } from '../../../stores/auth';
	import { getUserInfo, type IUser } from '$lib/types/User';
	import { onMount } from 'svelte';
	let user: IUser;
	let name: string;

	onMount(() => {
		if ($userStore && 'id' in $userStore) {
			getUserInfo($userStore.id).then((res) => {
				user = res;
				name = user.pref_name || user.first_name;
			});
		}
	});
</script>

<div class="for-you">
	<h1 class="header-text">&#x1F44B; Welcome back {name}</h1>
	<Info>
		<div class="placeholder">
			Slack Integration
		</div>
	</Info>

	<div class="row">
		<Info>
			<div class="placeholder">
				TODO
			</div>
		</Info>
		<Info>
			<div class="placeholder">
				Calendar
			</div>
		</Info>
	</div>
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		gap: 5rem;
		text-align: center;

		p,
		a {
			font-size: 0.9rem;
		}
		a {
			color: var(--color-text-primary);
			text-decoration: underline;
		}
	}

	.placeholder {
			height: 8rem;
	}
	.for-you {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 1rem 2rem;
		width: 100%;
		flex: 1;
		row-gap: 1.5rem;

		.header-text {
			font-size: 3rem;
			padding: 0;
		}
	}
</style>
