<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { fetchUser, userStore } from '../../../../stores/auth';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	import { notificationStore } from '../../../../stores/notification';
	import Banner from '$lib/components/blocks/Banner.svelte';

	async function verifyGoogleLogin(request: { credential: string }): Promise<void> {
		try {
			await fetchUser(request.credential);
			goto('/portal');
		} catch (e) {
			notificationStore.set({
				title: 'Cannot sign in',
				message: (e as Error).message,
				type: 'error'
			});
			console.log(e);
		}
	}

	onMount(async () => {
		if ($userStore !== undefined) {
			goto('/portal');
		}
		if (google) {
			google.accounts.id.initialize({
				client_id: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com',
				ux_mode: 'popup',
				callback: verifyGoogleLogin
			});

			const googleAuthBtn = document.getElementById('signinDiv') as HTMLDivElement;
			console.log(googleAuthBtn);
			if (googleAuthBtn) {
				google.accounts.id.renderButton(googleAuthBtn, {
					width: 300,
					theme: 'outline',
					type: 'standard',
					text: 'continue_with',
					shape: 'square'
				});
				google.accounts.id.prompt();
			}
		}
	});
</script>
<PageForm>
	<SectionForm>
		<div slot="header">
			<h2 class="text-2xl font-bold">Sign in</h2>
		</div>

		<div class="flex flex-col gap-4 w-full h-full p-4">
			<Banner
				title="Portal is in development"
				description="Login is limited to only certain users. If you are testing the portal message one of the admins to get access."
				links={[]}
			/>
			<Info>
				<p>Currently only allow Google sign in. We will add more ways to sign in soon.</p>
			</Info>
			<div class="flex flex-col gap-4 w-full h-full ">
				

				<div class="flex items-center justify-center w-full border-b border-gray-300">
					<button class="flex items-center justify-center w-full p-2 text-gray-800 text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out" id="googleBtn" type="button">
						<div id={'signinDiv'} />
					</button>
				</div>
			</div>
		</div>
		<Info>
			<p>
				Having issues signing in? <span>
					<a href="mailto:strategy@ubclaunchpad.com">email us</a>
				</span>
			</p>
		</Info>
		<Info>
			<p>
				Don't have an account? <a href="/auth/signup">Sign up</a>
			</p>
		</Info>
	</SectionForm>
</PageForm>