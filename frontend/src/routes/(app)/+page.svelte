<script>
	let c = [
		'Project Name',
		'Start Date',
		'Estimated Deadline',
		'Direct Contributors',
		'Open Positions'
	];
	let data = ['Mission Alpha', 2, 3, 4];
</script>

<div>
	<div class="hero">
		<div>
			<h1>UBC LAUNCH PAD</h1>
			<!-- <img src={'src/img.png'} /> -->
		</div>

		<p>
			A leading student-run software club based in the University of British Columbia devoted to
			building applications in a collaborative and professional environment.
		</p>
	</div>

	<section>
		<h2><img src={'src/start.png'} />Who we are</h2>
		<div>
			<p>
				We're a student-run software engineering team devoted to building software projects in a
				collaborative and professional environment. Our primary objective is to be the best space at
				UBC for students to meet other tech enthusiasts, build projects in a team setting, gain
				experience with professional development tools and principles, and share their knowledge
				with others. We form teams based on common interests and project ideas of our own choosing,
				and hack on our projects to completion! We are also lucky enough to have sponsors which help
				provide our teams with necessary resources, like servers, to help us achieve our goals.
			</p>
		</div>
	</section>

	<section id="projects">
		<h2><img src={'src/start.png'} />Teams and Projects</h2>
		<div>
			<p>
				We recurit based on our projects' demands and scale; however most of our recruitment is done
				in the beginning of semesters (early September and early January)
			</p>

			<p>
				We look for all sorts of passionate UBC students looking passionate about technology. We
				generally recruit designers and developers with all sorts of experience and backgrounds.
				Please refer to here for a general role description.
			</p>

			<p>
				You can apply to join any of the projects that have open roles. Applications are reviewed on
				a rolling basis. If you like a project, apply now.
			</p>
		</div>
	</section>
	<div class="boards">
		<div class="board">
			<div class="table-wrapper">
				<table>
					<thead>
						<tr>
							{#each c as header}
								<th>{header}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each data as row}
							<tr>
								<td>{row}</td>
								<td>{row}</td>
								<td>{row}</td>
								<td>{row}</td>
								<td>{row}</td>
								<td>{row}</td>
								<td><button>Learn More</button></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<section>
			<h2><img src={'src/start.png'} />How we work</h2>
			<div>
				<p>
					We're a student-run software engineering team devoted to building software projects in a
					collaborative and professional environment. Our primary objective is to be the best space
					at UBC for students to meet other tech enthusiasts, build projects in a team setting, gain
					experience with professional development tools and principles, and share their knowledge
					with others. We form teams based on common interests and project ideas of our own
					choosing, and hack on our projects to completion! We are also lucky enough to have
					sponsors which help provide our teams with necessary resources, like servers, to help us
					achieve our goals.
				</p>
			</div>
		</section>
		<section>
			<h2><img src={'src/start.png'} />Sponsors</h2>
			<div>
				<p>
					We're a student-run software engineering team devoted to building software projects in a
					collaborative and professional environment. Our primary objective is to be the best space
					at UBC for students to meet other tech enthusiasts, build projects in a team setting, gain
					experience with professional development tools and principles, and share their knowledge
					with others. We form teams based on common interests and project ideas of our own
					choosing, and hack on our projects to completion! We are also lucky enough to have
					sponsors which help provide our teams with necessary resources, like servers, to help us
					achieve our goals.
				</p>
			</div>
		</section>
	</div>
</div>

<style lang="scss">
	.hero {
		position: relative;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		flex-direction: column;
		min-height: 60vh;
		img {
			position: absolute;
			width: 35rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: -2;
		}

		div {
			// background-color: red;
			position: relative;
			display: flex;
			justify-content: center;
			width: 100%;
			align-items: center;
			flex-direction: column;
			min-height: 60vh;
		}

		h1 {
			font-size: 3.2rem;
		}

		p {
			font-size: 1.2rem;
			max-width: 750px;
			// border: 3px dotted $base-color-1;
			// background-color: $base-color-1;
			padding: 2rem;
		}
	}

	section {
		div {
			display: flex;
			justify-content: center;
			width: 100%;
			align-items: center;
			flex-direction: column;
		}
		h2 {
			display: flex;
			align-items: center;
			column-gap: 10px;
			padding: 1rem 0;
			font-size: 1.8rem;

			img {
				width: 2rem;
			}
		}
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: flex-start;
		flex-direction: column;
		padding: 3rem 1rem;

		p {
			font-size: 1rem;
			max-width: 750px;
		}
	}

	.boards {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		row-gap: 1rem;
		width: 100%;
		flex: 1;
		height: 100%;
	}

	.board {
		.table-wrapper {
			display: flex;
			overflow-x: scroll;
		}

		h2 {
			padding: 1rem 0.4rem;
		}
		// background-color: $base-color-1;
		display: flex;
		flex-direction: column;
		max-width: 1500px;
		width: 100%;
		border-radius: 5px;
		padding: 2rem 1rem;

		table {
			width: 100%;
			overflow-x: scroll;
			border-spacing: 0;
			border-collapse: separate;
			border-spacing: 0 10px;

			width: fit-content;
			// white-space: nowrap;

			text-overflow: ellipsis;
			flex: 1;

			tbody {
				flex: 1;

				button {
					// background-color: $base-color-1;
					outline: none;
					border: 0;
					// color: $color-text-0;
					padding: 0.5rem 2rem;
					border-radius: 3px;
					font-weight: 600;
					cursor: pointer;

					&:hover {
						background-color: green;
					}
				}

				row-gap: 100px;
				border-spacing: 0;
				border-collapse: separate;
				border-spacing: 0 15px;
				tr {
					padding: 0.2rem 1.5rem;

					border-radius: 100px;
					width: 100%;
					height: 5rem;

					& > :first-child {
						flex: 1;
						// background-color: rgb(9, 17, 84);
						border-top-left-radius: 10px;
						border-bottom-left-radius: 10px;

						padding: 0 1rem;
					}

					& > :last-child {
						border-top-right-radius: 10px;
						border-bottom-right-radius: 10px;

						padding: 0 1rem;
					}

					td {
						width: fit-content;
						// white-space: nowrap;
						background-color: rgba(15, 14, 14, 0.703);

						padding: 0 1rem;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>
