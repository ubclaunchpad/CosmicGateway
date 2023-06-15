<script>
	import Icon from '$lib/components/general/Icon.svelte';
	import {
		BoxIcon,
		HomeIcon,
		UsersIcon,
		FolderIcon,
		BookClosedIcon,
		ListIcon,
		DiscordIcon,
		InstagramIcon,
		MediumIcon,
		GithubIcon,
		LinkedInIcon,
		SettingsIcon,
		FacebookIcon
	} from '$lib/components/general/icons';
	import ApplicationsIcon from '$lib/components/general/icons/ApplicationsIcon.svelte';
	import ExternalLinkIcon from '$lib/components/general/icons/ExternalLinkIcon.svelte';

	import {
		DISCORD_LINK,
		FACEBOOK_LINK,
		GITHUB_LINK,
		INSTAGRAM_LINK,
		LINKEDIN_LINK,
		MEDIUM_LINK
	} from '$lib/util/links';
</script>

<div class="side-nav">
	<div class="top">
		<!-- <img src={logo} alt="logo" width="36px" /> -->
	</div>
	<nav>
		<h3>General</h3>
		<ul>
			<li>
				<a href="/portal" >
					<Icon>
						<HomeIcon />
					</Icon>
					Portal
				</a>
			</li>
			<li>
				<a href="/portal/members" >
					<Icon>
						<UsersIcon />
					</Icon>
					Members
				</a>
			</li>
		</ul>
	</nav>

	<nav>
		<h3>Resources</h3>
		<ul>
			<li>
				<a href="/projects" target="_blank">
					<Icon>
						<BoxIcon />
					</Icon>

					<p>Project Directory</p>
					<Icon>
						<ExternalLinkIcon />
					</Icon>
				</a>
			</li>

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
		<nav>
			<h3>Account</h3>
			<ul>
				<!-- <li>
					<a href="/portal/applications">
						<Icon>
							<ApplicationsIcon />
						</Icon>
						Applications
					</a>
				</li>
	
				<li>
					<a href="/portal/recruitment">
						<Icon>
							<ListIcon />
						</Icon>
						Recruitment
					</a>
				</li> -->
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
		<!-- <ul class="links">
			<li>
				<a href={DISCORD_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<DiscordIcon />
					</Icon>
				</a>
			</li>
			<li>
				<a href={FACEBOOK_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<FacebookIcon />
					</Icon>
				</a>
			</li>
			<li>
				<a href={GITHUB_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<GithubIcon />
					</Icon>
				</a>
			</li>
			<li>
				<a href={INSTAGRAM_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<InstagramIcon />
					</Icon>
				</a>
			</li>
			<li>
				<a href={LINKEDIN_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<LinkedInIcon />
					</Icon>
				</a>
			</li>
			<li>
				<a href={MEDIUM_LINK} target="_blank" referrerpolicy="no-referrer">
					<Icon>
						<MediumIcon />
					</Icon>
				</a>
			</li>
		</ul> -->
	</div>
</div>

<style lang="scss">
	.side-nav {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		color: var(--color-text-1);

		margin: 0;
		.top {
			padding: 0px;
		}
	}
	.bottom {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
	}
	.links {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		li {
			list-style: none;
			padding: 0;
			a {
				text-decoration: none;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				column-gap: 0.4rem;
				font-size: 0.7rem;
				background-color: var(--color-bg-1);
				color: var(--color-text-2);
				stroke: var(--color-text-1);
				fill: var(--color-text-1);
				stroke-width: 0.5px;
				font-weight: 500;
				border-radius: 4px;
				cursor: pointer;
				padding: 1px;
			}
		}
	}

	nav {
		padding: 1rem 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;

		h3 {
			padding: 0.5rem 0rem;
			font-size: 0.9rem;
			font-weight: 500;
			color: var(--color-text-2);
			border-top: 1px solid var(--color-bg-0);

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
					font-size: 0.9rem;
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
