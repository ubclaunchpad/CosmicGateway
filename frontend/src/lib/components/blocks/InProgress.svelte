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

	.info {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 0.7rem 0.9rem;
		row-gap: 10px;
		border: 1px solid var(--color-bg-1);
		border-radius: 6px;
	}
</style>
