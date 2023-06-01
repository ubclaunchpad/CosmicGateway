<script>
	import Info from '$lib/components/blocks/Info.svelte';
</script>

<article>
	<div>
		<Info>
			<p>We review applications on a rolling basis until the roles are filled</p>
			<p>Learn more about the application timeline and next steps</p>
		</Info>
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
		<section>
			<label>Resume Link</label>
			<input type="text" placeholder="1" />
		</section>

		<section>
			<label>LinkedIn URL</label>
			<input type="text" placeholder="1" />
		</section>

		<section>
			<label>Portfolio link</label>
			<input type="text" placeholder="e.g. Github or Drive folder" />
		</section>

		<div>
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
				<label for="ethnicity">Commitment</label>
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
		</div>

		<div>
			<h5>Voluntary Disclosures</h5>
			<Info>
				<p>
					The following information would not impact your application in any way. It's only used for
					for our internal reports.
				</p>
			</Info>

			<section>
				<label>Gender</label>
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
				<label for="ethnicity">Ethnicity</label>
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
		</div>
	</div>

	<div>
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
	</div>

	<div>
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
	</div>

	<div>
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
	</div>
</article>

<footer>
	<button>Submit Application</button>
	<p>After submitting an application you should recieve an automated email from us</p>
</footer>
