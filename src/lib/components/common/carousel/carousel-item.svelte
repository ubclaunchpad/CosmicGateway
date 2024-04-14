<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: string | undefined | null = undefined;
	export { className as class };

	const { orientation } = getEmblaContext('<Carousel.Item/>');
	let hoverContainer;

	let parent;
</script>

<div
	role="group"
	aria-roledescription="slide"
	class={cn(
		'min-w-0 shrink-0 grow-0 basis-full relative overflow-hidden rounded-lg',
		$orientation === 'horizontal' ? 'pl-4' : 'pt-4',
		className
	)}
	bind:this={parent}
	data-embla-slide=""
	{...$$restProps}
	on:mouseenter={(e) => {
		hoverContainer.style.width = '40px';
		hoverContainer.style.height = '40px';
		hoverContainer.style.left = '50%';
		hoverContainer.style.top = '50%';
		hoverContainer.style.transform = 'translate(-50%, -50%)';
		hoverContainer.classList.remove('radial');
		const parentRect = parent.getBoundingClientRect();
		hoverContainer.style.left = `${e.clientX - parentRect.left}px`;
		hoverContainer.style.top = `${e.clientY - parentRect.top}px`;
		const scaleX = parentRect.width;
		const scaleY = parentRect.height;
		const scale = Math.sqrt(scaleX * scaleX + scaleY * scaleY) * 2;
		hoverContainer.style.width = `${scaleX * 2}px`;
		hoverContainer.style.height = `${scaleY * 2}px`;
		hoverContainer.classList.add('radial');
	}}
	on:mousemove={(e) => {
		const parentRect = parent.getBoundingClientRect();

		hoverContainer.style.left = `${e.clientX - parentRect.left}px`;
		hoverContainer.style.top = `${e.clientY - parentRect.top}px`;
		// console.log('mousemove', e.clientX, e.clientY, parentRect.left, parentRect.top);
	}}
	on:mouseleave={() => {
		hoverContainer.style.width = '40px';
		hoverContainer.style.height = '40px';
		hoverContainer.style.left = '50%';
		hoverContainer.style.top = '50%';
		hoverContainer.style.transform = 'translate(-50%, -50%)';
		hoverContainer.classList.remove('radial');
	}}
>
	<div
		class="absolute w-full h-full bg-opacity-50 z-40 rounded-lg overflow-hidden pointer-events-none"
	>
		<div
			class="absolute rounded-full inset-0 w-10 h-10 z-20 transform pointer-events-none -translate-x-1/2 def ease-in-out"
			bind:this={hoverContainer}
		></div>
	</div>

	<slot />
</div>

<style lang="scss">
	.radial {
		opacity: 0.4;
		background: radial-gradient(circle, rgb(221, 224, 255) 0.02%, rgba(255, 255, 255, 0.692));
	}
	.def {
		// background: rgba(255, 255, 255, 0.5);

		transition:
			width 0.8s ease-out,
			height 0.8s ease-out;
	}
</style>
