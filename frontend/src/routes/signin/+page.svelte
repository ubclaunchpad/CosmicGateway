<script lang="ts">
	import { PUBLIC_API_URI } from '$env/static/public';
	import jwt_decode from 'jwt-decode';
	import Toggle from '$lib/components/general/Toggle.svelte';
	import { onMount } from 'svelte';
	import type { GoogleAuthUser } from '$lib/types/googleAuth.js';
	import { FACULTIES, PROGRAMS, STANDINGS } from '../../seed/util.js';
	import { goto } from '$app/navigation';
	import SidePanel from '$lib/components/layouts/RightPanel.svelte';
	import { token, userStore } from '../../stores/auth.js';
	let googleAuthUser: GoogleAuthUser | undefined;

	function verifyGoogleLogin(request) {
		googleAuthUser = jwt_decode(request.credential) as GoogleAuthUser;
		token.update(() => request.credential);
		fetchUser();
	}

	const fetchUser = async () => {
		try {
			const response = await fetch(`${PUBLIC_API_URI}/users/me`, {
				method: 'GET',
				headers: {
					Authorization: 'Bearer ' + $token
				}
			});
			const user = await response.json();
			// console.log(user);
			userStore.set(user);
			goto('/portal');
		} catch (error) {
			console.log(error);
		}
	};

	let firstName: string;
	let lastName: string;
	let prefName: string;
	let email: string;
	let standingId: number;
	let facultyId: number;
	let programId: number;
	let standings = STANDINGS;
	let programs = PROGRAMS;
	let faculties = FACULTIES;

	onMount(async () => {
		google.accounts.id.initialize({
			client_id: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com',
			ux_mode: 'popup',
			callback: verifyGoogleLogin
		});

		google.accounts.id.renderButton(document.getElementById('signinDiv'), {
			width: '300',
			theme: 'outline',
			size: 'large',
			type: 'standard',
			text: 'continue_with',
			shape: 'rectangular',
			logo_alignment: 'left'
		});
	});
</script>

<div>
	<h2>Sign In</h2>
	<div>
		<div class="center">
			<div class="center-div">
				<Toggle />
			</div>
		</div>
	</div>

	<div class="auth-wrapper">
		<label for="email">
			<div class="social-auth" id={'signinDiv'} />
			<!-- <input disabled value={email} required type="text" placeholder="email" /> -->
		</label>
	</div>
	<SidePanel>
		<div slot="article" class="sign-in">
			<!-- <button type="submit" on:click={register}>Register</button> -->
		</div>
	</SidePanel>
</div>

<style lang="scss">
	.auth-wrapper {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 1rem;
	}
	.social-auth {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		height: fit-content;
		width: 100%;
		.center-div {
			z-index: 4;
			justify-content: center;
			align-items: center;
		}
		.line {
			width: 100%;
			height: 2px;
			z-index: 1;
			background-color: var(--color-bg-primary);
			position: absolute;
			padding: 0;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
	}
	.sign-in {
		// position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: start;
		width: 100%;
		height: 100%;
		max-width: 850px;
		max-height: 100%;
		min-height: 300px;
		border-radius: 4px;
		overflow: scroll;

		div {
			width: 100%;
		}

		form {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			width: 100%;
			padding: 1rem;

			section {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
				row-gap: 1rem;
				column-gap: 1rem;

				label {
					width: fit-content;
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
				}
			}

			button {
				font-size: 1rem;
				width: 100%;
				max-width: fit-content;
				text-align: center;
				align-items: center;
				// background-color: inherit;
				// color: inherit;
				box-shadow: none;
				border-radius: 3px;

				transition: 200ms ease-in-out;

				&:hover {
					background-color: var(--color-bg-primary);
					color: var(--color-text-0-light);
				}
			}
		}
	}

	h1 {
		padding-bottom: 2rem;
	}

	p {
		font-size: 0.8rem;
	}
	.bottombar {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1rem 0rem;
		row-gap: 1rem;
		font-size: 0.8rem;
	}

	h2 {
		font-size: 1.2rem;
		padding-bottom: 2rem;
	}

	h4 {
		font-size: 1.2rem;
		padding: 1rem 0 0.3rem;
		border-top: 1px solid var(--color-bg-1);
		color: var(--color-text-1);
		font-weight: 400;
	}

	button {
		font-size: 0.8rem;
		border-radius: 4px;
		padding: 0.5rem 1rem;
		background-color: var(--color-bg-primary);
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
		color: var(--color-text-0-light);

		display: flex;
		flex-direction: column;
		h4 {
			font-size: 1.1rem;
			padding: 0 0rem 1rem;
		}
	}

	section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;

		background: linear-gradient(
			90deg,
			var(--color-bg-primary-faded) 0%,
			var(--color-bg-primary-faded) 100%
		);
		height: 100%;

		.hero {
			width: 100%;
			background: linear-gradient(
				to top left,
				var(--color-bg-primary) 0%,
				var(--color-bg-primary-faded) 100%
			);
			height: 100%;
			border-radius: 0 20px 20px 0;
			box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
		}

		h1 {
			font-size: 1.4rem;
		}
		height: 100%;
		flex: 1;
		overflow: hidden;
	}
</style>
