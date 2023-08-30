<script lang="ts">
	import UserProjects from './UserProjects.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import { userScopes } from '../../../stores/scopes';
	import LeadDashboard from '$lib/components/portal/LeadDashboard.svelte';
</script>

<div class="for-you">
	<Info>
		<h5>Are you a current or former member?</h5>
		<div class="row">
			<p>Connect your Slack account to get member-only access to the portal.</p>
			<a href="/api/auth/slack">Connect Slack</a>
		</div>
	</Info>

	{#if $userScopes.has('admin:write')}
		<LeadDashboard />
	{:else}
		<UserProjects />
	{/if}
</div>

<style lang="scss">
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		p,
		a {
			font-size: 0.9rem;
		}
		a {
			color: var(--color-text-primary);
			text-decoration: underline;
		}
	}
	.for-you {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 1rem;
		width: 100%;
		flex: 1;
		row-gap: 1.5rem;
	}
</style>
