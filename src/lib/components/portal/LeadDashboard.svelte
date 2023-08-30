<script lang="ts">
	import { onMount } from 'svelte';
	import NewProjectModal from '$lib/components/portal/NewProjectModal.svelte';
	import { userStore } from '../../../stores/auth';
	import { PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import DashboardProject from '$lib/components/portal/DashboardProject.svelte';
	let projects = [];
	let showNewProjectModal = false;

	const fetchProjects = async () => {
		const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects?person_id=${$userStore?.id}`);
		const data = await res.json();
		projects = data;
		projects = [
			{
				title: 'Project rwgwglknmlkn1',
				description:
					'Lorem eflkemlknipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
				start_date: '',
				end_date: '',
				status: 'In Development',
				team_size: 5,
				members: [
					{ role: 'Tech lead', name: 'Jack' },
					{ role: 'Tech lead', name: 'Jack' },
					{ role: 'Tech lead', name: 'Jack' },
					{ role: 'Tech lead', name: 'Jack' }
				],
				resources: [
					{
						type: 'Github',
						link: 'https://github.com'
					},
					{
						type: 'Figma',
						link: 'https://figma.com'
					}
				]
			}
		];
	};

	onMount(() => {
		fetchProjects();
	});
</script>

<NewProjectModal
	bind:isOpen={showNewProjectModal}
	on:modalevent={(e) => {
		showNewProjectModal = false;
	}}
/>

<div class="project-section">
	<div class="top">
		<h4>Your Project</h4>
		<button on:click={() => (showNewProjectModal = true)}>New project</button>
	</div>

	<div class="project">
		{#each projects as project}
			<DashboardProject {project} />
		{/each}
	</div>
</div>

<style lang="scss">
	.project-section {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		height: 100%;

		.project {
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0.9rem 0;
			row-gap: 0.5rem;
			width: 100%;
			height: 100%;
		}

		button {
			background-color: var(--color-bg-2);
			padding: 0.5rem;
			border-radius: var(--border-radius-medium);
			color: var(--color-text-1);
		}
	}

	.top {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}
</style>
