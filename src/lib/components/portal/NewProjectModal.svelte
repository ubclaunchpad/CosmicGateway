<script lang="ts">
	import Modal from '../layouts/Modal.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import { PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import { fetcher } from '$lib/util/fetcher';
	import { token } from '../../../stores/auth';
	export let isOpen: boolean;

	let projectTitle: string;
	let projectDescription: string;

	async function createProject() {
		fetcher({
			URI: `${PUBLIC_PROJECT_API_URI}/projects`,
			requestInit: {
				method: 'POST',
				headers: {
					Authorization: 'Bearer ' + $token
				},
				body: JSON.stringify({
					title: projectTitle,
					description: projectDescription
				})
			},
			onSuccess: (data) => {
				console.log(data);
			},
			notifySuccess: {
				title: 'Project Created',
				message: 'Project has been created successfully',
				type: 'success'
			}
		});
	}
</script>

<Modal title={'New Project'} on:modalevent isModalOpen={isOpen} type="side">
	<div class="modal-content" slot="modal-content">
		<div class="profile-content">
			<div class="profile">
				<div class="rows">
					<Info>
						<p>
							Projects are identified by their name. You can change the name later but make sure the
							name is unique.
						</p>
					</Info>
					<input placeholder="project title" bind:value={projectTitle} />

					<div>
						<h3>Project Description</h3>
					</div>
					<textarea placeholder="Max 255 characters" bind:value={projectDescription} />
				</div>
			</div>
		</div>
	</div>

	<div class="bottombar" slot="bottom-bar">
		<Info>
			<p>Add links and other project information once the project is created.</p>
		</Info>
		<button
			on:click={() => {
				createProject();
			}}
		>
			Create Project
		</button>
	</div>
</Modal>

<style lang="scss">
	p {
		font-size: 0.8rem;
	}

	.bottombar {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding: 1rem 1rem 0.4rem;
		gap: 0.5rem;
		button {
			padding: 0.3rem 0.6rem;
			border-radius: var(--border-radius-small);
		}
	}
	.rows {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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
	}
</style>
