<script lang="ts">
	import globe from '$lib/assets/globe2.png';
	import TeamWorkflow from '$lib/components/home/TeamWorkflow.svelte';
	import HomeFooter from '$lib/components/home/HomeFooter.svelte';
	import StatsSection from '$lib/components/home/StatsSection.svelte';
	import NewsletterSection from '$lib/components/home/NewsletterSection.svelte';
	import RoleSection from '$lib/components/home/RoleSection.svelte';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<div class="page">
	<!--	<nav>-->
	<!--		<img src={logo} alt="UBC Launch Pad Logo" width="40" height="40" />-->
	<!--		<div class="logo">-->
	<!--			<h1><span>UBC</span> Launch Pad</h1>-->
	<!--		</div>-->
	<!--		<ul class="links">-->
	<!--			<li><a href={GITHUB_LINK}><GithubIcon /></a></li>-->
	<!--			<li><a href={FACEBOOK_LINK}><FacebookIcon /></a></li>-->
	<!--			<li><a href={INSTAGRAM_LINK}><InstagramIcon /></a></li>-->
	<!--			<li><a href={LINKEDIN_LINK}><LinkedInIcon /></a></li>-->
	<!--		</ul>-->
	<!--	</nav>-->
	<div class="content">
		<div class="landing">
			<!--			<h2>-->
			<!--				Building Software for the Real World <span>-->
			<!--					<button>-->
			<!--						<div>Join Us</div>-->
			<!--					</button>-->
			<!--				</span>-->
			<!--				<span class="text">-->
			<!--					&lt;!&ndash;					style:transform={`translate3d(0, ${scrollY / 1.2}px , 0)`}&ndash;&gt;-->
			<!--					a student-run software engineering team devoted to building software projects in a collaborative-->
			<!--					and professional environment-->
			<!--				</span>-->
			<!--			</h2>-->

			<div class="hero">
				<h1><span>UBC</span> Launch Pad</h1>
				<img src={globe} width="900px" />
			</div>
		</div>

		<section>
			<div class="header">
				<h3>Our Mission</h3>
				<p>
					Be the best space at UBC for students to meet other tech enthusiasts, build projects in a
					team setting, gain experience with professional development tools and principles, and
					share their knowledge with others
				</p>
			</div>
		</section>

		<StatsSection />

		<!--		<FeaturedProjects />-->

		<section>
			<RoleSection />
		</section>

		<section>
			<div class="header">
				<h3>Collaboration</h3>
				<p>
					At our core we value building foundational relationships and collaborating with each other
				</p>
			</div>
			<div class="details-row">
				<div>
					<TeamWorkflow />
				</div>

				<p />
			</div>
		</section>
		<section>
			<NewsletterSection />
		</section>
	</div>

	<HomeFooter />
</div>

