<script lang="ts">
	import { FACULTIES_V2, STANDINGS_V2, PROGRAMS_V2 } from '../../../seed/util';
	import Icon from '../general/Icon.svelte';
	import ChevronLeftIcon from '../general/icons/ChevronLeftIcon.svelte';
	import ChevronRightIcon from '../general/icons/ChevronRightIcon.svelte';
	export let projectId: number = 1;
	export let postId: number = 1;

	let firstName: string;
	let lastName: string;
	let prefName: string;
	let email: string;
	let standingId: number;
	let facultyId: number;
	let programId: number;
	let resumeLink: string;

	const stages = 3;
	let step = 1;

	$: sectionName = () => {
		switch (step) {
			case 1:
				return 'Personal Information';
			case 2:
				return 'Academic Information';
			case 3:
				return 'Application Specific';
			default:
				return '';
		}
	};
</script>

<div class="steps">
	<section class="step">
		<div class="header">
			<h3>{sectionName()}</h3>
			<div class="step-nav">
				<button disabled={step == 1} on:click={() => (step = step - 1)}>
					<Icon>
						<ChevronLeftIcon />
					</Icon>
				</button>

				{step}
				<button disabled={step == stages} on:click={() => (step = step + 1)}>
					<Icon>
						<ChevronRightIcon />
					</Icon>
				</button>
			</div>
		</div>

		<article>
			<form method="POST">
				{#if step == 1}
					<section>
						<label for="firstName"
							>First Name
							<input bind:value={firstName} required type="text" placeholder="name" />
						</label>

						<label for="lastName"
							>Last Name
							<input bind:value={lastName} required type="text" placeholder="last name" />
						</label>

						<label for="prefName"
							>Preferred Name
							<input bind:value={prefName} required type="text" placeholder="preferred name" />
						</label>

						<label for="email"
							>Email
							<input value={email} required type="text" placeholder="email" />
						</label>
					</section>
				{/if}

				{#if step == 2}
					<section>
						<label
							>Faculty
							<select bind:value={facultyId} name="Faculty" id="Faculty">
								<option value="" disabled hidden selected>Your faculty</option>

								{#each Object.entries(FACULTIES_V2) as [facultyId, facultyName]}
									<option value={facultyId}>{facultyName}</option>
								{/each}
							</select>
						</label>

						<label
							>Specialization
							<select bind:value={programId} name="Specialization" id="Specialization">
								<option value="" disabled hidden selected>Your (intended) major</option>
								{#each Object.entries(PROGRAMS_V2) as [programId, programName]}
									<option value={programId}>{programName}</option>
								{/each}
							</select>
						</label>

						<label
							>Standing
							<select bind:value={standingId} name="Standing" id="Standing">
								<option value="" disabled hidden selected>Your current standing</option>
								{#each Object.entries(STANDINGS_V2) as [standingId, standingName]}
									<option value={standingId}>{standingName}</option>
								{/each}
							</select>
						</label>
						<label
							>Resume Link
							<input bind:value={resumeLink} placeholder="resume link" />
						</label>
					</section>
				{/if}

				{#if step == 3}{/if}
			</form>
		</article>
	</section>
</div>

<style lang="scss">
	.steps {
		display: flex;
		row-gap: 10px;
		flex-direction: column;
		padding: 0;

		.step-nav {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 4px;
			padding: 0;

			img {
				width: 20px;
				height: 20px;
			}

			button {
				display: flex;
				justify-content: center;
				background-color: transparent;
				&:disabled {
					opacity: 0.5;
				}
			}
		}
	}

	form {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		flex: 1;
		section {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			height: 100%;
			row-gap: 1rem;
			label {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
				row-gap: 5px;
				height: 100%;
				input {
					width: 100%;
				}
				select {
					height: 100%;
					width: 100%;
				}
			}
		}
	}
	.step {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		padding: 0;
		flex: 1;
		height: 100%;
		.header {
			display: flex;
			justify-content: space-between;
			column-gap: 10px;
			align-items: center;
			// background-color: var(--color-bg-1);
			border-radius: 4px;
			padding: 0 10px 0;
			width: 100%;
			.done {
				background-color: var(--color-primary);
			}
			h3 {
				width: fit-content;
				padding: 10px;
				font-size: 1rem;
			}
		}
	}
</style>
