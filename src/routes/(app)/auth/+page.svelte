<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';
	import { fetchUser, userStore } from '../../../stores/auth';
	import { goto } from '$app/navigation';
	import { notificationStore } from '../../../stores/notification';
	import MakerLaunchIcon from '$lib/components/general/icons/MakerLaunchIcon.svelte';

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

	onMount(() => {
		if ($userStore !== undefined) {
			goto('/portal');
		}

		if (google) {
			google.accounts.id.initialize({
				client_id: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com',
				ux_mode: 'popup',
				callback: verifyGoogleLogin,
				cancel_on_tap_outside: false,
				itp_support: true,
				context: 'signin'
			});

			const googleAuthBtn = document.getElementById('signinDiv') as HTMLDivElement;
			if (googleAuthBtn) {
				google.accounts.id.renderButton(googleAuthBtn, {
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

<div class="h-screen flex flex-col bg-bg-100">
	<header class="flex items-center p-2">
		<img src={logo} alt="Logo" class="h-8 w-8 mr-2" />
		<span class="font-semibold text-xl tracking-tight">Launch Pad Hub</span>
	</header>
	<div class="flex flex-1">
		<div class="flex-1 flex justify-center items-center">
			<div class="flex flex-col gap-6 w-full max-w-md p-4">
				<h1 class="font-bold text-3xl">Sign in</h1>

				<div class="flex items-center flex-grow">
					<button
						class="flex w-46 text-gray-800 text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out"
						id="googleBtn"
						type="button"
					>
						<div id={'signinDiv'} />
					</button>
				</div>

				<div>
					Don't have an account yet?
					<a href="/auth/signup">
						<strong><u>Sign up</u></strong>
					</a>
				</div>
			</div>
		</div>
		<div class="sm:flex w-full h-full flex-1 justify-center items-center pr-32 hidden">
			<MakerLaunchIcon />
		</div>
	</div>
</div>
