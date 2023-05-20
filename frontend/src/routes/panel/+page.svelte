<div class="page">
	<div class="options">
		<ul>
			<li>Applications</li>
			<li>Applications</li>

			<li>Applications</li>

			<li>Applications</li>
		</ul>
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.options {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		padding: 0.4rem;
		// border-bottom: 2px solid $base-color-1;

		ul {
			display: flex;
			column-gap: 1.5rem;

			li {
				padding: 1rem;
				border-radius: 0.3rem;
				text-transform: uppercase;
				list-style: none;
				background-color: var(--color-bg-primary);
				color: var(--color-text-0-c);

				a {
					text-decoration: none;
					color: var(color-text-0-c);
					&:hover {
					}
				}
			}
		}
	}

	.page {
		position: relative;
		display: flex;
		justify-content: flex-start;
		width: 100%;
		align-items: flex-start;
		flex-direction: column;
		height: 100%;
		flex: 1;
	}
</style>
