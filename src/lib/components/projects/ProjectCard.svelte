<script lang="ts">
	import ProjectStatusIndicator from './ProjectStatusIndicator.svelte';
	import {
		FigmaIcon,
		GithubIcon,
		LinkIcon,
		YoutubeIcon,
		AsterickIcon
	} from '$lib/components/general/icons';
	import ProjectModal from '$lib/components/projects/ProjectModal.svelte';
	export let project;
	let showProject = false;
	const resourceIconMapper = {
		Github: GithubIcon,
		Figma: FigmaIcon,
		Link: LinkIcon,
		Other: AsterickIcon,
		Website: LinkIcon,
		Youtube: YoutubeIcon
	};
</script>

<div class="project">
	<div class="project-content">
		<div class="topbar">
			<h3>{project.title}</h3>
			<ProjectStatusIndicator status={project.status} />
		</div>
		<div class="info">
			<p>{project.description}</p>
		</div>

		<div class="resources">
			{#if !project.resources}
				<p>No resources available</p>
			{:else}
				{#each project.resources as resource}
					<a href={resource.link} target="_blank">
						<svelte:component this={resourceIconMapper[resource.type]} />
						<p>{resource.type}</p>
					</a>
				{/each}
			{/if}
		</div>
		<div class="refs">
			<!--			<button-->
			<!--				on:click={() => {-->
			<!--					showProject = true;-->
			<!--					console.log('ss');-->
			<!--				}}-->
			<!--			>-->
			<!--				<p>Learn more</p>-->
			<!--			</button>-->
		</div>
	</div>
</div>

<ProjectModal
	{project}
	on:modalevent={(e) => {
		showProject = false;
	}}
	isOpen={showProject}
/>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		height: 15rem;
		width: 100%;
		transition: all 0.3s ease-in-out;
		border-radius: 4px;
		border: 1px solid var(--color-border-2);
		background-color: var(--color-bg-2);
		&:hover {
			box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
		}
		//.banner {
		//	height: 40%;
		//	width: 100%;
		//	position: absolute;
		//	top: 0;
		//	left: 0;
		//	z-index: 3;
		//	opacity: 0.4;
		//	//background: linear-gradient(to top right, var(--color-bg-3), var(--color-bg-primary));
		//}

		.project-content {
			padding: 1rem 2rem;
		}
		h3 {
			font-size: 0.9rem;
			font-weight: 600;
			color: var(--color-text-0);
			width: fit-content;
		}

		.topbar {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			row-gap: 10px;
			padding: 0 0 10px;
			h3 {
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-text-1);
				width: fit-content;
			}
		}

		.info {
			p {
				border-bottom: 1px solid var(--color-bg-1);
				border-top: 1px solid var(--color-bg-1);
				display: block; /* or inline-block */
				text-overflow: ellipsis;
				word-wrap: break-word;
				overflow: hidden;
				height: 6rem;
				padding: 0.3rem 0;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1; /* number of lines to show */
			}
		}

		p {
			font-size: 0.8rem;
			font-weight: 500;
			color: var(--color-text-1);
		}

		.resources {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: nowrap;
			overflow-x: scroll;
			gap: 10px;
			padding: 10px 0;
			a {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: 5px;
				text-decoration: none;
				color: var(--color-text-1);
				font-size: 0.6rem;
				padding: 0.3rem;
				border-radius: var(--border-radius-small);
				border: 1px solid transparent;
				background-color: var(--color-bg-1);
				&:hover {
					border-color: var(--color-border-2);
				}
			}
		}
	}
</style>
