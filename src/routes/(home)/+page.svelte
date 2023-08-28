<script lang="ts">
	import TeamWorkflow from '$lib/components/home/TeamWorkflow.svelte';
	import HomeFooter from '$lib/components/home/HomeFooter.svelte';
	import StatsSection from '$lib/components/home/StatsSection.svelte';
	import NewsletterSection from '$lib/components/home/NewsletterSection.svelte';
	import RoleSection from '$lib/components/home/RoleSection.svelte';
	import Navbar from '$lib/components/home/Navbar.svelte';
	import rocket from '$lib/assets/temp3.png';
	import Sponsors from '$lib/components/home/Sponsors.svelte';
	let scrollY = 0;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<svelte:window bind:scrollY />
<div class="page">
	<Navbar />
	<div id="bg1" />

	<div class="landing">
		<div class="landing-content">
			<div class="intro">
				<h1 id="about">UBC Launch Pad</h1>
				<span>
					<span class="annotate">A student-run software engineering team</span> devoted to building software
					projects in a collaborative and professional environment
				</span>
			</div>

			<div class="hero">
				<img src={rocket} alt="hero" />
			</div>
		</div>
	</div>
	<section />
	<div class="content">
		<!--		<StatsSection />-->
		<section id="opportunities">
			<RoleSection />
		</section>
		<section>
			<div class="header">
				<h3>Collaboration</h3>
				<p>
					At our core we value <span class="annotate"
						>building foundational relationships and collaborating</span
					> with each other
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
			<section id="sponsors-and-partners">
				<div class="header">
					<h3>Sponsors and Partners</h3>
					<p>
						We actively work with companies and non-profits to build software that aims to
						<span class="annotate">solve real-world problems</span>
					</p>
				</div>

				<div class="details-row">
					<div>
						<Sponsors />
					</div>

					<p />
				</div>
				<div class="header">
					<p>
						These are some of the benefits of partnering with us.
						<span class="annotate">Contact us for more information</span>
					</p>
				</div>
			</section>
			<NewsletterSection />
		</section>
	</div>

	<HomeFooter />
</div>

<style lang="scss">
	:global(*) {
		font-family: 'Exo', sans-serif;
	}

	:global(.annotate) {
		text-decoration: underline wavy #95b8ff;
		-webkit-text-decoration: underline wavy #95b8ff; /* Safari, older versions of Chrome */
		-moz-text-decoration: underline wavy #95b8ff; /* Firefox */
		-o-text-decoration: underline wavy #95b8ff; /* Opera */
		-ms-text-decoration: underline wavy #95b8ff;
	}

	.landing {
		color: var(--color-text-2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 90svh;
		max-height: 100svh;
		width: 100svw;
		flex: 1;
		position: relative;
	}
	.landing-content {
		color: var(--color-text-2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100svw;
		height: 100%;
		overflow: visible;
		position: relative;
		flex: 1;

		.intro {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			padding: 1rem;

			h1 {
				font-size: 3rem;
				font-weight: 600;
				text-align: left;
				margin-bottom: 1rem;
				z-index: 3;
				padding: 1rem;
				vertical-align: middle;
				height: 10rem;
				text-transform: uppercase;
			}

			span {
				font-size: 1.5rem;
				font-weight: 400;
				color: rgba(206, 206, 206, 0.81);
				text-align: left;
				max-width: 550px;
				z-index: 3;
			}
		}

		.hero {
			margin: 0;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			height: 100%;
			z-index: 2;
			overflow: hidden;

			img {
				object-fit: contain;
				z-index: 2;
				width: 100%;
			}

			@media screen and (max-width: 1200px) {
				position: absolute;
			}
		}
	}

	#bg1 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100svw;
		height: 100svh;
		background-color: hsla(0, 0%, 5%, 1);
		background-image: radial-gradient(at 66% 17%, hsla(227, 92%, 17%, 0.14) 0px, transparent 50%),
			radial-gradient(at 80% 50%, hsla(340, 0%, 0%, 1) 0px, transparent 50%),
			radial-gradient(at 21% 30%, hsla(219, 50%, 54%, 0.4) 0px, transparent 50%),
			radial-gradient(at 56% 91%, hsla(240, 0%, 0%, 1) 0px, transparent 50%),
			radial-gradient(at 18% 8%, hsla(240, 100%, 24%, 0.56) 0px, transparent 50%),
			radial-gradient(at 30% 98%, hsla(0, 0%, 0%, 0.91) 0px, transparent 50%),
			radial-gradient(at 20% 66%, hsla(201, 42%, 28%, 0.47) 0px, transparent 50%);
		opacity: 0.9;
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
