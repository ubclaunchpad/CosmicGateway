<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import jwt_decode from 'jwt-decode';
	import { onMount } from 'svelte';
	import type { GoogleAuthUser } from '$lib/types/googleAuth.js';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { goto } from '$app/navigation';
	import { token } from '../../../../stores/auth';
	import { notificationStore } from '../../../../stores/notification';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	import type { IFaculty, ISpecialization, IStanding } from '$lib/types/User';
	import Banner from '$lib/components/blocks/Banner.svelte';
	let googleAuthUser: GoogleAuthUser | undefined;
	$: googleConnected = $token !== null && $token !== undefined;
	let listOfFaculties: IFaculty = [];
	let listOfSpecializations: ISpecialization = [];
	let listOfStandings: IStanding = [];
	const fetchFormDetails = async () => {
		const response = await fetch('/api/resources', {
			method: 'GET'
		});

		const resources = await response.json();
		listOfFaculties = resources.listOfFaculties;
		listOfSpecializations = resources.listOfSpecializations;
		listOfStandings = resources.listOfStandings;
	};

	function verifyGoogleLogin(request: { credential: string }): void {
		googleAuthUser = jwt_decode(request.credential) as GoogleAuthUser;
		firstName = googleAuthUser.given_name;
		lastName = googleAuthUser.family_name;
		prefName = googleAuthUser.given_name;
		email = googleAuthUser.email;
		token.set(request.credential);
	}

	function fillOutFields() {
		if ($token) {
			googleAuthUser = jwt_decode($token) as GoogleAuthUser;
			firstName = googleAuthUser.given_name;
			lastName = googleAuthUser.family_name;
			prefName = googleAuthUser.given_name;
			email = googleAuthUser.email;
		}
	}

	onMount(() => {
		fillOutFields();
		fetchFormDetails();
	});

	async function register() {
		const body = {
			email: email,
			first_name: firstName,
			pref_name: prefName,
			last_name: lastName,
			faculty_id: facultyId,
			standing_id: standingId,
			specialization_id: specializationId
		};

		try {
			const response = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${$token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});

			if (response.ok) {
				await goto('/portal');
			} else {
				const body = await response.json();
				notificationStore.update(() => {
					return {
						title: body.error.name,
						message: body.error.message,
						type: 'error'
					};
				});
			}
		} catch (e) {
			notificationStore.update(() => {
				return {
					title: 'Error',
					message: (e as Error).message,
					type: 'error'
				};
			});
		}
	}

	let firstName: string;
	let lastName: string;
	let prefName: string;
	let email: string;
	let standingId: number;
	let facultyId: number;
	let specializationId: number;

	onMount(async () => {
		if (google) {
			google.accounts.id.initialize({
				client_id: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com',
				ux_mode: 'popup',
				callback: verifyGoogleLogin
			});

			const googleAuthBtn = document.getElementById('signinDiv') as HTMLDivElement;
			if (googleAuthBtn) {
				google.accounts.id.renderButton(googleAuthBtn, {
					width: 400,
					size: 'large',
					type: 'standard',
					text: 'continue_with',
					shape: 'square'
				});
			}
		}
	});
</script>

