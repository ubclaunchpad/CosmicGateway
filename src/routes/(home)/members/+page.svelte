<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { SearchIcon, SortIcon, FilterIcon } from '$lib/components/general/icons';
	import Loader from '$lib/components/blocks/Loader.svelte';
	import { userFieldMapper, type IUser, userFieldLabelMapper } from '$lib/types/User';
	import DataTable from '$lib/components/members/DataTable.svelte';
	import type { Column } from '$lib/types/Column';
	import { sidePanel } from '../../../stores/sidepanel';
	import MemberSideView from '$lib/components/members/MemberSideView.svelte';
	import { userStore } from '../../../stores/auth';
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import { cachedSWR } from '$lib/util/fetcher';
	let adminView = false;
	let users: IUser[] = [];
	let columns: Column[] = [];

	const { data, error } = cachedSWR.useSWR(PUBLIC_USERS_API_URI + '/users');

	$: if ($data) {
		users = $data.data
			.map((user: IUser) => {
				return { full_name: user.first_name + ' ' + user.last_name, ...user };
			})
			.slice(0, 10);
	}

	columns = [
		{
			field: 'pref_name',
			header: userFieldLabelMapper('preferred name' as keyof IUser)
		},
		{
			field: 'first_name',
			header: userFieldLabelMapper('first name' as keyof IUser)
		},
		{
			field: 'last_name',
			header: userFieldLabelMapper('last name' as keyof IUser)
		},
		{
			field: 'email',
			header: userFieldLabelMapper('email' as keyof IUser)
		}
	];
	const getUserField = (key: string, value: string) => {
		return userFieldMapper(key as keyof IUser, value);
	};

	const handleRowClicked = (e: CustomEvent) => {
		const userID = e.detail.data.id;
		if ($userStore && 'id' in $userStore) {
			adminView = adminView || $userStore?.id === userID;
		}

		sidePanel.set({
			component: MemberSideView,
			props: { adminView, userID, title: 'profile' },
			open: true
		});
	};
</script>

<MainPage>
	<div slot="main" class="flex flex-col">
		<div class="flex gap-4 items-center justify-between p-2">
			<h1 class="text-2xl font-bold">Members</h1>
		</div>

		<div class="relative py-4">
			<SearchIcon
				color="#401A051D"
				customClasses="w-4 absolute top-1/2 transform -translate-y-1/2 left-3"
			/>
			<input
				type="text"
				placeholder="Search members"
				class="w-full pl-10 py-2 px-4 text-sm rounded focus:outline-none focus:border-blue-500 dark:bg-neutral-900"
			/>
		</div>

		<div class="flex justify-between text-sm mb-2 px-3">
			<div>
				{users.length} recommended results
			</div>
			<div class="flex gap-4">
				<div class="flex hover:cursor-pointer items-center">
					<SortIcon customClasses="w-6"></SortIcon>
					Sort
				</div>
				<div class="flex hover:cursor-pointer items-center gap-1">
					<FilterIcon customClasses="w-3"></FilterIcon>
					Filter
				</div>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-start gap-5 w-full overflow-y-auto overflow-x-visible"
		>
			{#if !users || users.length === 0}
				<Loader height={'100%'} width={'100%'} />
			{:else}
				<DataTable data={users} {columns} let:prop={data} on:rowClicked={handleRowClicked}>
					<div>
						{getUserField(data.column.field, data.row[data.column.field])}
					</div>
				</DataTable>
			{/if}
		</div>
	</div>
</MainPage>
