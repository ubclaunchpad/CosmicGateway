<script>
	import Info from '../../../lib/components/Info.svelte';
</script>

<div id="slide">
	<div class="content">
		<Info>
			<h4>How to query</h4>
			<p>Querying is done by sending a POST request to the server with the following body:</p>
		</Info>

		<div>
			<h3>Personal</h3>
			<section>
				<label>First name</label>
				<input type="text" placeholder="Robert" />
			</section>

			<section>
				<label>Last name</label>
				<input type="text" placeholder="Launcher" />
			</section>

			<section>
				<label>Prefered Name</label>
				<input type="text" placeholder="Rob" />
			</section>

			<section>
				<label>Email</label>
				<input type="text" placeholder="Raccoon@ubclaunchpad.com" />
			</section>
		</div>

		<div>
			<h3>Education</h3>
			<section>
				<label>Student email</label>
				<input type="text" placeholder="rob@student.ubc.ca" />
			</section>

			<section>
				<label>Student number</label>
				<input type="text" placeholder="1" />
			</section>

			<section>
				<label>Faculty</label>
				<!-- <input type="text" placeholder="name" /> -->
				<select name="gender" id="pet-select">
					<option value="">Science</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>

			<section>
				<label>Specialization</label>
				<!-- <input type="text" placeholder="name" /> -->
				<select name="gender" id="pet-select">
					<option value="">Math</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>
		</div>
		<div>
			<h3>Launchpad</h3>

			<section>
				<label>Role</label>
				<!-- <input type="text" placeholder="name" /> -->
				<select name="gender" id="pet-select">
					<option value="" disabled selected>Role</option>
					<option value="ss">Science</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>

			<section>
				<label for="ethnicity">Status</label>
				<select name="ingredients[]" id="pet-selectd">
					<option value="">Active on project(s)</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>

			<br />

			<br />
			<br />
			<br />
			<br />
			<br />

			<section>
				<label for="ethnicity">Sort by</label>
				<select name="ingredients[]" id="pet-selectd">
					<option value="">year level</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>
			<button>Query</button>
		</div>
	</div>
</div>

<style lang="scss">
	#slide {
		width: fit-content;
		position: sticky;
		overflow-y: scroll;
		border-left: 1px solid var(--color-bg-1);
		background-color: var(--color-bg-0);
		height: 100%;
		padding: 0;
		> div {
			width: 400px;
			background-color: var(--color-bg-0);
		}
	}
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		> div {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			flex: 1;
		}

		padding: 1rem 2rem;
		border-radius: 5px;
		row-gap: 10px;
		display: flex;
		flex-direction: column;
		section {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1.5rem;
			label {
				width: 200px;
				max-width: 100%;
				font-size: 0.9rem;
			}

			input,
			option,
			select {
				font-size: 0.9rem;
			}
		}
	}

	button {
		background-color: var(--color-bg-primary);
		color: var(--color-text-0-light);
		padding: 0.5rem;
		font-weight: 600;
		border-radius: 7px;
		font-size: 1.2rem;
	}
</style>
