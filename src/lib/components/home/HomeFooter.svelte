<script lang="ts">
	import {
		DOCS_LINK,
		FACEBOOK_LINK,
		GITHUB_LINK,
		INSTAGRAM_LINK,
		LINKEDIN_LINK,
		SLACK_LINK,
		STRATEGY_EMAIL,
		TEAM_EMAIL
	} from '$lib/util/links';
</script>

<footer>
	<div class="grid">
		<section>
			<p>Resources</p>
			<a href={DOCS_LINK} target="_blank" referrerpolicy="no-referrer">Documentation</a>
			<a href={GITHUB_LINK} target="_blank" referrerpolicy="no-referrer">Github</a>
		</section>

		<section>
			<p>Members</p>
			<a href="/">Launch Pad Portal (in progress)</a>
			<a href={SLACK_LINK} target="_blank" referrerpolicy="no-referrer">Slack</a>
		</section>
		<section>
			<p>Contact</p>
			<a href={STRATEGY_EMAIL}>General Inquiries</a>
			<a href={TEAM_EMAIL}>Sponsorship and Partners</a>
		</section>

		<section>
			<p>Socials</p>
			<a href={FACEBOOK_LINK}>Facebook</a>
			<a href={INSTAGRAM_LINK}>Instagram</a>
			<a href={LINKEDIN_LINK}>LinkedIn</a>
		</section>
	</div>
</footer>

<style lang="scss">
	.grid {
		max-width: 1200px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 1rem;
		grid-auto-flow: dense;
		width: 100%;
		justify-content: space-around;
		height: 100%;
		padding: 1rem 2rem;
	}

	section {
		display: flex;
		flex-direction: column;

		p {
			font-weight: 600;
			font-size: 1.2rem;
			margin-bottom: 1rem;
			color: var(--color-text-2);
		}

		a {
			font-size: 0.9rem;
			color: var(--color-text-3);
			margin-bottom: 0.4rem;
		}
	}

	footer {
		background-color: var(--color-bg-0);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
		padding: 1rem;
		width: 100%;
		border-top: 1px solid var(--color-border-2);
	}
</style>