<style lang="scss">
	:global(*) {
		font-family: 'PT Sans', sans-serif;
		z-index: 1;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
		width: 100%;
		padding-bottom: 1rem;

		.links {
			display: flex;
			flex-direction: row;
			align-items: center;
			column-gap: 1rem;

			li {
				list-style: none;
			}

			a {
				color: var(--color-text-2);
				text-decoration: none;
				opacity: 0.8;
			}
		}
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		column-gap: 0.5rem;

		h1 {
			font-size: 1.6rem;

			span {
				color: var(--color-text-2);
				opacity: 0.8;
			}
		}
	}

	.content {
		width: 100%;
		//max-width: 1200px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		border-radius: var(--border-radius-xlarge);
		//border: 1px solid var(--color-border-2);
		flex: 1;
		overflow: hidden;

		.landing {
			color: var(--color-text-2);
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: relative;
			flex: 1;
			min-height: 60svh;
			overflow: visible;

			.hero {
				margin-top: 0rem;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: flex-start;
				width: 100%;
				//height: 100svh;
				position: absolute;
				overflow: visible;
				height: fit-content;
				flex: 1;
				z-index: 0;
				column-gap: 2rem;
				padding: 1rem;

				//background: radial-gradient(rgba(44, 30, 140, 0.31), #000000);
				//background-color: rgba(44, 30, 140, 0.31);
				border-radius: var(--border-radius-2xlarge);
				//box-shadow: 0 2px 30px 10px rgba(79, 169, 196, 0.77);
				top: 5%;
				transition: all 0.5s ease-in-out;

				@keyframes fade_In_And_Scale {
					0% {
						opacity: 0;
						transform: scale(0.7);
					}
					100% {
						opacity: 1;
						transform: scale(1);
					}
				}

				img {
					animation: fade_In_And_Scale 0.5s ease-in-out;
					max-width: 100%;
					width: 750px;
				}

				h1 {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 2;
					font-size: 4em;
					width: 100%;
					text-align: center;

					//span {
					//	color: var(--color-text-2);
					//	opacity: 0.8;
					//	float: left;
					//	padding: 0 1rem;
					//	display: flex;
					//	width: fit-content;
					//	flex-direction: row;
					//	justify-content: center;
					//	align-items: center;
					//	//position: absolute;
					//
					//	button {
					//		background-color: #4b37cc;
					//		border: none;
					//		border-radius: var(--border-radius-3xlarge);
					//		padding: 0.3rem;
					//		color: var(--color-text-2);
					//		width: 150px;
					//		height: 70px;
					//		font-size: 1.2rem;
					//		font-weight: 600;
					//		cursor: pointer;
					//		transition: all 0.2s ease-in-out;
					//		:hover {
					//			background-color: var(--color-bg-1);
					//			color: var(--color-text-0);
					//		}
					//
					//		> div {
					//			width: 100%;
					//			height: 100%;
					//			display: flex;
					//			justify-content: center;
					//			align-items: center;
					//			border-radius: var(--border-radius-3xlarge);
					//			border: 1px solid #ff6a00;
					//		}
					//	}
					//}
				}
			}

			h2 {
				font-size: 5rem;
				font-weight: 600;
				color: var(--color-text-0);
				margin-bottom: 1rem;
				width: fit-content;
				position: relative;
				text-transform: uppercase;
				//text-align:justify;
				padding: 1rem;
				z-index: 2;
				float: left;

				.text {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					max-width: 100%;
					height: 100%;
					font-size: 1rem;
					//float: right;
					float: right;
					width: 450px;
					text-decoration: underline orange;
				}

				span {
					color: var(--color-text-2);
					opacity: 0.8;
					padding: 1rem;
					float: left;
					display: flex;
					width: fit-content;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					//position: absolute;
					top: 50%;
					//button {
					//	background-color: #4b37cc;
					//	border: none;
					//	border-radius: var(--border-radius-3xlarge);
					//	padding: 0.3rem;
					//	color: var(--color-text-2);
					//	width: 150px;
					//	height: 70px;
					//
					//	font-size: 1.2rem;
					//	font-weight: 600;
					//	cursor: pointer;
					//	transition: all 0.2s ease-in-out;
					//	:hover {
					//		background-color: var(--color-bg-1);
					//		color: var(--color-text-0);
					//	}
					//
					//	> div {
					//		width: 100%;
					//		height: 100%;
					//		display: flex;
					//		justify-content: center;
					//		align-items: center;
					//		border-radius: var(--border-radius-3xlarge);
					//		border: 1px solid #ff6a00;
					//	}
					//}
				}
			}
		}
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0 3rem;
		max-width: 1200px;
		width: 100%;

		:global(p) {
			font-size: 1.8rem;
			font-weight: 400;
			color: #cecece;
			text-align: center;
			max-width: 800px;
		}

		.details-inline {
			padding: 2rem 0;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			width: 100%;

			> div {
				display: flex;
				flex-direction: column;
				align-items: center;

				h3 {
					font-size: 1.2rem;
					padding-bottom: 0.5rem;
					text-align: center;
					text-transform: uppercase;
				}

				> ul {
					padding: 0.5rem;

					li {
						font-size: 1.2rem;
						font-weight: 400;
						color: #cecece;
						max-width: 750px;
						list-style: none;
					}
				}
			}
		}

		.details-col {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 1rem 0 0;
			width: 100%;
			max-width: 1200px;
			column-gap: 1rem;
			row-gap: 1rem;
			flex-wrap: wrap;

			> div {
				width: 100%;
				border-radius: 10rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				//flex-direction: column;

				.row {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: center;
					column-gap: 1rem;
					padding: 1rem;
					background-color: #2a2a33;
				}
			}
		}

		.details {
			max-width: 1200px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			> div {
				width: 300px;
				height: 500px;
				background-color: #2a2a33;
				border-radius: 10rem;
			}
		}
	}

	:global(.header) {
		max-width: 750px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1em;
		:global(h3) {
			font-size: 1.4rem;
			font-weight: 600;
			color: #cecece;
			margin-bottom: 1.5rem;
			text-transform: uppercase;
			z-index: 3;
		}
	}

	.page {
		width: 100svw;
		min-height: 100svh;

		background-color: #030303;
	}
	.landing {
		color: var(--color-text-2);
		display: flex;
		flex-direction: column;
		padding: 0;
		height: 100svh;
		width: 100%;
		overflow: hidden;
		position: relative;
		flex: 1;

		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 0 1rem;
			width: 100%;
			height: 4rem;

			.links {
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 1rem;

				a {
					color: var(--color-text-2);
					text-decoration: none;
					opacity: 0.8;
				}

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
