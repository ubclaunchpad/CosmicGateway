<script>
	import '../styles.scss';
	import '../markdown.scss';
</script>

<main>
	<section class="landing">
		<nav>
			<ul>
				<li><a href="/panel/profile">About Us</a></li>
				<li><a href="#projects">Teams</a></li>
				<li><a href="#projects">Resources</a></li>
			</ul>

			<ul>
				<li><a href="/panel/profile">Portal</a></li>
			</ul>
		</nav>

		<div class="page">
			<div class="tran-wrapper">
				<div class="tran">
					<div class="left" />
					<div class="center" />
					<button>Join Us</button>
					<div class="right" />
				</div>
			</div>
			<section id="hero">
				<h1>UBC Launch Pad</h1>
				<h2>Software Engineering Design Team</h2>
			</section>

			<div class="join-us">
				<div class="wrapper" />

				<div class="inner-wrapper" />
				<div class="content">
					<h4>Join us</h4>
					<p>
						We are a group of students passionate about software engineering. We are always looking
						for new members to join our team. If you are interested in joining, please check out our <a
							href="/signup">join us</a
						> page.
					</p>
					<div>
						<button>See open projects</button>
					</div>
				</div>
			</div>

			<slot />
		</div>
	</section>
</main>

<style lang="scss">
	.join-us {
		display: flex;
		justify-content: center;
		padding: 0.2rem;
		position: relative;
		overflow: hidden;
		border-radius: 3px;
		box-sizing: border-box;
		max-width: 1000px;
		background: var(--color-bg-primary-dark-2);
		color: var(--color-text-0);
		border-radius: 10px;
		z-index: 5;

		.content {
			h4 {
				padding-bottom: 1rem;
				font-size: 1.3rem;
			}

			> div {
				display: flex;
				justify-content: flex-end;
				column-gap: 1rem;
				padding: 0.4rem;
				color: var(--color-text-0);
			}

			button {
				width: fit-content;
				padding: 0.5rem 1rem;
				border-radius: 3px;
				border: none;
				font-size: 1rem;
				background-color: var(--color-bg-primary);
				color: var(--color-text-primary);
				transition: all 0.3s ease-in-out;

				&:hover {
					cursor: pointer;
					transform: translate3d(0, 2px, 0);
				}
			}
			padding: 2rem;
			width: 100%;
			border-radius: 3px;
			z-index: 5;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		.wrapper {
			z-index: 5;
			padding: 3px;
			background-color: var(--color-bg-primary-dark);
			color: var(--color-text-0);
			max-width: 1000px;
			position: absolute;
			width: 5%;
			height: 100%;
			top: 0;
			left: 0;
			// opsacity: 0.7;
			// animation-name: slide;
			animation-duration: 2s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
			animation-fill-mode: backwards;
			transform: translateX(-100%);
		}

		@keyframes slide {
			0% {
				left: 0;

				transform: scaleX(1);
				transform: translateX(-100%);
			}

			50% {
				left: 100%;
				transform: scaleX(1);
			}

			100% {
				left: 0%;
				transform: scaleX(1);
				transform: translateX(-100%);
			}
		}

		.inner-wrapper {
			z-index: 4;
			padding: 3px;
			// background-color: #1e246d70;;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
		}
	}

	.container {
		position: absolute;
		background: transparent;
	}

	main {
		background-color: var(--color-bg-primary-dark);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		height: 100svh;
		overflow-y: hidden;
		padding: 1rem;
		position: relative;

		.tran-wrapper {
			position: absolute;
			top: 0;
			height: 100%;
			z-index: 1;
			background: transparent;
			background-color: var(--color-bg-primary-dark);

			// background: linear-gradient(
			// 	to top right,
			// 	var(--color-bg-primary),
			// 	var(--color-bg-primary-faded),
			// 	var(--color-bg-primary),
			// 	var(--color-bg-primary-faded)
			// );
			.tran {
				width: 500px;
				height: 100%;
				background: inherit;
				position: relative;
				overflow: hidden;
				top: 0;
				z-index: 2;

				button {
					background-color: transparent;
					position: absolute;
					top: 50%;
					left: 50%;
					font-size: 1.3rem;
					font-weight: bold;
					transform: translate(-50%, -50%);
					padding: 0.8rem 1.8rem;
					border-radius: 1.5rem;
					color: var(--color-text-0);
					border: 3px solid var(--color-text-0);
				}

				.left,
				.right {
					position: absolute;
					top: -20px;
					height: calc(100% + 40px);
					border-radius: 50%;
					width: 200px;
					background-color: inherit;
					z-index: 1;
				}

				.center {
					width: 100%;
					height: 100%;
					background: linear-gradient(
						to top right,
						var(--color-bg-primary),
						var(--color-bg-primary-faded),
						var(--color-bg-primary),
						var(--color-bg-primary-faded)
					);
				}

				.left {
					left: 0;
					transform: translateX(-50%);
				}

				.right {
					right: 0;
					transform: translateX(50%);
				}
			}
		}

		.page {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100%;
			row-gap: 1rem;

			#hero {
				min-height: 60svh;
				z-index: 2;
			}
		}

		.landing {
			width: 90rem;
			max-width: 100%;
			height: 100%;
			z-index: 5;
			// background-color: var(--color-bg-1);
			border-radius: 10px;

			* {
				color: var(--color-text-0-light);
			}

			h1 {
				font-size: 6rem;
				font-weight: bold;
				padding: 2rem 0;
				background: linear-gradient(
					to right,
					var(--color-text-1-light),
					var(--color-text-0-light),
					var(--color-text-1-light)
				);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}

			.card {
				padding: 1rem;
				/* Rectangle 1 */
				width: 100%;
				height: 565px;

				background: radial-gradient(
						101.95% 297.79% at 0% 1.33%,
						rgba(226, 10, 10, 0.842) 0%,
						rgba(245, 5, 5, 0.914) 100%
					)
					/* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
				border-radius: 10px;
			}
		}

		nav {
			padding: 2rem;
			position: sticky;
			z-index: 100000;
			min-height: 4rem;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			top: 0;
			color: var(--color-text-0-light);

			// background-color: var(--color-bg-primary-dark);
			// border-bottom: 1px solid var(--color-bg-1);

			h1 {
				flex: 1;
				padding: 1rem 0;
			}

			ul {
				display: flex;
				column-gap: 1.5rem;
				align-items: start;

				li {
					list-style: none;
					text-align: left;
					color: var(--color-text-0-light);

					a {
						color: var(--color-text-0-light);
						text-decoration: none;
						font-weight: bold;
						&:hover {
							// color: $color-primary;
						}
					}
				}
			}
		}

		footer {
			display: flex;
			width: 100%;
			justify-content: center;
			// border-top: 2px solid $base-color-1;
			padding: 1rem;
		}
	}
</style>
