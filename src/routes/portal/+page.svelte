<script lang="ts">
	import Foryou from '$lib/components/portal/Foryou.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
</script>

<MainPage>
	<div slot="main" class="content">
		<h1>Dashboard</h1>
		<Foryou />
	</div>
</MainPage>

<style lang="scss">
	h1 {
		padding-bottom: 0;
	}
	div {
		display: flex;
		flex-direction: column;
	}
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		border-radius: 10px;
		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		overflow: scroll;
	}
</style>
