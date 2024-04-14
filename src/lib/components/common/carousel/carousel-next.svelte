<script lang="ts">
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import Button from '$lib/components/general/Button.svelte';
	import ArrowRightIcon from '$lib/components/general/icons/ArrowRightIcon.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	// import {
	// 	Button,
	// 	type Props,
	// 	type buttonVariants,
	// } from "$lib/registry/default/ui/button/index.js";

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
	// export let variant: VariantProps<typeof buttonVariants>["variant"] = "outline";
	// export let size: VariantProps<typeof buttonVariants>["size"] = "icon";
	const { orientation, canScrollNext, scrollNext, handleKeyDown } =
		getEmblaContext('<Carousel.Next/>');
</script>

<Button
	class={cn(
		'absolute h-8 w-8 touch-manipulation rounded-full flex flex-col justify-center border-none bg-neutral-500 shadow text-neutral-50',
		$orientation === 'horizontal'
			? '-right-10 top-1/2 -translate-y-1/2'
			: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	disabled={!$canScrollNext}
	on:click={scrollNext}
	on:keydown={handleKeyDown}
	{...$$restProps}
>
	<Icon width="w-4">
		<ArrowRightIcon />
	</Icon>
</Button>
