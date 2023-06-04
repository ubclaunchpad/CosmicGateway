<script lang="ts">
	import { getStatusColor } from '$lib/util/statusColours';
	import { PROJECT_STATUS } from '../../../seed/util';
	export let statusId: number;
	let projectStatus = {} as (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];
	if (Object.keys(PROJECT_STATUS).includes(statusId.toString())) {
		projectStatus = PROJECT_STATUS[statusId as unknown as keyof typeof PROJECT_STATUS];
	}
	const statusColour = getStatusColor(statusId);
</script>

<div class="project-status">
	<div class="status" style="background-color: {statusColour}">
		<p>{projectStatus.status}</p>
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
			border-radius: 0.5rem;
			padding: 0.3rem 0.5rem;
			p {
				font-size: 0.7rem;
				font-weight: 600;
				color: var(--color-text-1);
			}
		}
	}
</style>
