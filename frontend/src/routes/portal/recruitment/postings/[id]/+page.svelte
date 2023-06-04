<script lang="ts">
	let querying = true;
	import { PUBLIC_POSTING_API_URI } from '$env/static/public';
	import { onMount } from 'svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import {
		APPLICATION_STATUS,
		FACULTIES_V2,
		PROGRAMS_V2,
		STANDINGS_V2
	} from '../../../../../seed/util';
	import { orderIcon, filterIcon, eyeIcon, eyeOffIcon, InfoIcon } from '$lib/static/icons';
	import Banner from '$lib/components/blocks/Banner.svelte';
	let applications: any = {};
	export let data;

	let hideEmptyColumns = false;

	const toggleEmptyColumns = () => {
		console.log(hideEmptyColumns);
		hideEmptyColumns = !hideEmptyColumns;
		console.log(hideEmptyColumns);
	};

	onMount(() => {
		fetchPostings();
	});
	const fetchPostings = async () => {
		console.log('applications');
		const response = await fetch(
			`${PUBLIC_POSTING_API_URI}/postings/${data.postingId}/applications`,
			{
				method: 'GET'
			}
		);
		applications = await response.json();
		querying = false;
	};
</script>

<MainPage>
	<div slot="main" class="content">
		<div class="header">
			<h1>Recruitment for Project</h1>
			<div class="header-buttons">
				<button>
					<img src={filterIcon} alt="Filter" />
				</button>
				<button>
					<img src={orderIcon} alt="Filter" />
				</button>
				<button on:click={toggleEmptyColumns}>
					{#if hideEmptyColumns}
						<img src={eyeIcon} alt="more options" />
					{:else}
						<img src={eyeOffIcon} alt="more options" />
					{/if}
				</button>
			</div>
		</div>

		<Banner
			title="How to use this page"
			,
			description="This page is used to manage recruitment for projects. You can create new postings, view applications, and accept or reject applicants."
			image={InfoIcon}
			links={[
				{
					text: 'Create a new posting',
					link: '/portal/recruitment/postings/new'
				},
				{
					text: 'View applications',
					link: '/portal/recruitment/applications'
				}
			]}
		/>

		{#if querying}
			<Info>Getting Member Info</Info>
		{:else}
			<div class="table-wrapper">
				<div class="kanban">
					{#if Object.keys(applications).length === 0}
						<Info>No Applications</Info>
					{:else}
						{#each Object.entries(applications) as [key, value]}
							{#if !hideEmptyColumns || value.length !== 0}
								<div class="column">
									<h2>{APPLICATION_STATUS[key].status}</h2>
									{#if value.length === 0}
										<Info>No Applications</Info>
									{:else}
										{#each value as app}
											<div class="card">
												<div class="name">
													<p>{app.firstName},{app.lastName}</p>
													{#if !app.userId}
														<div class="external-badge">External</div>
													{:else}
														<div class="user-badge">Member</div>
													{/if}
												</div>

												<div class="email">
													<a href="mailto:{app.email}">{app.email}</a>
												</div>
												<div class="other">
													<p>{FACULTIES_V2[app.faculty]}</p>
													<p>{PROGRAMS_V2[app.program]}</p>
													<p>{STANDINGS_V2[app.standing]}</p>
												</div>
												<div class="email">
													<a href="mailto:{app.email}">Resume Link</a>
												</div>
											</div>
										{/each}
									{/if}
								</div>
							{/if}
						{/each}
					{/if}
				</div>
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

	.kanban {
		display: flex;
		flex: 1;
		flex-direction: row;
		width: 100%;
		width: fit-content;
		column-gap: 1rem;
		height: 100%;

		.column {
			h2 {
				font-size: 1.2rem;
				padding: 0.5rem;
			}
			display: flex;
			flex-direction: column;
			background-color: var(--color-bg-1);
			border-radius: 5px;
			overflow-y: scroll;
			gap: 1rem;

			padding: 1rem;
			width: 400px;
			.card {
				background-color: var(--color-bg-2);
				padding: 1rem;
				border-radius: 5px;

				&:hover {
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 2px;
					cursor: pointer;
				}

				.name {
					font-weight: 600;
					font-size: 0.9rem;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					div {
						width: fit-content;
					}

					.user-badge,
					.external-badge {
						width: fit-content;
						height: fit-content;
						padding: 4px;
						font-size: 0.8rem;
						border-radius: 5px;
						font-weight: 500;
					}
					.user-badge {
						background-color: var(--color-bg-primary);
					}
				}
				.email {
					font-size: 0.9rem;
					a {
						color: var(--color-text-1);
					}
				}
				.other {
					display: flex;
					gap: 4px;
					font-size: 0.7rem;
					flex-direction: row;
					width: 100%;
					p {
						background-color: var(--color-bg-1);
						width: fit-content;
						padding: 4px;
						border-radius: 5px;
					}
				}
			}
		}
	}
</style>
