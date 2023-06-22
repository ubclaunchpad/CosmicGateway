<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { fetchUser, userStore } from '../../stores/auth';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	import { notificationStore } from '../../stores/notification';

	async function verifyGoogleLogin(request) {
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

		google.accounts.id.initialize({
			client_id: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com',
			ux_mode: 'popup',
			callback: verifyGoogleLogin
		});

		google.accounts.id.renderButton(document.getElementById('signinDiv'), {
			width: '200',
			theme: 'filled_black',
			size: 'large',
			type: 'standard',
			text: 'continue_with',
			shape: 'rectangular',
			logo_alignment: 'left'
		});

		const googlebutton = document.getElementById('google');
		if (googlebutton) {
			googlebutton.addEventListener('click', () => {
				const googleAuthBtn = document.getElementById('signinDiv');
				const googleLoginWrapperButton = googleAuthBtn.querySelector('div[role=button]').click();
				googleLoginWrapperButton?.click();
			});
		}
	});
</script>

<PageForm>
	<SectionForm>
		<div slot="header">
			<h2>Sign In</h2>
		</div>

		<div class="auth-wrapper">
			<div class="social-auth">
				<Info>
					<p>Currently only allow Google sign in. We will add more ways to sign in soon.</p>
				</Info>
				<button class="google" id="google">
					<!-- <img src={GoogleIcon} alt="Google" /> -->
					Continue with Google
					<div id={'signinDiv'} />
				</button>
				<button disabled>
					<!-- <img src={GithubIcon} alt="github" /> -->
					Continue with Github
				</button>
				<button disabled>
					<!-- <img src={DiscordIcon} alt="Discord" /> -->
					Continue with Discord</button
				>
				<Info
					><p>
						Having issues signing in? <span>
							<a href="mailto:strategy@ubclaunchpad.com">email us</a>
						</span>
					</p></Info
				>
			</div>
		</div>
		<Info>
			<p>
				Don't have an account? <a href="/signup">Sign up</a>
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
			button {
				#signinDiv {
					display: none;
				}
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
				&:hover {
					background: var(--color-bg-primary);
				}
			}
		}
	}
</style>
