<script>
	import logo from '$lib/static/assets/rocket.png';
	import {
		BookClosedIcon,
		BoxIcon,
		DiscordIcon,
		FacebookIcon,
		FolderIcon,
		GithubIcon,
		HomeIcon,
		InboxIcon,
		InstagramIcon,
		LinkExternalIcon,
		LinkedinIcon,
		MediumIcon,
		UsersIcon,
		listIcon
	} from '$lib/static/icons';
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
		<img src={logo} alt="logo" width="36px" />
	</div>
	<nav>
		<h3>General</h3>
		<ul>
			<li>
				<a href="/portal">
					<img src={HomeIcon} alt="portal page icon" />
					Portal
				</a>
			</li>
			<li>
				<a href="/portal/members">
					<img src={UsersIcon} alt="members page icon" />
					Members
				</a>
			</li>
		</ul>
	</nav>

	<nav>
		<h3>Resources</h3>
		<ul>
			<li>
				<a href="/projects">
					<img src={BoxIcon} alt="Projects link" />
					<p>Projects</p>
				</a>
			</li>

			<li>
				<a href="/docs" target="_blank">
					<img src={BookClosedIcon} alt="Docs link" />
					<p>Docs</p>
					<img src={LinkExternalIcon} alt="external link" />
				</a>
			</li>

			<li>
				<a href="/docs" target="_blank">
					<img src={FolderIcon} alt="Google drive link" />
					<p>Google Drive</p>
					<img src={LinkExternalIcon} alt="external link" />
				</a>
			</li>
		</ul>
	</nav>

	<nav>
		<h3>Admin</h3>
		<ul>
			<li>
				<a href="/portal/applications">
					<img src={listIcon} alt="Applications link" />
					Applications
				</a>
			</li>

			<li>
				<a href="/portal/recruitment">
					<img src={InboxIcon} alt="Recruitment link" />
					Recruitment
				</a>
			</li>
		</ul>
	</nav>

	<div class="bottom">
		<ul class="links">
			<li>
				<a href={DISCORD_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={DiscordIcon} alt="Discord link" />
				</a>
			</li>
			<li>
				<a href={FACEBOOK_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={FacebookIcon} alt="Facebook link" />
				</a>
			</li>
			<li>
				<a href={GITHUB_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={GithubIcon} alt="Github link" />
				</a>
			</li>
			<li>
				<a href={INSTAGRAM_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={InstagramIcon} alt="Instagram link" />
				</a>
			</li>
			<li>
				<a href={LINKEDIN_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={LinkedinIcon} alt="Linkedin link" />
				</a>
			</li>
			<li>
				<a href={MEDIUM_LINK} target="_blank" referrerpolicy="no-referrer">
					<img src={MediumIcon} alt="Medium Link" />
				</a>
			</li>
		</ul>
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
				font-weight: 500;
				border-radius: 4px;
				cursor: pointer;
				padding: 1px;
				img {
					width: 24px;
					cursor: pointer;
				}
			}
		}
	}

	nav {
		padding: 1rem 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		// border-bottom: 1px solid var(--color-bg-1);

		h3 {
			padding: 0.5rem 0rem;
			font-size: 1rem;
			font-weight: 500;
			color: var(--color-text-1);
		}
		ul {
			border-top: 1px solid var(--color-bg-1);
			border-bottom: 1px solid var(--color-bg-1);
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			justify-content: center;
			align-items: center;
			width: 100%;
			transition: all 0.3s ease-in-out;

			li {
				padding: 1rem 0.6rem;
				width: 100%;
				border-radius: 10px;

				display: flex;
				a {
					text-decoration: none;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					column-gap: 0.8rem;
					font-size: 1.1rem;
					width: 100%;
					font-weight: 500;

					p {
						flex: 1;
					}
				}
				img {
					width: 18px;
				}

				&:hover {
					// transform: scale(1.05);
					background-color: var(--color-bg-1);
				}
			}
		}
	}
</style>
