<script lang="ts">
	import Timeline from './Timeline.svelte';
	import UserProjects from './UserProjects.svelte';

	let mouse = {
		x: 0,
		y: 0
	};

	let glowDiv: HTMLDivElement;
	let divWrapper;
	let horizontalLine: HTMLDivElement;
	let verticalLine: HTMLDivElement;
	function handleMousemove(e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
		glowDiv.style.left = `${
			mouse.x - divWrapper.getBoundingClientRect().left - glowDiv.getBoundingClientRect().width / 2
		}px`;
		glowDiv.style.top = `${
			mouse.y - divWrapper.getBoundingClientRect().top - glowDiv.getBoundingClientRect().height / 2
		}px`;
	}

	function handleMouseleave(e) {
		glowDiv.style.display = 'none';
	}
</script>

<div class="foryou">
	<!-- <section bind:this={divWrapper} on:mousemove={handleMousemove} on:mouseleave={handleMouseleave}>
		<div bind:this={glowDiv} class="glow" />
		<div bind:this={horizontalLine} class="horizontal" />
		<div bind:this={verticalLine} class="vertical" />
		<Timeline />
	</section> -->
	<UserProjects />
</div>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 1rem;
		width: 100%;
		column-gap: 1.5rem;
		background-color: var(--color-bg-0-faded);
		border-radius: 0.5rem;
		height: 40vh;
		position: relative;
		overflow: hidden;

		.glow {
			position: absolute;
			width: 4rem;
			height: 4rem;
			left: -100%;
			border-radius: 0.5rem;
			background-color: var(--color-text-1);
			opacity: 0.4;
			filter: blur(1rem);
			pointer-events: none;
			z-index: 10;
		}

		.horizontal {
			position: absolute;
			width: 100%;
			height: 0.2rem;
			left: 0;
			top: 5px;

			background-color: var(--color-border-2);
			opacity: 0.4;
			pointer-events: none;
			z-index: 20;
		}

		.vertical {
			position: absolute;
			width: 0.2rem;
			height: 100%;
			top: 0;
			left: 5px;

			background-color: var(--color-border-2);
			opacity: 0.4;
			pointer-events: none;
			z-index: 20;
		}
	}
	.foryou {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 0.4rem;
		width: 100%;
		row-gap: 1.5rem;
	}
</style>
