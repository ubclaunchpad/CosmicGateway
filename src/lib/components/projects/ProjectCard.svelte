<!--<script lang="ts">-->
<!--	import type { ProjectInfo } from '../../../seed/projects';-->
<!--	import ProjectStatusIndicator from './ProjectStatusIndicator.svelte';-->
<!--	export let project: ProjectInfo;-->

<!--	// const resourceIconMapper = {-->
<!--	// 	Github: GithubIcon,-->
<!--	// 	Figma: FigmaIcon,-->
<!--	// 	Link: linkIcon,-->
<!--	// 	Other: asterickIcon,-->
<!--	// 	Website: linkIcon,-->
<!--	// 	Youtube: YoutubeIcon-->
<!--	// };-->
<!--</script>-->

<!--<div class="project">-->
<!--	<div class="banner" />-->
<!--	<div class="project-content">-->
<!--		<div class="topbar">-->
<!--			<h3>{project.name}</h3>-->
<!--			<ProjectStatusIndicator statusId={project.statusId} />-->
<!--		</div>-->
<!--		<div class="info">-->
<!--			<p>{project.description}</p>-->
<!--		</div>-->

<!--		<div class="resources">-->
<!--			{#each project.resources as resource}-->
<!--				<a href={resource.link} target="_blank">-->
<!--					&lt;!&ndash; <img src={resourceIconMapper[resource.typeId]} alt={resource.name} /> &ndash;&gt;-->
<!--					<p>{resource.name}</p>-->
<!--				</a>-->
<!--			{/each}-->
<!--		</div>-->
<!--		<div class="refs">-->
<!--			<a href={`/projects/directory/${project.id}-${project.name.replace(' ', '-').toLowerCase()}`}>-->
<!--				<p>Learn more</p>-->
<!--			</a>-->
<!--		</div>-->
<!--	</div>-->
<!--</div>-->

<!--<style lang="scss">-->
<!--	.project {-->
<!--		display: flex;-->
<!--		flex-direction: column;-->
<!--		justify-content: flex-start;-->
<!--		position: relative;-->
<!--		height: 18rem;-->
<!--		max-width: 100%;-->
<!--		transition: all 0.3s ease-in-out;-->
<!--		border-radius: 4px;-->
<!--		border: 1px solid var(&#45;&#45;color-border-1);-->
<!--		background-color: var(&#45;&#45;color-bg-1);-->
<!--		&:hover {-->
<!--			box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);-->
<!--			// border-color: var(&#45;&#45;color-text-1);-->
<!--		}-->
<!--		.banner {-->
<!--			height: 40%;-->
<!--			width: 100%;-->
<!--			position: absolute;-->
<!--			top: 0;-->
<!--			left: 0;-->
<!--			z-index: -1;-->
<!--			background: linear-gradient(to top right, var(&#45;&#45;color-bg-1), var(&#45;&#45;color-bg-1));-->
<!--		}-->

<!--		.project-content {-->
<!--			padding: 1rem 2rem;-->
<!--		}-->
<!--		h3 {-->
<!--			font-size: 0.9rem;-->
<!--			font-weight: 600;-->
<!--			color: var(&#45;&#45;color-text-0);-->
<!--			width: fit-content;-->
<!--		}-->

<!--		.topbar {-->
<!--			display: flex;-->
<!--			flex-direction: row;-->
<!--			justify-content: space-between;-->
<!--			align-items: center;-->
<!--			width: 100%;-->
<!--			row-gap: 10px;-->
<!--			padding: 0rem 0 10px;-->
<!--			h3 {-->
<!--				font-size: 1rem;-->
<!--				font-weight: 600;-->
<!--				color: var(&#45;&#45;color-text-1);-->
<!--				width: fit-content;-->
<!--			}-->
<!--		}-->

<!--		.info {-->
<!--			p {-->
<!--				border-bottom: 1px solid var(&#45;&#45;color-bg-1);-->
<!--				border-top: 1px solid var(&#45;&#45;color-bg-1);-->
<!--				display: block; /* or inline-block */-->
<!--				text-overflow: ellipsis;-->
<!--				word-wrap: break-word;-->
<!--				overflow: hidden;-->
<!--				height: 4rem;-->
<!--				padding: 0.3rem 0;-->
<!--				text-overflow: ellipsis;-->
<!--				display: -webkit-box;-->
<!--				-webkit-box-orient: vertical;-->
<!--				-webkit-line-clamp: 1; /* number of lines to show */-->
<!--			}-->
<!--		}-->

<!--		p {-->
<!--			font-size: 0.8rem;-->
<!--			font-weight: 500;-->
<!--			color: var(&#45;&#45;color-text-1);-->
<!--		}-->

<!--		.resources {-->
<!--			display: flex;-->
<!--			flex-direction: row;-->
<!--			justify-content: flex-start;-->
<!--			align-items: center;-->
<!--			flex-wrap: nowrap;-->
<!--			overflow-x: scroll;-->
<!--			height: 4rem;-->
<!--			gap: 10px;-->
<!--			padding: 10px 0;-->
<!--			a {-->
<!--				display: flex;-->
<!--				flex-direction: row;-->
<!--				justify-content: center;-->
<!--				align-items: center;-->
<!--				gap: 5px;-->
<!--				text-decoration: none;-->
<!--				color: var(&#45;&#45;color-text-1);-->
<!--				font-size: 0.8rem;-->
<!--				padding: 0.3rem;-->
<!--				border-radius: 4px;-->
<!--				border: 2px solid transparent;-->
<!--				font-weight: 500;-->
<!--				img {-->
<!--					height: 1rem;-->
<!--				}-->
<!--				background-color: var(&#45;&#45;color-bg-1);-->
<!--				&:hover {-->
<!--					border-color: var(&#45;&#45;color-text-1);-->
<!--				}-->
<!--			}-->
<!--		}-->
<!--	}-->
<!--</style>-->
