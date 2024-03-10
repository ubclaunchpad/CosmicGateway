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
			' text-white min-w-16 w-fit px-2 py-1 border bg-primary-500 rounded text-sm hover:bg-primary-200 dark:border-primary-500'
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
