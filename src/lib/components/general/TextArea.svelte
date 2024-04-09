<script lang="ts">
	const style = 'border border-base-200 rounded-md dark:border-neutral-700';
	export let value: string;
</script>

<textarea
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	bind:value
	{...$$restProps}
	class={`input ${style} ${$$restProps.class}`}
/>
