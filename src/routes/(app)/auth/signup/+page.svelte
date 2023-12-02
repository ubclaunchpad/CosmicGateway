<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import jwt_decode from 'jwt-decode';
	import { onMount } from 'svelte';
	import type { GoogleAuthUser } from '$lib/types/googleAuth.js';
	import logo from '$lib/assets/logo.png';
	import { goto } from '$app/navigation';
	import { token } from '../../../../stores/auth';
	import { notificationStore } from '../../../../stores/notification';
	import type { IFaculty, ISpecialization, IStanding } from '$lib/types/User';
	import Banner from '$lib/components/blocks/Banner.svelte';
	import MakerLaunchIcon from '$lib/components/general/icons/MakerLaunchIcon.svelte';
	import { DISCORD_LINK } from '$lib/util/links';
	let googleAuthUser: GoogleAuthUser | undefined;
	$: googleConnected = $token !== null && $token !== undefined;
	let listOfFaculties: IFaculty = [];
	let listOfSpecializations: ISpecialization = [];
	let listOfStandings: IStanding = [];
	const fetchFormDetails = async () => {
		let [facultiesResponse, specializationsResponse, standingsResponse] = await Promise.all([
			fetch('/api/test/faculties', { method: 'GET' }),
			fetch('/api/test/specializations', { method: 'GET' }),
			fetch('/api/test/standings', { method: 'GET' })
		]);

		let faculties = await facultiesResponse.json();
		let specializations = await specializationsResponse.json();
		let standings = await standingsResponse.json();

		listOfFaculties = faculties.data;
		listOfSpecializations = specializations.data;
		listOfStandings = standings.data;
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

			// Create a dedicated container for the Google sign-in button
			const googleAuthBtnContainer = document.getElementById(
				'googleBtnContainer'
			) as HTMLDivElement;
			if (googleAuthBtnContainer) {
				google.accounts.id.renderButton(googleAuthBtnContainer, {
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

<div class="h-screen flex flex-col bg-bg-100 overflow-hidden main">
	<header class="flex items-center p-2">
		<img src={logo} alt="Logo" class="h-8 w-8 mr-2" />
		<span class="font-semibold text-xl tracking-tight">Launch Pad Hub</span>
	</header>
	<div class="flex flex-1">
		<div class="flex-1 flex-col justify-center items-center overflow-y-scroll h-screen pb-10">
			<div class="flex flex-1 flex-col gap-3 w-full max-w-lg p-10">
				<h1 class="font-bold text-3xl pb-3">Sign Up</h1>
				<Banner
					title="Portal is in development"
					description="Sign up is limited to only certain users. If you are testing the portal message one of the admins to get access."
					links={[
						{
							text: 'Message an admin',
							link: DISCORD_LINK
						}
					]}
				/>
				<div class="flex flex-col">
					<!-- Form -->
					<form method="POST" class="flex flex-col gap-2 w-full py-3">
						{#if !googleConnected}
							<div class="flex justify-center items-center flex-1 w-full border-gray-200">
								<div class="google-signin-container" id="googleBtnContainer" />
							</div>
						{/if}

						{#if googleConnected}
							<!-- Form Sections -->
							<div class="flex flex-col gap-4 py-4 w-full">
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Email</span>
									<input
										disabled
										bind:value={email}
										required
										type="text"
										class="p-2 border border-gray-200 rounded-lg w-full"
									/>
								</label>

								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">First Name</span>
									<input
										disabled
										bind:value={firstName}
										required
										type="text"
										placeholder="name"
										class="p-2 border border-gray-200 rounded-lg w-full"
									/>
								</label>

								<!-- Last Name -->
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Last Name</span>
									<input
										disabled
										bind:value={lastName}
										required
										type="text"
										placeholder="last name"
										class="p-2 border border-gray-200 rounded-lg w-full"
									/>
								</label>

								<!-- Preferred Name -->
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Preferred Name</span>
									<input
										bind:value={prefName}
										required
										type="text"
										placeholder="preferred name"
										class="p-2 border border-gray-200 rounded-lg w-full"
									/>
								</label>

								<!-- Faculty -->
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Faculty</span>
									<select
										bind:value={facultyId}
										required
										name="Faculty"
										id="Faculty"
										class="p-2 bg-bg-50 border border-gray-200 rounded-lg w-full"
									>
										<option value="" disabled hidden selected>Your faculty</option>
										{#each listOfFaculties as field}
											<option value={field.id}>{field.label}</option>
										{/each}
									</select>
								</label>

								<!-- Specialization -->
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Specialization</span>
									<select
										bind:value={specializationId}
										name="Specialization"
										id="Specialization"
										class="p-2 bg-bg-50 border border-gray-200 rounded-lg w-full"
									>
										<option value="" disabled hidden selected>Your (intended) major</option>
										{#each listOfSpecializations as field}
											<option value={field.id}>{field.label}</option>
										{/each}
									</select>
								</label>

								<!-- Standing -->
								<label class="flex flex-col gap-2">
									<span class="required text-gray-600">Standing</span>
									<select
										bind:value={standingId}
										required
										name="Standing"
										id="Standing"
										class="p-2 bg-bg-50 border border-gray-200 rounded-lg w-full"
									>
										<option value="" disabled hidden selected>Your current standing</option>
										{#each listOfStandings as field}
											<option value={field.id}>{field.label}</option>
										{/each}
									</select>
								</label>
							</div>

							<!-- Action Buttons -->
							<div
								class="flex justify-end items-center gap-4 w-full sticky bottom-0 bg-bg-100 py-4"
							>
								<button
									type="button"
									on:submit|preventDefault={register}
									on:click={register}
									class="w-52 flex justify-center items-center gap-4 max-w-full p-2 border border-gray-100 bg-primary-500 text-white shadow-sm text-md cursor-pointer rounded-lg"
								>
									Sign up
								</button>
							</div>
						{/if}
					</form>

					<div class="flex flex-row justify-end items-center gap-2">
						Already have an account yet?
						<a href="/auth">
							<strong><u>Sign in</u></strong>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="sm:flex w-full h-full flex-1 justify-center items-center pr-32 hidden">
			<MakerLaunchIcon />
		</div>
	</div>
</div>

<style>
	.main {
		scroll-behavior: auto;
	}
</style>
