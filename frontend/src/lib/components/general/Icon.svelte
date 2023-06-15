<script lang="ts">
</script>

<div class="icon">
	<div class="icon-wrapper">
		<slot />
	</div>
</div>

<style>
	.icon {
		display: inline-block;
	}

	.icon-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-wrapper > * {
		display: block;
	}

	.icon-wrapper > *:not(:last-child) {
		margin-right: 0.5rem;
	}
</style>
