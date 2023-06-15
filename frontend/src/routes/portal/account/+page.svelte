<script lang="ts">
	import InProgress from '$lib/components/blocks/InProgress.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { STANDINGS_V2, FACULTIES_V2, PROGRAMS_V2, SOCIALS } from '../../../seed/util';
	import { type UserI, userStore } from '../../../stores/auth';

	let user: UserI = $userStore!;
</script>

<MainPage>
	<div slot="main" class="content">
		<h1>Settings</h1>

		<div class="account-group">
			<section class="account-section">
				<h2>Profile</h2>

				<section class="section-content">
					<form>
						<label>
							<p>Preferred name</p>
							<input type="text" value={user.prefName} />
						</label>
						<label>
							<p>First name</p>
							<input type="text" value={user.firstName} />
						</label>

						<label>
							<p>Last name</p>
							<input type="text" value={user.lastName} />
						</label>

						<label>
							<p>Email</p>
							<input type="text" value={user.email} />
						</label>

						{#if user.standing}
							<label>
								<p>Standing</p>
								<select bind:value={user.standing} name="Standing" id="Standing">
									{#each Object.entries(STANDINGS_V2) as [standingId, standingName]}
										<option value={standingId}>{standingName}</option>
									{/each}
								</select>
							</label>
						{/if}

						<label>
							<p>Faculty</p>
							<select bind:value={user.faculty} name="Faculty" id="Faculty">
								<option value="" disabled hidden selected>Your faculty</option>

								{#each Object.entries(FACULTIES_V2) as [facultyId, facultyName]}
									<option value={facultyId}>{facultyName}</option>
								{/each}
							</select>
						</label>

						<label
							><p>Specialization</p>
							<select bind:value={user.programs} name="Specialization" id="Specialization">
								<option value="" disabled hidden selected>Your (intended) major</option>
								{#each Object.entries(PROGRAMS_V2) as [programId, programName]}
									<option value={programId}>{programName}</option>
								{/each}
							</select>
						</label>

						<label>
							<p>Resume</p>
							<input type="text" value={user.resumeLink} />
						</label>

						{#if user.socialMedia}
							<h2>Links</h2>
							{#each user.socialMedia as socialMedia}
								<section>
									<p>{SOCIALS[socialMedia.id].name}</p>
									<a href={socialMedia.url} referrerpolicy="no-referrer" target="_blank"
										>{socialMedia.handle || socialMedia.url}</a
									>
								</section>
							{/each}
						{/if}
					</form>
					<div class="form-actions">
						<button type="submit">Save</button>
					</div>
				</section>
			</section>

			<section class="account-section">
				<h2>Account</h2>
				<section class="section-content">
					<form>
						<label
							><p />
							<div class="form-actions">
								<button type="submit">Request to delete account</button>
							</div>
						</label>
					</form>
				</section>
			</section>
		</div>
	</div>
</MainPage>

<style lang="scss">
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 10px;
		width: 100%;
		row-gap: 1rem;
		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		overflow: scroll;
	}

	h1 {
		padding-bottom: 0rem;
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: column;
	}

	.account-group {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: flex-start;
		flex-direction: row;
		max-width: 800px;

		gap: 1rem;
	}
	.account-section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		row-gap: 1rem;
		border-radius: 4px;
		border-top-left-radius: 0.6rem;
		min-width: 600px;
		flex: 1;

		background-color: var(--color-bg-1);
		border: 3px solid var(--color-bg-1);
		overflow: hidden;
		flex-wrap: wrap;

		h2 {
			font-size: 1.1rem;
			padding: 0.5rem 1rem;
			width: 8rem;
			font-weight: 500;
			border-radius: 0 0 0.6rem 0;
			color: var(--color-text-1);
			background-color: var(--color-bg-0);
		}
		.section-content {
			padding: 1.5rem 0rem 0rem;
			display: flex;
			grid-gap: 1rem;
			justify-content: flex-end;
			align-items: center;
			flex-direction: column;
			width: 100%;
			flex: 1;
			.form-actions {
				display: flex;
				justify-content: flex-end;
				flex-direction: row;
				align-items: center;
				width: 100%;
				padding: 0rem 0 0;
				button {
					max-width: fit-content;
					padding: 0.5rem 1rem;
					border-radius: 4px;
					background-color: var(--color-bg-0-faded);
					color: var(--color-text-1);
					border: none;
					font-size: 0.9rem;
					font-weight: 500;
					cursor: pointer;
					transition: all 0.2s ease-in-out;
					&:hover {
						background-color: var(--color-bg-primary);
					}
				}
			}

			form {
				padding: 1rem;
				display: flex;
				grid-gap: 1rem;
				column-gap: 4rem;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;

				label {
					padding: 0rem;
					display: flex;

					flex-direction: row;
					row-gap: 10px;
					border-radius: 4px;
					justify-content: space-between;
					align-items: center;
					width: 100%;

					:first-child {
						font-weight: 500;
						color: var(--color-text-2);
					}

					p {
						width: 10rem;
						padding: 0.5rem 0.5rem;
					}

					input,
					select {
						flex: 2;
						border: none;
						padding: 0.5rem 0.5rem;
					}

					* {
						font-size: 0.9rem;
						color: var(--color-text-1);
					}
				}
			}
		}
	}
</style>
