<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="wrapper">
	<h3>
		{title}
	</h3>
	<p>{description}</p>
</div>

<style>
	.wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
		row-gap: 1rem;
		color: var(--color-text-2);
	}

	h3 {
		display: flex;
		column-gap: 10px;
		align-items: center;
	}
</style>
