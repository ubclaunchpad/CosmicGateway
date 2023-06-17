<script lang="ts">
	import { APPLICATION_STATUS, FACULTIES_V2, PROGRAMS_V2, STANDINGS_V2 } from '../../../seed/util';
	import Info from '../blocks/Info.svelte';
	import { PUBLIC_POSTING_API_URI } from '$env/static/public';
	import ApplicationReviewModal from '../application/ApplicationReviewModal.svelte';
	export let hideEmptyColumns: boolean;
	let applications: any = {};
	let showApplication = false;
	let appToshow = {};
	export let posting: any;

	$: if (posting) {
		fetchPostings();
	}

	const fetchPostings = async () => {
		const response = await fetch(`${PUBLIC_POSTING_API_URI}/postings/${posting.id}/applications`, {
			method: 'GET'
		});
		applications = await response.json();
	};

	const toggleShowApplication = (application: any) => {
		showApplication = !showApplication;
		appToshow = application;
		posting = posting;
	};
</script>

<ApplicationReviewModal
	on:modalevent={toggleShowApplication}
	isOpen={showApplication}
	application={appToshow}
	{posting}
/>

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
									<div class="actions">
										<button
											disabled
											class="drag-button"
											on:click={() => {
												appToshow = app;
												showApplication = true;
											}}
										>
											<!-- <img src={draggableIcon} alt="more options" /> -->
										</button>
										<button
											class="bottom-right"
											on:click={() => {
												appToshow = app;
												showApplication = true;
											}}
										>
											View
										</button>
									</div>

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
								</div>
							{/each}
						{/if}
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
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
				padding: 0 1rem 0.4rem;
				border-radius: 5px;
				background-color: var(--color-bg-0);

				.actions {
					display: flex;
					flex-direction: row;
					border-bottom: 1px solid var(--color-bg-1);
					background-color: transparent;
					justify-content: space-between;
					width: 100%;
					align-items: center;
					padding: 0.5rem;
					column-gap: 0.2rem;

					.drag-button {
						cursor: not-allowed;
						&:active {
							cursor: not-allowed;
						}
					}

					button {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;
						width: fit-content;
						column-gap: 10px;
						background-color: transparent;
					}

					img {
						width: 20px;
					}
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
					.external-badge {
						background-color: var(--color-bg-secondary);
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
