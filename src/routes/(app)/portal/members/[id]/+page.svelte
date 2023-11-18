<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import type { IUser } from '$lib/types/User.js';
	export let data;

	const obj: IUser = {
		id: 881709496070406145,
		first_name: 'Lebron',
		last_name: 'James',
		pref_name: 'Lebron',
		email: 'lbj@ubclaunchpad.com',
		created_at: '2023-07-12T07:30:05.398Z',
		updated_at: '2023-09-29T21:03:16.349Z',
		resume_link: 'www.none-needed.com',
		faculty: {
			id: 881038255263285249,
			label: 'Science'
		},
		standing: {
			id: 881038255380070401,
			label: '4th year'
		},
		specialization: {
			id: 881038255685632001,
			label: 'CPSC'
		},
		roles: [],
		username: 'lbj',
		member_since: 'Sept 1, 2003'
	};
</script>

<MainPage>
	<div slot="main" class="content">
		<h3>breadcrumb</h3>
		<h1>{data.id}</h1>
		<div class="information-wrapper">box</div>
	</div>
</MainPage>

<style lang="scss">
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0;
		background-color: #fcfcfc;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;
	}
</style>
