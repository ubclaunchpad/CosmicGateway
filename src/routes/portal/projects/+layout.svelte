<main>
	<!-- <div class="content"> -->
	<slot />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100svh;
		width: 100svw;
		padding: 10px;
		overflow: scroll;
	}
</style>
