<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { fetchUser, userStore } from '../../../../stores/auth';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	import { notificationStore } from '../../../../stores/notification';
	import Banner from "$lib/components/blocks/Banner.svelte";

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
					theme: 'outline', type: "standard",
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
			<h2>Sign In</h2>
		</div>



		<div class="auth-wrapper">
			<Banner
					title="Portal is in testing phase"
					description="Login is limited to only certain users. If you are testing the portal message one of the admins to get access."
					links={[]}

			/>
			<div class="social-auth">

				<Info>
					<p>Currently only allow Google sign in. We will add more ways to sign in soon.</p>
				</Info>

				<div class="rich-input">
					<button class="google" id="googleBtn" type="button">

						<div id={'signinDiv'}></div>
					</button>
				</div>
			</div>
		</div>
		<Info
			><p>
				Having issues signing in? <span>
					<a href="mailto:strategy@ubclaunchpad.com">email us</a>
				</span>
			</p></Info
		>
		<Info>
			<p>
				Don't have an account? <a href="/auth/signup">Sign up</a>
			</p>
		</Info>
	</SectionForm>
</PageForm>

<style lang="scss">
	.auth-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		height: 100%;
		padding: 1rem;
		.social-auth {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-direction: column;
			row-gap: 1rem;
			width: 100%;
			height: 100%;
			padding: 1rem;

			.rich-input {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
				width: 100%;
				border-bottom: 1px solid var(--color-border-1);
				button {
					display: flex;

					width: 100%;

					justify-content: center;
					align-items: center;
					flex-direction: row;
					padding: 0.5rem;

					color: var(--color-text-1);

					font-size: 0.8rem;
					font-weight: 500;
					cursor: pointer;
					transition: all 0.2s ease-in-out;

					&:disabled {
						cursor: not-allowed;
						opacity: 0.5;
					}
				}

				button {
					background: none;
				}
				#googleBtn {
					padding: 1rem;
					overflow: hidden;
					border: 1px solid transparent;
				}
			}
			button {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
				gap: 1rem;
				width: 100%;
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				background: var(--color-bg-3);
				color: var(--color-text-1);
				border: 2px solid var(--color-bg-primary);
				font-size: 1rem;
				font-weight: 500;
				cursor: pointer;
				transition: all 0.2s ease-in-out;
				&:disabled {
					cursor: not-allowed;
					opacity: 0.5;
				}
			}
		}
	}
</style>
