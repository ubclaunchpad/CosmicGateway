<script lang="ts">
	import UserProjects from './UserProjects.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
</script>

<div class="for-you">
	<Info>
		<h3>In Progress</h3>
		<p>
			we are working on a new feature that will allow you to see the projects you are currently
			working on.
		</p>
	</Info>
	<UserProjects />
</div>

<style lang="scss">
	.for-you {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 2rem 1rem;
		width: 100%;
		flex: 1;
		row-gap: 1.5rem;
	}
</style>
