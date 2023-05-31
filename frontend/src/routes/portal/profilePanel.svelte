<script>
	import InProgress from '$lib/components/blocks/InProgress.svelte';
import SidePanel from '$lib/components/layouts/RightPanel.svelte';
	import { FACULTIES_V2, PROGRAMS_V2, SOCIALS, STANDINGS_V2 } from '../../seed/util';
	import { userStore } from '../../stores/auth';
	let user = $userStore;
</script>

<SidePanel>
	<article slot="article">
		<h2>Profile</h2>
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
		<InProgress
			title="Edit Profile"
			description="This page is still in development. Check back later!"
		/>
		
	</article>

	<footer slot="footer">
		<!-- <button on:click={application}>Edit profile</button> -->
		<!-- <button on:click={application}>Log out</button> -->
	</footer>
</SidePanel>

<style lang="scss">
	article section {
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-bg-1);
	}

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
	}
</style>
