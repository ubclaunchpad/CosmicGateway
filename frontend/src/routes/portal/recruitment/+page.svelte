<script lang="ts">
	let querying = true;
	import { PUBLIC_POSTING_API_URI } from '$env/static/public';
	import { onMount } from 'svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import MemberSearch from './MemberSearch.svelte';
	import { PROJECT_ROLES } from '../../../seed/util';
	import {
		orderIcon,
		filterIcon,
		dotsVerticalIcon,
		LinkExternalIcon,
		doneIcon,
		FolderIcon,
		PinIcon,
		InfoIcon
	} from '$lib/static/icons';
	import Banner from '$lib/components/blocks/Banner.svelte';

	let postings = [];
	const fetchPostings = async () => {
		const response = await fetch(`${PUBLIC_POSTING_API_URI}/postings`, {
			method: 'GET'
		});
		postings = await response.json();
		console.log(postings);
		querying = false;
	};

	onMount(() => {
		fetchPostings();
	});
</script>

<MainPage>
	<div slot="main" class="content">
		<div class="header">
			<h1>Recruitment</h1>
			<div class="header-buttons">
				<button>
					<img src={filterIcon} alt="Filter" />
				</button>
				<button>
					<img src={orderIcon} alt="Filter" />
				</button>
				<button>
					<img src={dotsVerticalIcon} alt="more options" />
				</button>
			</div>
		</div>

		<Banner
			title="How to use this page"
			description="This page is used to manage recruitment for projects. You can create new postings, view applications, and accept or reject applicants. You can also view the applications for each posting by clicking on the external link icon."
			image={InfoIcon}
			links={[
				{
					text: 'Create a new posting',
					link: '/portal/recruitment/postings/new'
				},
				{
					text: 'View the docs about recruitment',
					link: '/portal/recruitment/applications'
				}
			]}
		/>

		{#if querying}
			<div class="table-wrapper" />
		{:else}
			<div class="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>Review</th>
							<th>Project</th>
							<th>Role</th>
							<th>Submitted</th>
						</tr>
					</thead>
					<tbody>
						{#each postings as posting}
							<tr>
								<td class="small">
									<a target="_blank" href={`/portal/recruitment/postings/${posting.id}`}>
										<img src={LinkExternalIcon} alt="application external link" /></a
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
								<td>
									<a target="_blank" href={`/portal/recruitment/postings/${posting.id}`}
										>{posting.applications}</a
									>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	</div>
</MainPage>

<style lang="scss">
	.header {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 100%;
		.header-buttons {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: fit-content;
			column-gap: 10px;

			button {
				padding: 0.4rem;
				border-radius: 10px;
				transition: all 0.2s ease-in-out;
				:hover {
					background-color: var(--color-bg-2);
				}
				img {
					width: 20px;
				}
			}
		}
	}
	.table-wrapper {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		padding: 0rem 0rem;
		overflow-x: scroll;
		border-radius: 1%;
		height: 100%;
		border: 1px solid var(--color-bg-1);

		table {
			padding: 0rem;
			border-collapse: separate;
			border-spacing: 0px;
			border-radius: 1rem;

			thead > :first-child > :last-child {
				border-top-right-radius: 5px;
			}

			thead th:first-of-type {
				border-top-left-radius: 5px;
			}

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
				th {
					font-weight: 600;
					background-color: var(--color-bg-2);
				}
				td,
				th {
					padding: 1rem;
				}

				.buttons {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					column-gap: 4px;
					padding: 0.3rem;
					width: fit-content;
					border-radius: 10px;
					transition: all 0.2s ease-in-out;
					:hover {
						background-color: var(--color-bg-2);
					}
				}

				.small {
					width: fit-content;
				}

				img {
					width: 18px;
				}

				button {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-start;
					column-gap: 4px;
					padding: 0.3rem;
					width: fit-content;
					border-radius: 10px;
					transition: all 0.2s ease-in-out;
					:hover {
						background-color: var(--color-bg-2);
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
					img {
						width: 20px;
					}
				}
				tr:nth-of-type(odd) {
					background-color: var(--color-bg-1);
				}
				tr:nth-of-type(even) {
					background-color: var(--color-bg-2);
				}
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;
	}
</style>
