<script lang="ts">
	import { PUBLIC_USERS_API_URI } from '$env/static/public';
	import InProgress from '$lib/components/blocks/InProgress.svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SidePanel from '$lib/components/layouts/RightPanel.svelte';
	import { FACULTIES, PROGRAMS, STANDINGS } from '../../../seed/util';
	let firstName: string;
	let lastName: string;
	let prefName: string;
	let email: string;
	let standingId: number;
	let facultyId: number;
	let programId: number;

	let standings = STANDINGS;
	let programs = PROGRAMS;
	let faculties = FACULTIES;
</script>

<InProgress title="Search" description="This section is still in progress.">
	<SidePanel>
		<article slot="article" class="content">
			<h2>Search</h2>
			<Info>
				<p>Querying is done by sending a POST request to the server with the following body:</p>
			</Info>

			<div>
				<section>
					<label for="firstName">First Name</label>
					<input bind:value={firstName} required type="text" placeholder="name" />
				</section>

				<section>
					<label for="lastName">Last Name</label>
					<input bind:value={lastName} required type="text" placeholder="last name" />
				</section>

				<section>
					<label for="prefName">Preferred Name</label>
					<input bind:value={prefName} required type="text" placeholder="preferred name" />
				</section>

				<section>
					<label for="email">Email</label>
					<input bind:value={email} required type="text" placeholder="email" />
				</section>
			</div>

			<div>
				<section>
					<label>Faculty</label>
					<select name="Faculty" id="Faculty">
						{#each faculties as f}
							<option value={f.id}>{f.faculty_name}</option>
						{/each}
					</select>
				</section>

				<section>
					<label>Specialization</label>
					<select name="Specialization" id="Specialization">
						{#each programs as p}
							<option value={p.program_id}>{p.program_name}</option>
						{/each}
					</select>
				</section>

				<section>
					<label>Standing</label>
					<select name="Standing" id="Standing">
						{#each standings as s}
							<option value={s.standing_id}>{s.standing_name}</option>
						{/each}
					</select>
				</section>
			</div>
		</article>

		<footer slot="footer">
			<button>Query</button>
		</footer>
	</SidePanel>
</InProgress>

<style lang="scss">
	article section {
		// padding: 1rem 0;
		border-bottom: 1px solid var(--color-bg-1);
	}

	.content {
		// display: flex;
		// justify-content: center;
		// align-items: center;
		// flex-direction: column;
		// row-gap: 1rem;
		// padding: 2rem 1rem;
		// width: fit-content;
		// height: 100%;
		overflow: hidden;
	}

	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		column-gap: 1rem;
	}
</style>
