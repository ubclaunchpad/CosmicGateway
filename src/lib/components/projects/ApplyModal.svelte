<script lang="ts">
	import Modal from '../layouts/Modal.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import ApplicationModalContent from '$lib/components/projects/ApplicationModalContent.svelte';
	export let startApplication = false;
	export let isOpen = true;
	let members = [
		{
			name: 'John Doe',
			role: 'President'
		},
		{
			name: 'John Doe',
			role: 'director'
		}
	];
</script>

<Modal title={'Application'} on:modalevent isModalOpen={isOpen} type="side">
	<div class="modal-content" slot="modal-content">
		{#if !startApplication}
			<div class="profile-content">
				<div class="content">
					<Info>
						<p>
							When you apply you will be considered for all the openings. If you want to be
							considered for a specific role, please mention it in the applicant notes.
						</p>
					</Info>
					<div>
						<h3>Open roles</h3>
						<div class="table-wrapper">
							<table>
								<thead>
									<tr>
										<th>Project</th>
										<th>Roles</th>
										<th>Openings</th>
									</tr>
								</thead>
								<tbody>
									{#each members as member}
										<tr>
											<td>{member.role}</td>
											<td>{member.name}</td>
											<td>{member.role}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>

					<Info>
						<p>
							We do most of our recruiting in the fall, but we are always looking for talented
							people to join our team. If you are interested in joining, please apply below.
						</p>
					</Info>

					<section class="attribute role">
						<button on:click={() => (startApplication = true)}> Start Application </button>
					</section>
				</div>
			</div>
		{:else}
			<div class="profile-content">
				<div class="content">
					<Info>
						<p>Start Application</p>
					</Info>

					<Info />

					<ApplicationModalContent />

					<section class="attribute role">
						<button> Submit </button>
					</section>
				</div>
			</div>
		{/if}
	</div>
	<div class="bottombar" slot="bottom-bar">
		<footer />
	</div>
</Modal>

<style lang="scss">
	.profile-content {
		width: 100%;
		height: 100%;
		padding: 1rem;
		display: flex;
		overflow: hidden;
		:global(button) {
			padding: 0.3rem 0.6rem;
			border-radius: var(--border-radius-small);
		}
	}

	footer {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0.5rem;
		gap: 0.5rem;
		button {
			padding: 0.3rem 0.6rem;
			border-radius: var(--border-radius-small);
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		overflow-y: scroll;
		overflow-x: hidden;
		width: 100%;
		height: 100%;

		h2 {
			font-size: 1rem;
		}

		h3 {
			font-size: 0.9rem;
			padding: 1rem 0 1rem;
		}

		.attribute {
			display: flex;
			flex-direction: column;
			position: relative;
			justify-content: flex-start;
			&.role {
				position: relative;
				display: flex;
				flex: 1;
				width: 100%;

				justify-content: flex-end;
			}
			> p {
				padding: 0.5rem 0.4rem;
				font-size: 0.9rem;
				&:first-child {
					color: var(--color-text-2);
					font-weight: 400;
					font-size: 0.8rem;
				}
				&:last-child {
					border: 1px solid var(--color-border-0);
					color: var(--color-text-1);
					border-radius: var(--border-radius-small);
					background-color: var(--color-bg-3);
				}
				&.stamp {
					color: var(--color-text-2);
					background-color: inherit;
					border-color: transparent;
					font-weight: bold;
				}
			}

			input,
			select {
				padding: 0.5rem 0.4rem;
				border: 1px solid var(--color-border-0);
				color: var(--color-text-2);
				background-color: var(--color-bg-4);
				border-radius: var(--border-radius-medium);
				width: 100%;
				&:focus {
					border-color: var(--color-text-primary);
				}
			}
		}
	}
</style>
