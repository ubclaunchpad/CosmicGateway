<script lang="ts">
	import { PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import type { ProjectInfo } from '../../../seed/projects';
	import { userStore } from '../../../stores/auth';
	import Loader from '../blocks/Loader.svelte';
	import ProjectCard from '../projects/ProjectCard.svelte';
	let userProjects: ProjectInfo[] = [];

	const fetchUserProjects = async () => {
		const userId = $userStore?.userId;

		const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects?userIds=${userId}`);
		userProjects = (await res.json()) as ProjectInfo[];
	};

	$: if ($userStore && $userStore.userId) {
		fetchUserProjects();
	}
</script>

<section>
	<div class="topbar header">
		<h2>Your Projects</h2>
	</div>

	<div class="projects">
		{#if userProjects.length === 0}
			<Loader width={'100%'} height={'100%'} />
		{:else}
			{#each userProjects as project}
				<ProjectCard {project} />
			{/each}
		{/if}
	</div>
</section>

<style lang="scss">
	section {
		justify-content: space-between;
		flex-direction: column;
		display: flex;
		row-gap: 0.5rem;
		padding-top: 1rem;
		h2 {
			font-size: 1.3rem;
			font-weight: 600;
			color: var(--color-text-1);
		}
		flex: 1;
		width: 100%;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 0rem 0;
		gap: 0.2rem;
		font-size: 0.7rem;
		flex-wrap: wrap;
		flex: 1;
		> button {
			padding: 0.3rem;
			border-radius: 4px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.projects {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
		gap: 1rem;
	}
	.project {
		display: flex;
		flex-direction: column;
		// width: 100%;
		box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		h3 {
			font-size: 1rem;
			font-weight: 600;
			color: var(--color-text-0);
			width: fit-content;
		}

		.members {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			padding: 0;
			gap: 0.5rem;
			// p {
			// 	font-size: 0.8rem;
			// 	font-weight: 500;
			// 	color: var(--color-text-1);
			// 	background-color: var(--color-bg-1);
			// 	padding: 0.2rem 0.5rem;
			// 	border-radius: 4px;
			// }
		}
	}

	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		row-gap: 10px;
		padding: 0rem 0 10px;
		h3 {
			font-size: 1rem;
			font-weight: 600;
			color: var(--color-text-1);
			width: fit-content;
		}
	}

	.header {
		&.topbar {
			border-bottom: 1px solid var(--color-bg-1);
		}
		&.wrapper {
			justify-content: flex-start;
			padding-bottom: 1rem;

			button {
				background-color: var(--color-bg-1);
				padding: 0.5rem;
				border-radius: 0.1rem;
				column-gap: 0.5rem;

				img {
					width: 18px;
				}
			}
		}
	}
</style>
