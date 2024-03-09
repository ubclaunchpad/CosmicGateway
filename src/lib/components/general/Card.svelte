<script lang="ts">
</script>

<div class={`card w-full bg-base-100 rounded-lg border border-base-200 ${$$props.class}`}>
	<div class="card-body">
		{#if $$slots.title}
			<div class=" flex justify-between items-center pb-4">
				<h2 class="card-title">
					<slot name="title" />
				</h2>
			</div>
		{/if}
		<div class="flex flex-col gap-6 flex-1">
			<slot name="content" />
		</div>
	</div>
</div>
