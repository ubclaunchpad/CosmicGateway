<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import { goto } from '$app/navigation';
	import { notificationStore } from '../../../stores/notification';
	import { fetchUser, userStore } from '../../../stores/auth';

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

<button class="google" id="googleBtn" type="button">
	<div id={'signinDiv'} />
</button>

<style lang="scss">
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		gap: 1rem;
		width: 100%;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background: transparent;
		color: var(--color-text-1);
		font-size: 1rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
</style>
