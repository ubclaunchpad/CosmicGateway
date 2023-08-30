<!-- <script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import type { ProjectInfo } from '../../../seed/projects';
	import ProjectStatusIndicator from './ProjectStatusIndicator.svelte';
	import MemberIndicator from './MemberIndicator.svelte';
	import { PUBLIC_POSTING_API_URI } from '$env/static/public';
	export let project: ProjectInfo;
	let postings = [];
	const dispatch = createEventDispatcher();
	function application(postingid, body) {
		console.log(postingid);
		dispatch('message', {
			postingid: postingid,
			body: body
		});
	}

	// const resourceIconMapper = {
	// 	Github: GithubIcon,
	// 	Figma: FigmaIcon,
	// 	Link: linkIcon,
	// 	Other: asterickIcon,
	// 	Website: linkIcon,
	// 	Youtube: YoutubeIcon
	// };

	const fetchPostings = async () => {
		const res = await fetch(`${PUBLIC_POSTING_API_URI}/postings?projectId=${project.id}`);
		postings = await res.json();
	};

	onMount(async () => {
		await fetchPostings();
	});
</script>

<div class="project">
	<div class="topbar">
		<h3>Overview</h3>
	</div>
	<div class="topbar">
		<h4>{project.name}</h4>
		<ProjectStatusIndicator statusId={project.statusId} />
	</div>

	<div class="resources">
		{#each project.resources as resource}
			<a href={resource.link} target="_blank">
				<!== <img src={resourceIconMapper[resource.typeId]} alt={resource.name} /> ==>
				<p>{resource.name}</p>
			</a>
		{/each}
	</div>

	<div class="topbar">
		<h4>Team</h4>
		<MemberIndicator count={project.users.length} />
	</div>

	<div class="members">
		<div class="table-wrapper">
			<table>
				<tbody>
					{#each project.users as user}
						<tr>
							<td>{user.prefName}</td>
							<td>{user.role}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<div class="topbar">
		<h4>Open Roles</h4>
	</div>

	{#if !postings || postings.length === 0}
		<p>No open roles</p>
	{:else}
		<div class="members">
			<div class="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th>Role</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
						{#each postings as posting}
							<tr>
								<td>{posting.title}</td>
								<td>{posting.roleId}</td>
								<td>
									<a
										href={`/projects/directory/${project.id}-${project.name.replace(
											' ',
											'-'
										)}/postings/${posting.id}`}
									>
										Apply
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}
</div>

<footer>
	<button>See open roles</button>
	<!== <p>After submitting an application you should recieve an automated email from us</p> ==>
</footer>

<style lang="scss">
	.members {
		display: flex;
		flex-direction: column;

		.table-wrapper {
			overflow: scroll;
			max-height: 300px;
			box-shadow: 0 0 1px 1px #4040407b;
			border-radius: 4px;
		}
		table {
			width: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			font-size: 1rem;
			line-height: 1.5rem;
			font-size: 0.8rem;
			thead {
				background-color: var(--color-bg-1);
				color: var(--color-text-0);
				th {
					padding: 0.5rem;
					text-align: left;
					font-weight: normal;
				}
			}
			tbody {
				tr {
					&:nth-child(even) {
						background-color: var(--color-bg-1);
					}
					td {
						padding: 0.5rem;
						text-align: left;
					}
				}
			}
		}
	}
	.project {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		max-width: 100%;
		overflow-y: scroll;
		padding: 1rem;
		border-radius: 4px;
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
			padding: 0rem 0 10px;
			h3 {
				font-size: 1rem;
				font-weight: 600;
				color: var(--color-text-1);
				width: fit-content;
			}
		}

		.info {
			p {
				display: block; /* or inline-block */
				text-overflow: ellipsis;
				word-wrap: break-word;
				overflow: hidden;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3; /* number of lines to show */
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
			flex-wrap: wrap;
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
				font-size: 0.8rem;
				padding: 0.3rem;
				border-radius: 4px;
				border: 2px solid transparent;
				font-weight: 500;
				img {
					height: 1rem;
				}
				background-color: var(--color-bg-1);
				&:hover {
					border-color: var(--color-text-1);
				}
			}
		}
	}
</style> -->
