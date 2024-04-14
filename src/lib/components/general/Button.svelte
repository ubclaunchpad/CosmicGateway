<script lang="ts">
	import { cn } from '$lib/utils';

	type Variant =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'danger'
		| 'warning'
		| 'success'
		| 'info'
		| 'light'
		| 'dark'
		| 'link';

	export let variant: Variant = 'primary';

	const btnStyles = {
		primary:
			' text-white w-fit px-2 py-1 border bg-primary-500 rounded text-sm hover:bg-primary-200 dark:border-primary-500',
		danger:
			' text-white  w-fit px-2 py-1 border bg-red-500 rounded text-sm hover:bg-danger-200 dark:border-red-500',
		secondary:
			'   w-fit px-2 py-1 border  rounded text-sm hover:bg-secondary-200 dark:border-secondary-500 border-neutral-200'
	};
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	class={cn('button', `${btnStyles[variant]}`, `${$$restProps.class} `)}
>
	<slot />
</button>
