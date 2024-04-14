<script lang="ts">
	import type { VariantProps } from 'tailwind-variants';
	import { getEmblaContext } from './context';
	import { cn } from '$lib/utils';
	import Button from '$lib/components/general/Button.svelte';
	import ArrowRightIcon from '$lib/components/general/icons/ArrowRightIcon.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import ArrowLeftIcon from '$lib/components/general/icons/ArrowLeftIcon.svelte';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
	// export let variant: VariantProps<typeof buttonVariants>["variant"] = "outline";
	// export let size: VariantProps<typeof buttonVariants>["size"] = "icon";

	const { orientation, canScrollPrev, scrollPrev, handleKeyDown } =
		getEmblaContext('<Carousel.Previous/>');
</script>

<Button
	class={cn(
		'absolute h-8 w-8 touch-manipulation rounded-full flex flex-col justify-center border-none bg-neutral-500 shadow text-neutral-50',
		$orientation === 'horizontal'
			? '-left-10 top-1/2 -translate-y-1/2'
			: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	disabled={!$canScrollPrev}
	on:click={scrollPrev}
	{...$$restProps}
>
	<Icon width="w-4">
		<ArrowLeftIcon />
	</Icon>

	<span class={cn('sr-only', 'margin-0')}>Previous slide</span>
</Button>

<!-- on:keydown={handleKeyDown} -->
