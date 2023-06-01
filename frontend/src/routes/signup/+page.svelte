<script lang="ts">
	import { PUBLIC_API_URI } from '$env/static/public';
	import jwt_decode from 'jwt-decode';
	import { onMount } from 'svelte';
	import type { GoogleAuthUser } from '$lib/types/googleAuth.js';
	import { STANDINGS_V2, PROGRAMS_V2, FACULTIES_V2 } from '../../seed/util';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { DiscordIcon, GithubIcon, GoogleIcon } from '$lib/util/icons';
	import { goto } from '$app/navigation';
	let googleAuthUser: GoogleAuthUser | undefined;

	function verifyGoogleLogin(request) {
		console.log(request);
		googleAuthUser = jwt_decode(request.credential) as GoogleAuthUser;
		console.log('ss');
		firstName = googleAuthUser.given_name;
		lastName = googleAuthUser.family_name;
		prefName = googleAuthUser.given_name;
		email = googleAuthUser.email;
	}

	async function register() {
		const body = {
			email: email,
			firstName: firstName,
			prefName: prefName,
			lastName: lastName,
			facultyId: facultyId,
			standingId: standingId,
			resumeLink: resumeLink,
			programId: [programId]
		};

		const response = await fetch(`${PUBLIC_API_URI}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (response.ok) {
			const data = await response.json();
			goto('/portal');
		} else {
			console.log('error');
		}
	}

	let firstName: string;
	let lastName: string;
	let prefName: string;
	let email: string;
	let standingId: number;
	let facultyId: number;
	let programId: number;
	let resumeLink: string;

	onMount(async () => {
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

<main>
	<div class="page">
		<SectionForm>
			<div slot="header">
				<h2>Sign up</h2>
			</div>
			<Info>
				<p>
					Open to all current and former students/staff at <span class="bold"
						>the University of British Columbia.</span
					>
				</p>
			</Info>

			{#if googleAuthUser && googleAuthUser.email && googleAuthUser.email_verified}
				<form method="POST">
					<section>
						<label for="firstName"
							>First Name
							<input bind:value={firstName} required type="text" placeholder="name" />
						</label>

						<label for="lastName"
							>Last Name
							<input bind:value={lastName} required type="text" placeholder="last name" />
						</label>

						<label for="prefName"
							>Preferred Name
							<input bind:value={prefName} required type="text" placeholder="preferred name" />
						</label>

						<label for="email"
							>Email
							<input disabled value={email} required type="text" placeholder="email" />
						</label>
					</section>

					<section>
						<label
							>Faculty
							<select bind:value={facultyId} name="Faculty" id="Faculty">
								<option value="" disabled hidden selected>Your faculty</option>

								{#each Object.entries(FACULTIES_V2) as [facultyId, facultyName]}
									<option value={facultyId}>{facultyName}</option>
								{/each}
							</select>
						</label>

						<label
							>Specialization
							<select bind:value={programId} name="Specialization" id="Specialization">
								<option value="" disabled hidden selected>Your (intended) major</option>
								{#each Object.entries(PROGRAMS_V2) as [programId, programName]}
									<option value={programId}>{programName}</option>
								{/each}
							</select>
						</label>

						<label
							>Standing
							<select bind:value={standingId} name="Standing" id="Standing">
								<option value="" disabled hidden selected>Your current standing</option>
								{#each Object.entries(STANDINGS_V2) as [standingId, standingName]}
									<option value={standingId}>{standingName}</option>
								{/each}
							</select>
						</label>
						<label
							>Resume Link
							<input bind:value={resumeLink} placeholder="resume link" />
						</label>
					</section>
				</form>
				<div class="bottombar">
					<button type="submit" on:submit|preventDefault={register} on:click={register}
						>Register</button
					>
					<Info
						><p>You can update your profile later as your information changes.</p>
						<p>
							Having issues setting up? Contact <span>
								<a href="mailt:strategy@ubclaunchpad.com">strategy@ubclaunchpad.com</a>
							</span>
						</p></Info
					>
				</div>
			{:else}
				<div class="auth-wrapper">
					<div class="social-auth">
						<button class="google" id="google">
							<img src={GoogleIcon} alt="Google" />
							Continue with Google
							<div id={'signinDiv'} />
						</button>
						<button disabled>
							<img src={GithubIcon} alt="github" />
							Continue with Github
						</button>
						<button disabled>
							<img src={DiscordIcon} alt="Discord" />
							Continue with Discord</button
						>
					</div>
				</div>
			{/if}
			<Info
				><p>
					Already have an account? <a href="/signin">Sign in</a>
				</p></Info
			>
		</SectionForm>
	</div>
</main>

<style lang="scss">
	.bottombar {
		display: flex;
		justify-content: space-between;

		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 1rem 0;
		gap: 0.5rem;
		flex: 1;

		button {
			max-width: 250px;

			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: row;
			gap: 1rem;
			width: 100%;
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			background: var(--color-bg-1);
			color: var(--color-text-primary);
			border: 2px solid var(--color-text-1);
			font-size: 1rem;
			font-weight: 500;
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			&:disabled {
				cursor: not-allowed;
				opacity: 0.5;
			}
			&:hover {
				background: var(--color-bg-primary-faded);
				transform: scale(1.05);
			}
		}
	}
	form {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		padding: 1rem 0;

		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			width: 100%;
			border-top: 1px solid var(--color-bg-1);

			label {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
				padding: 10px;
				font-size: 0.8rem;
				row-gap: 10px;
				input,
				select {
					font-size: 0.9rem;
					padding: 0.5rem;
					font-weight: 500;
					transition: all 0.2s ease-in-out;
					color: var(--color-text-1);

					&:focus {
						outline: none;
						border: 1px solid var(--color-bg-primary-faded);
					}
				}
			}
		}
	}
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
			justify-content: center;
			align-items: flex-start;
			flex: 1;
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
				padding: 1rem;
				border-radius: 0.5rem;
				background: var(--color-bg-1);
				color: var(--color-text-primary);
				border: 2px solid var(--color-text-1);
				font-size: 1rem;
				font-weight: 500;
				cursor: pointer;
				transition: all 0.2s ease-in-out;

				&:disabled {
					cursor: not-allowed;
					opacity: 0.5;
				}

				&:hover {
					background: var(--color-bg-primary-faded);
				}
			}
		}
	}
	main {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		height: 100svh;
		overflow: hidden;
		background: linear-gradient(
			90deg,
			var(--color-bg-primary-faded) 0%,
			var(--color-bg-primary-faded) 100%
		);
		padding: 0.5rem;

		.page {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			overflow: hidden;
			gap: 1rem;

			p {
				font-size: 0.8rem;
				font-weight: 400;
			}
		}
	}
</style>
