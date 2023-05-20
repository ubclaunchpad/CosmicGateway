<script>
</script>

<div class="page">
	<article>
		<section class="body">
			<div class="topbar">
				<button>Interested in joining?</button>
			</div>

			<div class="board">
				<h2>About</h2>
				<p>
					LinkedIn is a social networking platform primarily focused on professional connections and
					career development. It allows users to create a profile highlighting their skills,
					education, work experience, and other professional achievements. Users can connect with
					others in their industry, search for job opportunities, and post job openings.
				</p>
				<h2>Relevant Links</h2>
				<ul><a>Github</a></ul>
				<ul><a>Github</a></ul>
				<ul><a>Github</a></ul>
			</div>
		</section>
	</article>
</div>

<style lang="scss">
	article {
		width: 100%;
		max-width: 100%;
		display: flex;
		flex-direction: row;
		flex: 1;

		padding: 0.3rem;
		border-radius: 4px;
		column-gap: 1rem;

		.body {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			.board {
				max-width: 750px;
			}
		}
		.outline {
			// position: sticky;
			display: flex;
			flex-direction: column;
			top: 0;
			// border-right: 2px solid $base-color-1;
			min-width: 10rem;
			padding: 1rem;
			height: 100%;
			flex: 1;
		}
	}

	.topbar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 850px;
		align-items: flex-start;

		button {
			padding: 0.4rem 1rem;
			background-color: blue;
			border-radius: 3px;
			// color: $color-text-0;
			font-size: 1rem;
			font-weight: 500;
		}
	}

	.board {
		h2 {
			padding: 1rem 0rem;
		}

		display: flex;
		flex-direction: column;
		max-width: 1500px;
		width: 100%;
		border-radius: 5px;
		padding: 2rem 1rem;
	}
</style>
