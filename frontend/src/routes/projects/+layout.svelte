<script>
	import '../styles.scss';
	let name = '';
	import { onMount } from 'svelte';

	let headings = [];

	onMount(() => {
		// Get all the headings with IDs in the document
		headings = Array.from(
			document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
		).map((heading) => ({
			level: parseInt(heading.tagName.charAt(1)),
			text: heading.textContent,
			id: heading.id
		}));
	});
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/cascadia-code" rel="stylesheet" />
</svelte:head>

<main>
	<nav>
		<h1>Launchpad Mission Control</h1>
		<ul />
	</nav>
	<div>
		<section id="sidebar">
			<form class="application">
				<h2>Submit Application</h2>
				<label>Name</label>
				<input bind:value={name} placeholder="e.g. Jane" />
				<label>Preferred name</label>
				<input bind:value={name} placeholder="e.g. Jane" />
				<label>Email Address</label>
				<input bind:value={name} placeholder="e.g. Jane.doe@gmail.com" />
				<label>Pronouns</label>
				<input placeholder="e.g 3,4,5,6" />
				<label>Resume</label>
				<input type="file" placeholder="e.g 3,4,5,6" />

				<label>LinkedIn</label>
				<input type="link" placeholder="e.g 3,4,5,6" />

				<label>Role</label>

				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>

				<hr />

				<label>Year level</label>

				<select name="cassrs" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>
				<label>Program</label>
				<select name="cassrs" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>

				<hr />

				<label>Gender</label>

				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>

				<label>Ethnicity</label>

				<select name="cars" id="cars">
					<option value="volvo">Volvo</option>
					<option value="saab">Saab</option>
					<option value="mercedes">Mercedes</option>
					<option value="audi">Audi</option>
				</select>

				<button type="submit">Submit</button>
			</form>
			<!-- <ul>
				{#each headings as heading}
					<li><a href={`#${heading.id}`}>{heading.text}</a></li>
				{:else}
					<li>No headings found.</li>
				{/each}
			</ul> -->
		</section>
		<slot />
	</div>

	<footer>See any problems, or have some feedback? Let us know!</footer>
</main>

<style lang="scss">
	input {
		padding: 0.7rem;
		// background-color: $base-color-1;
		outline: none;
		border: none;
		border-radius: 0.3rem;
		width: 20rem;
		color: white;
	}
	main {
		ul {
			li {
				list-style: none;

				a {
					text-decoration: none;
					// color: $color-text-0;
					&:hover {
						// color: $color-primary;
					}
				}
			}
		}

		> div {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			overflow: visible;

			#sidebar {
				position: sticky;
				top: 0;
				// border-right: 1px solid $base-color-1;

				.application {
					// background-color: $base-color-2;
					padding: 1rem 1.5rem;
					display: flex;
					flex-direction: column;
					row-gap: 1rem;
					font-weight: 500;
					border-radius: 4px;

					top: 0;

					button {
						padding: 0.4rem;
						background-color: blue;
						border-radius: 4px;
						// color: $color-text-0;
						font-size: 1.1rem;
						font-weight: 600;
					}
				}
				ul {
					display: flex;
					top: 0;
					// position: sticky;
					flex-direction: column;
					row-gap: 1rem;
				}
				display: flex;
				flex-direction: column;
				row-gap: 3rem;
				// min-width:20em;
				width: fit-content;
				padding: 1rem 2rem;
			}
		}
		nav {
			// position: sticky;
			top: 0;
			// border-bottom: 2px solid $base-color-1;
			h1 {
				flex: 1;
			}
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 0 0.4rem;
			z-index: 1000;

			ul {
				display: flex;
				column-gap: 1.5rem;

				li {
					text-transform: uppercase;
					list-style: none;

					a {
						text-decoration: none;
						// color: $color-text-0;
						&:hover {
							// color: $color-primary;
						}
					}
				}
			}
		}

		footer {
			display: flex;
			width: 100%;
			justify-content: center;
			// border-top: 2px solid $base-color-1;
			padding: 1rem;
		}
		width: 100%;
		row-gap: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		min-height: 100svh;
	}

	main > :global(div) {
		flex: 1;
		width: 100%;
		display: flex;
		justify-content: center;
		align-self: center;
		flex-direction: column;
		height: 100%;
	}
</style>
