<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { userStore } from '../../../stores/auth';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	onMount(async () => {
		if ($userStore !== undefined) {
			goto('/portal');
		}
	});
</script>

<PageForm>
	<SectionForm>
		<div slot="header" class="text-2xl font-bold">
			<h2>UBC Launch Pad Portal</h2>
		</div>
		<Info>
			<p>Currently only allow Google sign in. We will add more ways to sign in soon.</p>
		</Info>
		<div class="flex flex-col items-center justify-center space-y-8 w-full h-full p-4">
			<a href="./auth/signin" class="w-60 text-center py-2 bg-gray-100 rounded text-black font-semibold transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white">Sign in</a>
			<a href="./auth/signup" class="w-60 text-center py-2 bg-gray-100 rounded text-black font-semibold transition-all duration-200 ease-in-out hover:bg-blue-500 hover:text-white">Sign up</a>
		</div>
		<Info>
			<p>
				Having issues? <span>
					<a href="mailto:strategy@ubclaunchpad.com" class="hover:underline">email us</a>
				</span>
			</p>
		</Info>
	</SectionForm>
</PageForm>