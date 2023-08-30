<script lang="ts">
	import Modal from '../layouts/Modal.svelte';
	export let isOpen: boolean;
	export let project = {};
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

<Modal title={project.title} on:modalevent isModalOpen={isOpen} type="side">
	<div class="modal-content" slot="modal-content">
		<div class="profile-content">
			<div class="profile">
				<div>
					<p>
						{project.description}
					</p>
				</div>

				<div class="topbar">
					<h4>Team</h4>
					<!--					<MemberIndicator count={project.users.length} />-->
				</div>

				<div class="members">
					<div class="table-wrapper">
						<table>
							<tbody>
								{#each members as user}
									<tr>
										<td>{user.name}</td>
										<td>{user.role}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<section class="attribute role">
					<!--            <button on:click={()=> {showRoles = true}}>-->
					<!--                Club Roles-->
					<!--            </button>-->
				</section>
			</div>
		</div>
	</div>

	<div class="bottombar" slot="bottom-bar">
		<footer />
	</div>
</Modal>

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

	.profile {
		display: grid;
		grid-template-columns: 1fr;
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

		.grid-row {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			> section {
				flex: 1;
			}
			&.top {
				flex-direction: row;
				align-items: flex-start;
				justify-content: space-between;
			}
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
