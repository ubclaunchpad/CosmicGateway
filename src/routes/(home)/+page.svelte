<script lang="ts">
	import TeamWorkflow from '$lib/components/home/TeamWorkflow.svelte';
	import HomeFooter from '$lib/components/home/HomeFooter.svelte';
	import StatsSection from '$lib/components/home/StatsSection.svelte';
	import NewsletterSection from '$lib/components/home/NewsletterSection.svelte';
	import RoleSection from '$lib/components/home/RoleSection.svelte';
	import Navbar from '$lib/components/home/Navbar.svelte';
	import rocket from '$lib/assets/temp2.png';
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<div class="page">
	<div class="content">
		<div class="landing">
			<Navbar />
			<div class="landing-content">
				<div class="intro">
					<h1 id="about">UBC Launch Pad</h1>
					<span>
						a student-run software engineering team devoted to building software projects in a
						collaborative and professional environment
					</span>
				</div>

				<div class="hero">
					<img src={rocket} alt="hero" />
				</div>
			</div>
		</div>

		<StatsSection />
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
	}
	.content {
		width: 100%;
		height: 100%;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
		overflow: hidden;

		.landing {
			color: var(--color-text-2);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			height: 80svh;
			width: 100svw;
			position: relative;
			flex: 1;
			overflow: scroll;
			background-color: hsla(240, 0%, 0%, 1);
			background-image: radial-gradient(at 15% 27%, hsla(218, 0%, 0%, 0.18) 0px, transparent 50%),
				radial-gradient(at 96% 75%, hsla(219, 0%, 5%, 1) 0px, transparent 50%),
				radial-gradient(at 47% 3%, hsla(220, 0%, 0%, 1) 0px, transparent 50%),
				radial-gradient(at 80% 40%, hsla(227, 0%, 0%, 1) 0px, transparent 50%),
				radial-gradient(at 45% 0%, hsla(227, 18%, 12%, 1) 0px, transparent 50%),
				radial-gradient(at 84% 91%, hsla(240, 3%, 11%, 1) 0px, transparent 50%),
				radial-gradient(at 13% 91%, hsla(240, 3%, 11%, 1) 0px, transparent 50%),
				radial-gradient(at 4% 9%, hsla(226, 100%, 75%, 0.47) 0px, transparent 50%);
		}
		.landing-content {
			color: var(--color-text-2);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			width: 100svw;
			position: relative;
			flex: 1;

			.intro {
				display: flex;
				flex-direction: column;
				justify-content: center;

				align-items: center;

				h1 {
					font-size: 4rem;
					font-weight: 700;
					color: #cecece;
					text-align: center;
					margin-bottom: 1rem;
					z-index: 3;
				}

				span {
					font-size: 2rem;
					font-weight: 400;
					color: #cecece;
					text-align: center;
					max-width: 800px;
					z-index: 3;
				}
			}

			.hero {
				margin-top: 0;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				height: 100%;
				flex: 1;
				z-index: 2;
				column-gap: 2rem;

				@media screen and (max-width: 1200px) {
					position: absolute;
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
		background-color: var(--color-black-1);
	}
</style>
