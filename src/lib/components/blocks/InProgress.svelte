<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="flex flex-col justify-center items-center w-full h-full space-y-4 text-gray-500">
	<h3 class="text-lg font-bold">
		{title}
	</h3>
	<p class="text-sm">
		{description}
	</p>
</div>
