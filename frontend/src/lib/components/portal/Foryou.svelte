<script lang="ts">
	import UserProjects from './UserProjects.svelte';


</script>

<div class="foryou">
	<div class="banner">
		<p>
			Welcome to your dashboard. Here you can see your projects, your timeline, and your progress.
		</p>
	</div>

	<UserProjects />
</div>

<style lang="scss">
	.banner {
		padding: 1rem;
		width: 100%;
		background-color: var(--color-bg-primary);
		border-radius: 5px;
		p {
			font-size: 1rem;
			color: var(--color-text-1);
		}
	}
	
	.foryou {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 0.4rem;
		width: 100%;
		row-gap: 1.5rem;
	}
</style>
