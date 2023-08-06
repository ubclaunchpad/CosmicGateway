<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import logo from '$lib/assets/logo.png';
	import background from '$lib/assets/background.jpeg';
	import Icon from '$lib/components/general/Icon.svelte';
	import GithubIcon from '$lib/components/general/icons/GithubIcon.svelte';
	import FacebookIcon from '$lib/components/general/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/components/general/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/components/general/icons/LinkedInIcon.svelte';
	import { onMount } from 'svelte';
	import { FACEBOOK_LINK, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from '$lib/util/links';
	import StarFilledIcon from '$lib/components/general/icons/decorative/StarFilledIcon.svelte';
	const newsletterURI = 'https://buttondown.email/api/emails/embed-subscribe/ubclaunchpad';
	const subscribe = () => {
		animate();
	};

	let stars: NodeListOf<SVGElement> = {} as NodeListOf<SVGElement>;

	onMount(() => {
		stars =
			document.querySelector('.stars')?.querySelectorAll('svg') || ({} as NodeListOf<SVGElement>);
	});

	const animate = () => {
		stars.forEach((star) => {
			star.classList.add('twirl');
		});
	};
</script>

<MainPage>
	<div class="landing" slot="main">
		<img src={background} alt="logo" width="360px" />

		<div class="stars">
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
			<StarFilledIcon />
		</div>

		<div class="content">
			<nav>
				<div class="logo">
					<a href="/">
						<img src={logo} alt="logo" width="36px" />
					</a>

					<h2>UBC Launch Pad</h2>
				</div>

				<div class="icons">
					<a href={FACEBOOK_LINK} target="_blank">
						<Icon width={'1.7rem'}>
							<FacebookIcon />
						</Icon>
					</a>
					<a href={GITHUB_LINK} target="_blank">
						<Icon width={'1.7rem'}>
							<GithubIcon />
						</Icon>
					</a>
					<a href={INSTAGRAM_LINK} target="_blank">
						<Icon width={'1.7rem'}>
							<InstagramIcon />
						</Icon>
					</a>

					<a href={LINKEDIN_LINK} target="_blank">
						<Icon width={'1.7rem'}>
							<LinkedInIcon />
						</Icon>
					</a>
				</div>
			</nav>

			<div class="coming-soon">
				<h1>Coming Soon</h1>
				<p>
					Sign up for our newsletter to be the first to know about recruitment, events and when our
					new website launches
				</p>

				<form method="post" action={newsletterURI} on:submit={subscribe}>
					<input type="email" name="email" id="bd-email" placeholder="Enter your email" />
					<button type="submit" value="Subscribe">Subscribe</button>
				</form>
			</div>
		</div>
	</div>
</MainPage>

<style lang="scss">
	@keyframes twirl {
		0% {
			fill: #ffffff4e;
			transform: scale(1);
		}

		50% {
			transform: scale(1.3) rotate(150deg);
			fill: #ffffffe3;
		}

		100% {
			fill: #ffffff4e;
			transform: scale(1) rotate(360deg);
		}
	}

	:global(.twirl) {
		animation: twirl 1s ease-in-out;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;
	}
	.landing {
		color: var(--color-text-2);
		display: flex;
		flex-direction: column;
		padding: 0;
		height: 100svh;
		overflow: hidden;
		position: relative;
		flex: 1;

		.stars {
			position: fixed;
			height: 100%;
			width: 100%;

			:global(svg) {
				stroke-width: 2px;
				position: absolute;
				animation: twirl 5s linear;
				animation-iteration-count: infinite;
				animation-fill-mode: both;
				width: 1em;
				opacity: 0.8;

				&:nth-child(odd) {
					animation-direction: reverse;
					animation-duration: 8s;
				}

				&:nth-child(1) {
					left: 10%;
					top: 40%;
				}

				&:nth-child(2) {
					left: 20%;
					top: 60%;
				}

				&:nth-child(3) {
					left: 30%;
					top: 30%;
				}

				&:nth-child(5) {
					left: 20%;
					top: 90%;
				}

				&:nth-child(6) {
					left: 60%;
					top: 20%;
				}

				&:nth-child(7) {
					left: 30%;
					top: 80%;
				}

				&:nth-child(8) {
					left: 70%;
					top: 40%;
				}

				&:nth-child(9) {
					left: 80%;
					top: 60%;
				}

				&:nth-child(10) {
					left: 90%;
					top: 30%;
				}

				&:nth-child(11) {
					left: 50%;
					top: 5%;
				}

				&:nth-child(12) {
					left: 95%;
					top: 20%;
				}

				&:nth-child(13) {
					left: 97%;
					top: 2%;
				}

				&:nth-child(14) {
					left: 85%;
					top: 10%;
				}
			}
		}

		> img {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			opacity: 0.5;
		}

		.content {
			width: 100%;
			height: 100%;
			z-index: 2;
		}

		.coming-soon {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			align-items: center;
			width: 100%;
			flex: 1;
			row-gap: 2rem;
			padding: 1rem;

			h1 {
				font-size: 5em;
				font-weight: bolder;
				color: var(--color-text-2);
				opacity: 0.8;
			}

			p {
				max-width: 650px;
				font-size: 1.2em;
				text-align: left;
				width: fit-content;
				opacity: 0.8;
			}

			form {
				display: flex;
				justify-content: flex-start;
				column-gap: 0.5rem;
				color: var(--color-text-1);

				input {
					background-color: var(--color-bg-0-faded);
					padding: 0.8rem 1rem;
					width: 300px;
				}

				button {
					background-color: var(--color-bg-primary-faded);
					padding: 0.5rem 1rem;
					border-radius: var(--border-radius-medium);
					color: var(--color-text-1);
					font-weight: bold;
				}
			}
		}

		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 1rem;
			width: 100%;
			height: 4rem;

			.icons {
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 0.5rem;

				:global(svg) {
					stroke-width: 1px;
					stroke: var(--color-bg-2);
					stroke-opacity: 0.7;
				}
			}

			.logo {
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 0.5rem;

				h2 {
					font-size: 1.2rem;
				}
			}
		}
	}
</style>
