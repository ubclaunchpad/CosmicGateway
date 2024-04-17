<script lang="ts">
	import { cn } from '$lib/utils';
	const { class: classN, otherProps } = $$props;
</script>

<div
	{...otherProps}
	class={cn(
		`card w-full dark:bg-[#1b1b1b] bg-neutral-50 rounded-md border border-neutral-200 dark:shadow-none dark:border-neutral-800 overflow-hidden`,
		$$props.class
	)}
>
	<div class={$$props.contentClass ? $$props.contentClass : 'p-4 flex flex-col gap-5 flex-1'}>
		{#if $$slots.title}
			<div class=" flex justify-between items-center pb-4 w-full">
				<slot name="title" />
			</div>
		{/if}
		<div class="flex flex-col gap-6 flex-1">
			<slot name="content" />
		</div>
	</div>
</div>
