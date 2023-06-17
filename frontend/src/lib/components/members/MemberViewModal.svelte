<script lang="ts">
	import Modal from '../layouts/Modal.svelte';
	import { STANDINGS_V2, FACULTIES_V2, PROGRAMS_V2, SOCIALS, USER_ROLES } from '../../../seed/util';
	import type { UserI } from '../../../stores/auth';
	export let user: UserI | undefined | null;
	let userRef = undefined;
	$: isEqual = JSON.stringify(user) === JSON.stringify(userRef);
	$: if (!userRef && user && user !== null) {
		userRef = Object.assign({}, user);
	}
	export let isOpen: boolean;
</script>

<Modal title={'View Member'} on:modalevent isModalOpen={isOpen}>
	<div class="modal-content" slot="modal-content">
		<article class="article">
			<div class="header">
				<h2>Profile</h2>
			</div>

			<section>
				<p>Preferred name</p>
				<input type="text" bind:value={userRef.prefName} />
			</section>
			<section>
				<p>First name</p>
				<input type="text" bind:value={userRef.firstName} />
			</section>

			<section>
				<p>Last name</p>
				<input type="text" bind:value={userRef.lastName} />
			</section>

			{#if userRef.role}
				<section>
					<p>Role</p>
					<select name="Faculty" id="Faculty" multiple>
						{#each Object.entries(USER_ROLES) as [roleId, roleName]}
							<option value={Number(roleId)}>{roleName}</option>
						{/each}
					</select>
				</section>
			{/if}

			<section>
				<p>Email</p>
				<a href={`mailto:${userRef.email}`} referrerpolicy="no-referrer" target="_blank"
					>{userRef.email}</a
				>
			</section>

			{#if userRef.standing}
				<section>
					<p>Standing</p>
					<select bind:value={userRef.standing} name="Standing" id="Standing">
						{#each Object.entries(STANDINGS_V2) as [standingId, standingName]}
							<option value={Number(standingId)}>{standingName}</option>
						{/each}
					</select>
				</section>
			{/if}

			{#if userRef.faculty}
				<section>
					<select bind:value={userRef.faculty} name="Faculty" id="Faculty">
						{#each Object.entries(FACULTIES_V2) as [facultyId, facultyName]}
							<option value={Number(facultyId)}>{facultyName}</option>
						{/each}
					</select>
				</section>
			{/if}

			{#if userRef.programs}
				<section>
					<p>Specialization</p>
					<select bind:value={userRef.programs} name="Specialization" id="Specialization">
						{#each Object.entries(PROGRAMS_V2) as [programId, programName]}
							<option value={Number(programId)}>{programName}</option>
						{/each}
					</select>
				</section>
			{/if}

			{#if userRef.resumeLink}
				<section>
					<p>Resume</p>
					<a href={userRef.resumeLink} referrerpolicy="no-referrer" target="_blank"
						>{user.resumeLink}</a
					>
				</section>
			{/if}
			<br />

			{#if userRef.socialMedia}
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
		</article>
	</div>

	<div class="bottombar" slot="bottom-bar">
		<footer>
			<button disabled={isEqual}>Save</button>
		</footer>
	</div>
</Modal>

<style lang="scss">
	.article {
		padding: 1rem;
		section {
			padding: 1rem 0;
			border-bottom: 1px solid var(--color-border-1);
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			width: 100%;

			:first-child {
				font-weight: 500;
				color: var(--color-text-2);
			}

			input,
			select {
				width: 100%;
			}

			* {
				font-size: 0.9rem;
				color: var(--color-text-1);
			}
		}
		.header {
			padding: 0rem 0 1rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			h2 {
				font-size: 1.2rem;
				color: var(--color-text-1);
			}

			button {
				color: var(--color-text-1);
				cursor: pointer;
				font-size: 0.9rem;
				font-weight: 400;
				padding: 0.5rem 1rem;
				background: var(--color-bg-0);
				border: 1px solid var(--color-border-0);

				border-radius: 0.5rem;
				transition: all 0.2s ease-in-out;
				&:hover {
					background: var(--color-bg-2);
					border: 1px solid var(--color-border-2);
				}
			}
		}
	}

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
		border-top: 1px solid var(--color-border-0);
		padding: 0.4rem 0;
		width: 100%;

		button {
			padding: 0.5rem 1rem;
			color: var(--color-text-1);
			border-radius: 0.3rem;
			background-color: var(--color-bg-primary);
			&:disabled {
				background: var(--color-bg-2);
				cursor: not-allowed;
			}
		}
		* {
			color: var(--color-text-2);
			font-size: 0.9rem;
		}
	}
</style>
