<div class="page">
	<div class="profile">
		<h2>Profile</h2>

		<div>
			<h3>Basic Info</h3>
			<section>
				<label>First name</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Last name</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Prefered Name</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Pronouns</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label for="gender">Gender</label>
				<!-- <input type="text" placeholder="name" /> -->
				<select name="gender" id="pet-select">
					<option value="">Gender</option>
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
					<option value="">Gender</option>
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
			<h3>Education Info</h3>
			<section>
				<label>Student email</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Student number</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Faculty</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Specializatioon</label>
				<input type="text" placeholder="name" />
			</section>

			<section>
				<label>Specializatioon</label>
				<!-- <input type="text" placeholder="name" /> -->
				<select name="gender" id="pet-select">
					<option value="">Gender</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>

			<section>
				<label for="ethnicity">Year Level</label>
				<select name="ingredients[]" id="pet-selectd">
					<option value="">Gender</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>
			</section>

			<h2>Contact</h2>

			<div>
				<h3>Basic Info</h3>
				<section>
					<label>Resume Link</label>
					<input type="text" placeholder="name" />
				</section>

				<section>
					<label>Github link</label>
					<input type="text" placeholder="name" />
				</section>

				<section>
					<label>Figma username</label>
					<input type="text" placeholder="name" />
				</section>

				<section>
					<label>LinkedIn Profile</label>
					<input type="text" placeholder="name" />
				</section>

				<section>
					<label>Portfolio Link</label>
					<input type="text" placeholder="name" />
				</section>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.profile {
		border: 1px solid var(--color-bg-1);
		box-shadow: 0px 14px 10px 5px rgba(0, 0, 0, 0.1);

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
				width: 300px;
				max-width: 100%;
			}
		}
	}

	.page {
		position: relative;
		display: flex;
		justify-content: flex-start;
		width: 100%;
		align-items: end;
		flex-direction: column;
		height: 100%;
		flex: 1;
	}
</style>
