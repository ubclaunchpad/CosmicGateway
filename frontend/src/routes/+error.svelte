<script lang="ts">
	import { ArrowDoodle } from '$lib/components/general/icons/doodles';
	import galaxy from '$lib/assets/images/galaxy.png';
	import mask from '$lib/assets/images/mask.png';
	import mask2 from '$lib/assets/images/mask2.png';
</script>

<div class="page">
	<section>
		<div>
			<h1>404</h1>
			<h3>Oops seems like this is an unexplored part of the universe.</h3>
		</div>
	</section>

	<div class="stretch">
		<div class="arrow">
			<img src={ArrowDoodle} alt="arrow" />
		</div>

		<a href="/" class="ss">
			<img src={mask} alt="img" class="mask" />
			<img src={mask2} alt="img" class="mask2" />
			<img src={galaxy} alt="img" class="inside" />
		</a>
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		height: 100svh;
		width: 100%;
		font-weight: bold;
		background: var(--color-black);

		.arrow {
			position: absolute;
			right: 0;
			width: 40svw;
			height: 40svh;
			top: 0px;
			right: 0;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		section {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			position: relative;

			width: 100%;
			div {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				gap: 2rem;
				padding: 1rem 1rem;
				opacity: 0.7;
				font-size: 1rem;
				h1 {
					font-size: 5rem;
					color: var(--color-text-0);
					opacity: 0.6;
					margin: 0;
					padding: 0;
					line-height: 1;
					top: 0;
				}
			}
		}

		.stretch {
			position: relative;
			overflow: hidden;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;

			a {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				color: var(--color-text-1);
				width: 35rem;
				height: 35rem;
				overflow: hidden;
				font-size: 2rem;
				font-weight: 600;
				transition: all 0.5s ease-in-out;
				border-radius: 50%;
				border: 4px solid var(--color-border-1);

				&:hover {
					border-color: var(--color-text-0);
				}

				.mask2 {
					animation: move2 10s infinite;

					@keyframes move2 {
						0% {
							transform: scale(1) rotate(-10deg);
						}
						30% {
							transform: scale(1.2) rotate(-40deg);
						}
						60% {
							transform: scale(1.3) rotate(-100deg);
						}
						100% {
							transform: scale(1) rotate(-10deg);
						}
					}
				}

				.mask,
				.mask2 {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center;
					z-index: 2;
					transition: all 0.5s ease-in-out;
				}

				.mask {
					animation: move 15s infinite;

					@keyframes move {
						0% {
							transform: scale(1) rotate(0deg);
						}
						30% {
							transform: scale(1.2) rotate(40deg);
						}
						60% {
							transform: scale(1) rotate(-100deg);
						}
						100% {
							transform: scale(1) rotate(0deg);
						}
					}
				}

				.inside {
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: 1;
					transition: all 0.3s ease-in-out;
					object-fit: cover;
					transition: all 0.5s ease-in-out;

					animation: zoom 15s infinite;

					@keyframes zoom {
						0% {
							transform: scale(1) rotate(0deg);
						}
						30% {
							transform: scale(0.9) rotate(10deg);
						}
						100% {
							transform: scale(1) rotate(0deg);
						}
					}
				}

				&:hover {
					color: var(--color-text-0);
				}
			}
		}
	}
</style>