<PageForm>
	<SectionForm>
		<div slot="header">
			<h2>Sign up</h2>
		</div>

		<Banner
			title="Portal is in testing phase"
			description="Sign up is limited to only certain users. If you are testing the portal message one of the admins to get access."
			links={[]}
		/>

		<Info>
			<p>
				Open to all current and former students/staff at <span class="bold"
					>the University of British Columbia.</span
				>
			</p>
		</Info>

		<form method="POST">
			<div class="rich-input">
				{#if googleConnected}
					<div class="approved">{email}</div>
				{:else}
					<button class="google" id="googleBtn" type="button">
						<div id={'signinDiv'} />
					</button>
				{/if}
			</div>
			{#if googleConnected}
				<section>
					<label>
						<p class="required">First Name</p>
						<input bind:value={firstName} required type="text" placeholder="name" />
					</label>

					<label>
						<p class="required">Last Name</p>
						<input bind:value={lastName} required type="text" placeholder="last name" />
					</label>

					<label>
						<p class="required">Preferred Name</p>
						<input bind:value={prefName} required type="text" placeholder="preferred name" />
					</label>
				</section>

				<section>
					<label>
						<p class="required">Faculty</p>
						<select required bind:value={facultyId} name="Faculty" id="Faculty">
							<option value="" disabled hidden selected>Your faculty</option>
							{#each listOfFaculties as field}
								<option value={field.id}>{field.label}</option>
							{/each}
						</select>
					</label>

					<label>
						<p class="required">Specialization</p>
						<select bind:value={specializationId} name="Specialization" id="Specialization">
							<option value="" disabled hidden selected>Your (intended) major</option>
							{#each listOfSpecializations as field}
								<option value={field.id}>{field.label}</option>
							{/each}
						</select>
					</label>

					<label>
						<p class="required">Standing</p>
						<select required bind:value={standingId} name="Standing" id="Standing">
							<option value="" disabled hidden selected>Your current standing</option>
							{#each listOfStandings as field}
								<option value={field.id}>{field.label}</option>
							{/each}
						</select>
					</label>
				</section>
				<div class="action">
					<button type="button" on:submit|preventDefault={register} on:click={register}
						>Register</button
					>
				</div>
			{/if}
		</form>
		<div class="bottombar">
			{#if googleConnected}
				<Info
					><p>You can update your profile later as your information changes.</p>
					<p>
						Having issues setting up? Contact <span>
							<a href="mailt:strategy@ubclaunchpad.com">strategy@ubclaunchpad.com</a>
						</span>
					</p>
				</Info>
			{/if}
		</div>
		<Info
			><p>
				Already have an account? <a href="/auth/signin">Sign in</a>
			</p>
		</Info>
	</SectionForm>
</PageForm>

<style lang="scss">
	h2 {
		padding-bottom: 1rem;
	}
	.bottombar {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		padding: 1rem 0;
		gap: 0.5rem;
		flex: 1;
	}
	form {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-bg-1);
		border-top: 1px solid var(--color-bg-1);

		.action {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			flex-direction: row;
			gap: 1rem;
			width: 100%;
			button {
				width: 150px;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
				gap: 1rem;
				max-width: 100%;
				padding: 0.5rem 0.4rem;
				border-radius: var(--border-radius-small);
				border: 1px solid var(--color-border-1);
				background: var(--color-bg-1);
				color: var(--color-text-0);
				box-shadow: var(--box-shadow-small);
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

		.rich-input {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			flex-direction: row;
			width: 100%;
			height: 100%;
			border-bottom: 1px solid var(--color-border-1);
			button,
			.approved {
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
				// background-color: red;
				padding: 1rem;
				overflow: hidden;
				border: 1px solid transparent;
			}

			.approved {
				color: var(--color-text-primary);
			}
		}

		section {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-content: flex-start;
			align-items: center;
			flex-direction: column;
			width: 100%;
			border-bottom: 1px solid var(--color-border-1);

			.required {
				&::after {
					content: '*';
					color: var(--color-text-primary);
					font-size: 0.9rem;
					font-weight: 500;
					padding: 2px;
					display: inline-block;
					justify-content: center;
					align-items: center;
					width: fit-content;
				}
			}

			label,
			.rich-input {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
				padding: 10px;
				font-size: 0.8rem;

				p {
					font-size: 0.8rem;
					color: var(--color-text-1);
				}
				row-gap: 10px;
				input,
				select,
				button {
					font-size: 0.8rem;
					padding: 0.5rem;
					font-weight: 500;
					transition: all 0.2s ease-in-out;
					color: var(--color-text-1);
					text-overflow: ellipsis;
					width: 100%;
					display: block;

					&:focus {
						outline: none;
						border: 1px solid var(--color-bg-primary);
					}
				}

				.approved {
					border-color: var(--color-bg-primary);
					&:hover {
						opacity: 0.8;
					}
				}
			}
		}
	}
</style>
