<script lang="ts">
	import SidePanel from '$lib/components/layouts/RightPanel.svelte';
	import { FACULTIES_V2, PROGRAMS_V2, SOCIALS, STANDINGS_V2 } from '../../seed/util';
	import { signout, userStore, type UserI } from '../../stores/auth';
	let user: UserI = $userStore!;
</script>

<SidePanel>
	<article slot="article" class="article">
		<div class="header">
			<h2>Profile</h2>
			<button on:click={signout}>Sign out</button>
		</div>

		<section>
			<p>Preferred name</p>
			<p>{user.prefName}</p>
		</section>
		<section>
			<p>First name</p>
			<p>{user.firstName}</p>
		</section>

		<section>
			<p>Last name</p>
			<p>{user.lastName}</p>
		</section>

		<section>
			<p>Email</p>
			<a href={`mailto:${user.email}`} referrerpolicy="no-referrer" target="_blank">{user.email}</a>
		</section>

		{#if user.standing}
			<section>
				<p>Standing</p>
				<p>{STANDINGS_V2[Number(user.standing)]}</p>
			</section>
		{/if}

		{#if user.faculty}
			<section>
				<p>Faculty</p>
				<p>{FACULTIES_V2[user.faculty]}</p>
			</section>
		{/if}

		{#if user.programs}
			<section>
				<p>Program</p>

				<p>
					{#each user.programs as program}
						<span> {PROGRAMS_V2[program.id]} </span>
					{/each}
				</p>
			</section>
		{/if}

		{#if user.resumeLink}
			<section>
				<p>Resume</p>
				<a href={user.resumeLink} referrerpolicy="no-referrer" target="_blank">{user.resumeLink}</a>
			</section>
		{/if}
		<br />

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
	</article>
	<footer slot="footer">
		<p>Visit your settings page to update your profile.</p>
	</footer>
</SidePanel>

<style lang="scss">
	.article {
		section {
			padding: 1rem 0;
			border-bottom: 1px solid var(--color-border-0);
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			width: 100%;

			:first-child {
				font-weight: 500;
				color: var(--color-text-2);
			}

			* {
				color: var(--color-text-1);
			}
		}
		.header {
			padding: 0rem 0 1rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

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
		* {
			color: var(--color-text-2);
			font-size: 0.9rem;
		}
	}
</style>
