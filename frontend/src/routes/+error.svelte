<script lang="ts">
	import { ArrowDoodle } from '$lib/components/general/icons/doodles';
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
			<img src={ArrowDoodle} />
		</div>

		<a href="/"> Take me home </a>
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		height: 100svh;
		width: 100%;
		font-weight: bold;
		background: radial-gradient(
			ellipse at center,
			var(--color-bg-secondary-faded) 0%,
			var(--color-bg-primary-faded) 100%
		);

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
				width: 20rem;
				height: 20rem;
				border-radius: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				text-decoration: none;
				background-color: var(--color-border-2);
				color: var(--color-text-1);
				font-size: 2rem;
				font-weight: 600;
				transition: all 0.3s ease-in-out;
				&:hover {
					transform: scale(1.1);
					box-shadow: 0 0 0 1rem var(--color-bg-0);
					color: var(--color-text-0);
				}
			}
		}
	}
</style>
