<script lang="ts">
	export let status: string;
	// const statusColour = getStatusColor(statusId);
	const statusColourMapper = {
		'In Development': '#31346e',
		'Ready for Review': '#fbbf24',
		'Ready for Deployment': '#10b981',
		Deployed: '#3b82f6',
		Cancelled: '#ef4444',
		Completed: '#10b981'
	};
</script>

<div class="project-status">
	<div class="status" style="background-color: {statusColourMapper[status]}">
		<p>{status}</p>
	</div>
</div>

<style lang="scss">
	.project-status {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		.status {
			display: flex;
			justify-content: center;
			align-items: center;
			width: fit-content;
			border-radius: var(--border-radius-medium);
			padding: 0.3rem 0.7rem;
			p {
				font-size: 0.7rem;
				font-weight: 600;
				color: var(--color-text-1);
			}
		}
	}
</style>
