<script>
	import Icon from '$lib/components/general/Icon.svelte';
	import logo from '$lib/assets/logo.png';
	import ProfileIcon from '$lib/components/general/icons/ProfileIcon.svelte';
	import { userScopes } from '../../../../stores/scopes';
	$: scopes = $userScopes;
</script>

<div class="header">
	<div class="header-left">
		<img src={logo} alt="logo" width="24px" />
		LAUNCH PAD
	</div>
	<div class="header-right">
		<a href="/portal/account" class="account">
			<Icon>
				<ProfileIcon />
			</Icon>
		</a>
	</div>
</div>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.75rem 0.75rem;
		border-bottom: 1px solid var(--color-border-1);

		.header-left {
			display: flex;
			align-items: center;
			gap: 0.7rem;
			padding: 0.5rem 0.4rem;
			font-size: 1.1rem;
			font-style: normal;
			font-weight: 700;
		}
	}
</style>
