<script lang="ts">
</script>

<div class="modal-wrapper">
	<div class="modal">
		<input type="text" placeholder="Search" />
	</div>
</div>

<style lang="scss">
	.modal-wrapper {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: radial-gradient(ellipse at center, #1b273580 0%, #090a0fcd 100%);
	}

	.modal {
		width: 50rem;
		height: 40rem;

		background-color: var(--color-bg-1);
		background: linear-gradient(to top right, var(--color-bg-1) 0%, var(--color-bg-0) 100%);
		border-radius: 0.4rem;
		overflow: hidden;

		input {
			width: 100%;
			height: 4rem;
			border: none;
			border-radius: 0;
			padding: 0.5rem 1rem;
			font-size: 1.2rem;
			background-color: var(--color-bg-primary-faded);
			color: var(--color-text-0);
		}
	}
</style>
