<script>
	import Icon from '$lib/components/general/Icon.svelte';
	import { HomeIcon, UsersIcon, BookClosedIcon, SettingsIcon } from '$lib/components/general/icons';
	import ExternalLinkIcon from '$lib/components/general/icons/ExternalLinkIcon.svelte';
	import { signout } from '../../../../stores/auth';
</script>

<div class="navigation-panel">
	<nav>
		<ul>
			<li>
				<a href="/portal">
					<Icon>
						<HomeIcon />
					</Icon>
					Portal
				</a>
			</li>
			<li>
				<a href="/portal/members">
					<Icon>
						<UsersIcon />
					</Icon>
					Members
				</a>
			</li>
		</ul>
	</nav>

	<nav>
		<ul>
			<li>
				<a href="/docs" target="_blank">
					<Icon>
						<BookClosedIcon />
					</Icon>

					<p>Docs</p>
					<Icon>
						<ExternalLinkIcon />
					</Icon>
				</a>
			</li>
		</ul>
	</nav>

	<div class="bottom">
		<button on:click={signout}>Sign out</button>
		<nav>
			<ul>
				<li>
					<a href="/portal/account">
						<Icon>
							<SettingsIcon />
						</Icon>
						<p>Settings</p>
					</a>
				</li>
			</ul>
		</nav>
	</div>
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
		border-top: 1px solid var(--color-border-0);

		&:last-child {
			border-bottom: 1px solid var(--color-border-0);
		}
		ul {
			border-bottom: 1px solid var(--color-bg-1);
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			justify-content: center;
			align-items: center;
			width: 100%;
			transition: all 0.3s ease-in-out;

			li {
				padding: 0.7rem 0.6rem;
				width: 100%;
				border-radius: 10px;
				display: flex;
				transition: all 0.2s ease-in-out;
				stroke: var(--color-text-0);
				color: var(--color-text);
				stroke-width: 2px;
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
					column-gap: 0.8rem;
					font-size: 0.8rem;
					width: 100%;
					font-weight: 500;
					color: var(--color-text-1);

					p {
						flex: 1;
					}
				}
				&:hover {
					background-color: var(--color-bg-2);
				}
			}
		}
	}
</style>
