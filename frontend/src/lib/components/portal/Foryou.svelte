<script lang="ts">
	import UserProjects from './UserProjects.svelte';
</script>

<div class="foryou">
	<UserProjects />
</div>

<style lang="scss">
	.foryou {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 0.4rem;
		width: 100%;
		column-gap: 1.5rem;
	}
</style>
