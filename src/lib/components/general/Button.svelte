<script lang="ts">
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
			' text-white min-w-16 w-fit px-2 py-1 border bg-primary-500 rounded text-sm hover:bg-primary-200 dark:border-primary-500',
		danger:
			' text-white min-w-16 w-fit px-2 py-1 border bg-red-500 rounded text-sm hover:bg-danger-200 dark:border-red-500',
		secondary:
			'  min-w-16 w-fit px-2 py-1 border  rounded text-sm hover:bg-secondary-200 dark:border-secondary-500 border-neutral-200'
	};
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...$$restProps}
	class={`button ${$$restProps.class} ${btnStyles[variant]}`}
>
	<slot />
</button>
