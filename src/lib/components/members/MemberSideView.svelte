<script lang="ts">
	import type { IUser } from '$lib/types/User';
	import { userFieldMapper } from '$lib/types/User';
	export let user: IUser;
</script>

<div>
	<div class="border-b py-1">
		<h2 class="text-lg">Profile</h2>
	</div>
	<div class="flex w-full my-4 items-center justify-center">
		<div class="w-40 h-40 bg-gray-200 rounded-md">placeholder</div>
	</div>

	<h1 class="text-2xl font-bold mb-6">{user.full_name}</h1>

	<div class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<h3 class="text-lg font-semibold">Member Information</h3>
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
			<h3 class="text-lg font-semibold">Contact Information</h3>
			<div>
				<span class="font-semibold">Email:</span>
				{user.email}
			</div>
		</div>

		<div class="w-full border-b"></div>

		<div class="flex flex-col gap-2">
			<h3 class="text-lg font-semibold">Student Status</h3>
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

		<div class="flex flex-col gap-2">
			<h3 class="text-lg font-semibold">Health Information</h3>
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
			<h3 class="text-lg font-semibold underline">Resume Link</h3>
		</a>
	</div>
</div>
