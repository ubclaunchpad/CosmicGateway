<script lang="ts">
	import { onMount } from 'svelte';
	import ProfilePanel from './profilePanel.svelte';
	import { userStore } from '../../stores/auth';
	import Foryou from '$lib/components/portal/Foryou.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	let user = $userStore;
	let greeting: string;

	onMount(() => {
		var today = new Date();
		var curHr = today.getHours();
		if (curHr < 12) {
			greeting = 'Good morning';
		} else if (curHr < 18) {
			greeting = 'Good afternoon';
		} else {
			greeting = 'Good evening';
		}
	});
</script>

<MainPage>
	<div slot="main" class="content">
		<h1>{greeting}, {user.firstName}</h1>
		<Foryou />
	</div>
	<ProfilePanel slot="side" />
</MainPage>

<style lang="scss">
	h1 {
		padding-bottom: 2rem;
	}
	div {
		display: flex;
		flex-direction: column;
	}
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		border-radius: 10px;
		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		overflow: scroll;
	}
</style>
