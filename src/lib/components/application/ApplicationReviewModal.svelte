<script lang="ts">
	import { PUBLIC_POSTING_API_URI, PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import type { ProjectInfo } from '../../../seed/projects';
	import Info from '../blocks/Info.svelte';
	import Icon from '../general/Icon.svelte';
	import ExpandIcon from '../general/icons/ExpandIcon.svelte';
	import Modal from '../layouts/Modal.svelte';
	import ProjectCard from '../projects/ProjectCard.svelte';
	let project: ProjectInfo;
	export let posting: any;
	let userApp: any = [];

	export let isOpen: boolean;
	export let application: any;
	const keyMapper = {
		firstName: 'First Name',
		lastName: 'Last Name',
		prefName: 'Preferred Name',
		email: 'Email',
		faculty: 'Faculty',
		program: 'Program',
		standing: 'Standing',
		resumeLink: 'Resume Link',
		userId: 'User Id'
	};

	const visibleKeys = {
		firstName: true,
		lastName: true,
		prefName: true,
		email: true,
		faculty: true,
		program: true,
		standing: true,
		resumeLink: true,
		userId: false
	};

	const isVisibile = (key) => {
		return Object.keys(visibleKeys).includes(key) && visibleKeys[key];
	};

	const mapKey = (key) => {
		if (Object.keys(keyMapper).includes(key)) return keyMapper[key];
		else return key;
	};

	const fetchApps = async () => {
		if (application.email) {
			const res = await fetch(
				`${PUBLIC_POSTING_API_URI}/postings/applications?applicantEmail=${application.email}`
			);
			userApp = (await res.json()) as ProjectInfo;
		}
	};

	const fetchProject = async () => {
		if (application.email) {
			const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects/${posting.projectId}`);
			project = (await res.json()) as ProjectInfo;
		}
	};

	$: if (application.email) {
		fetchApps();
	}
</script>

<Modal title={'Review Application'} on:modalevent isModalOpen={isOpen}>
	<div class="modal-content" slot="modal-content">
		<article>
			<div class="badge">
				{#if !application.userId}
					<div class="external-badge">External</div>
				{:else}
					<div class="user-badge">Launch Pad Member</div>
				{/if}
			</div>
			<div class="body">
				<h3>Applicant Information</h3>

				<div class="table-wrapper">
					<table>
						<thead />

						<tbody>
							{#each Object.entries(application) as [key, value]}
								{#if isVisibile(key)}
									<tr>
										<td>{mapKey(key)}</td>
										<td>
											{#if key === 'userId'}
												<button style="background-color:transparent;">
													<Icon>
														<ExpandIcon />
													</Icon>
												</button>
											{:else if key === 'resumeLink'}
												<a href={'/' + value.toString()} target="_blank">{value}</a>
											{:else if key === 'email'}
												<a href={'mailto:' + value.toString()}>{value}</a>
											{:else if key === 'faculty'}
												<p>{FACULTIES_V2[value]}</p>
											{:else if key === 'standing'}
												<p>{STANDINGS_V2[value]}</p>
											{:else if key === 'program'}
												<p>{PROGRAMS_V2[value]}</p>
											{:else}
												{value}
											{/if}
										</td>
									</tr>
								{/if}
							{/each}
						</tbody>
					</table>
				</div>
				<Info>
					<p>
						Need to contact the applicant? Click on their email to send them an email. If you need
						to view their resume, click on the external link.
					</p>
				</Info>

				<h3>Posting Information</h3>

				<div class="table-wrapper">
					<table>
						<tbody>
							<tr>
								<td>
									<a target="_blank" href={`/portal/recruitment/postings/${posting.id}`}
										>{posting.applications} applicants</a
									>
								</td>
								<td>
									<a
										target="_blank"
										href={`/projects/directory/${posting.projectId}-${posting.projectName
											.toLowerCase()
											.replace(' ', '-')}`}>{posting.projectName}</a
									>
								</td>

								<td>{PROJECT_ROLES[posting.roleId].name}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3>Other Applications from {application.prefName}</h3>
				<Info>
					<p>Keep in mind applicants may have applied to other postings.</p>
				</Info>

				{#if userApp.length > 0}
					<div class="table-wrapper">
						<table>
							<tbody>
								{#each userApp as app}
									<tr>
										{#each Object.entries(app) as [key, value]}
											{#if key === 'applicationStatus'}
												<td><p>{APPLICATION_STATUS[value].status}</p></td>
											{:else if key === 'projectName'}
												<td
													><a
														target="_blank"
														href={`/projects/directory/${app.projectId}-${value
															.toLowerCase()
															.replace(' ', '-')}`}>{value}</a
													></td
												>
											{:else if key === 'roleId'}
												<td><p>{PROJECT_ROLES[value].name}</p></td>
											{:else if key === 'program'}
												<td><p>{PROGRAMS_V2[value]}</p></td>
											{/if}
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}

				{#if project}
					<ProjectCard {project} />
				{/if}
			</div>
		</article>
	</div>

	<div class="bottombar" slot="bottom-bar">
		<Info>
			<p>
				To change the status of this application, select a new status from the dropdown below.
				Changing the status will send an email to the applicant.
			</p>
		</Info>
		<div class="buttons">
			<div class="status">
				<select bind:value={application.applicationStatus}>
					{#each Object.entries(APPLICATION_STATUS) as [key, value]}
						<option value={value.id}>{value.status}</option>
					{/each}
				</select>
			</div>
			<button>Save</button>
		</div>
	</div>
</Modal>

<style lang="scss">
	.modal-content {
		p {
			margin: 0;
			padding: 0;
			font-size: 0.8rem;
			color: var(--color-text-2);
		}

		flex: 1;
		overflow: scroll;
		article {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			row-gap: 0.5rem;
			overflow: scroll;
			.body {
				display: flex;
				flex-direction: column;
				height: 100%;
				row-gap: 1rem;
				padding: 1rem;
				h3 {
					font-size: 1rem;
					color: var(--color-text-1);
				}
			}

			.badge {
				position: sticky;
				display: flex;
				justify-content: center;
				align-items: center;
				div {
					width: fit-content;
				}

				.user-badge,
				.external-badge {
					text-align: center;
					width: 100%;
					height: fit-content;
					padding: 10px;
					font-size: 0.8rem;
					font-weight: 500;
				}
				.user-badge {
					background-color: var(--color-bg-primary);
				}

				.external-badge {
					background-color: var(--color-bg-secondary);
				}
			}
		}
	}

	.bottombar {
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		padding: 1rem 1rem;
		border-top: 1px solid var(--color-bg-1);
		align-items: center;

		.buttons {
			display: flex;
			justify-content: flex-end;
			column-gap: 1rem;
			width: 100%;
		}
		button {
			background-color: var(--color-bg-primary);
			padding: 0.5rem 1rem;
			border-radius: 0.2rem;
			font-size: 0.9rem;
		}
		p {
			margin: 0;
			padding: 0;
			font-size: 0.8rem;
			color: var(--color-text-2);
		}
	}

	.table-wrapper {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 0rem 0rem;
		border-radius: 1%;
		border: 1px solid var(--color-bg-1);

		table {
			padding: 0rem;
			border-collapse: separate;
			border-spacing: 0px;
			border-radius: 1rem;
			width: 100%;
			height: 100%;
			overflow: visible;

			tbody > :last-child > :last-child {
				border-bottom-right-radius: 5px;
			}

			tbody > :last-child > :first-child {
				border-bottom-left-radius: 5px;
			}

			thead tr {
				text-align: left;
			}

			tr {
				td {
					padding: 0.6rem;

					&:first-child {
						width: 150px;
						font-weight: 300;
					}
				}
			}

			tbody {
				font-size: 0.9rem;

				a {
					background-color: transparent;
				}
				button {
					background-color: transparent;
				}

				td {
					border-bottom: 1px solid var(--color-bg-1);
				}
			}
		}
	}

	.status {
		font-weight: 600;
		font-size: 0.8rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 0rem;

		select {
			background-color: var(--color-bg-1);
			padding: 0.5rem 1rem;
			border-radius: 5px;
		}
	}
</style>
