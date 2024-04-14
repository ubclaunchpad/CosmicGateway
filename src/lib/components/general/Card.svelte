<script lang="ts">
</script>

<div
	class={`card w-full dark:bg-neutral-900 bg-base-100 rounded-lg border border-base-200 dark:border-neutral-800 ${$$props.class} overflow-hidden`}
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
