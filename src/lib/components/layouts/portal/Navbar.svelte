<script>
	import Icon from '$lib/components/general/Icon.svelte';
	import { HomeIcon, UsersIcon, SettingsIcon, ResourcesIcon } from '$lib/components/general/icons';
	import logo from '$lib/assets/logo.png';
	import ExternalLinkIcon from '$lib/components/general/icons/ExternalLinkIcon.svelte';
	import { signout } from '../../../../stores/auth';
	import { createEventDispatcher } from 'svelte';
	import { DOCS_LINK } from '$lib/util/links';
	import { userScopes } from '../../../../stores/scopes';
	const dispatch = createEventDispatcher();
	function triggerNavEffect() {
		dispatch('navigate', {});
	}
	$: scopes = $userScopes;
</script>

<div class="navigation-panel">
	<nav>
		<div class="navigation-panel-header">
			<img src={logo} alt="logo" width="24px" />
			Launch Pad Hub
		</div>
		<ul>
			<li class="nav-li">
				<a href="/portal" on:click={triggerNavEffect}>
					<Icon>
						<HomeIcon />
					</Icon>
					Dashboard
				</a>
			</li>
			<li class="nav-li">
				<a href="/portal/members" on:click={triggerNavEffect}>
					<Icon>
						<UsersIcon />
					</Icon>
					Members
				</a>
			</li>
			<li class="nav-li">
				<a href="/portal/teams" on:click={triggerNavEffect}>
					<Icon>
						<UsersIcon />
					</Icon>
					Teams
				</a>
			</li>
			<li class="nav-li-group">
				<div class="nav-li-group-title">
					<Icon>
						<ResourcesIcon />
					</Icon>
					Resources
				</div>
				<ul class="nav-li-group-ul">
					<li class="nav-li">
						<a href={DOCS_LINK} target="_blank" on:click={triggerNavEffect}>
							<p>Documentation</p>
							<Icon>
								<ExternalLinkIcon />
							</Icon>
						</a>
					</li>
					<li class="nav-li">
						<a href="/projects" target="_blank" on:click={triggerNavEffect}>
							<p>Projects</p>
							<Icon>
								<ExternalLinkIcon />
							</Icon>
						</a>
					</li>
				</ul>
			</li>
			<li class="nav-li">
				<a href="/portal/account" on:click={triggerNavEffect}>
					<Icon>
						<SettingsIcon />
					</Icon>
					<p>Settings</p>
				</a>
			</li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.navigation-panel {
		top: 0;
		left: 0;
		height: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--color-text-1);

		&-header {
			display: flex;
			align-items: center;
			gap: 0.7rem;
			font-size: 1.15rem;
			margin-bottom: 1rem;
			font-weight: bold;
			padding: 0.5rem 0.4rem;
		}
	}
	.bottom {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
		row-gap: 1rem;

		button {
			background-color: var(--color-bg-1);
			color: var(--color-text-1);
			border: 1px solid var(--color-border-1);
			border-radius: var(--border-radius-medium);
			padding: 0.5rem 1rem;
			&:hover {
				background-color: var(--color-bg-2);
			}
		}
	}

	nav {
		padding: 0.5rem 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		ul {
			border-bottom: 1px solid var(--color-bg-1);
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			justify-content: center;
			align-items: center;
			width: 100%;
			transition: all 0.3s ease-in-out;
			list-style-type: none;

			.nav-li-group {
				padding: 0.7rem 0.6rem;
				width: 100%;
				border-radius: 10px;

				&-title {
					margin-bottom: 0.8rem;
					font-size: 0.8rem;
					display: flex;
					stroke: black;
					color: var(--color-text-1);
					// stroke-width: 2px;
					column-gap: 1rem;
				}

				&-ul {
					row-gap: 0rem;

					li {
						padding: 0.25rem;
						margin-left: 1rem;
					}
				}
			}

			.nav-li {
				padding: 0.7rem 0.6rem;
				width: 100%;
				border-radius: 10px;
				display: flex;
				transition: all 0.2s ease-in-out;
				stroke: black;
				color: var(--color-text-1);
				// stroke-width: 2px;
				justify-content: center;
				align-items: center;

				:global(svg) {
					width: 18px;
					height: 18px;
				}
				a {
					text-decoration: none;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					column-gap: 1rem;
					font-size: 0.8rem;
					width: 100%;
					font-weight: 500;
					color: var(--color-text-1);

					p {
						flex: 1;
					}
				}
				&:hover {
					background-color: rgb(247, 245, 249);
				}
			}
		}
	}
</style>
