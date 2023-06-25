<!-- <script lang="ts">
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth();
	const day = date.getDate();

	const dayName = date.toLocaleString('default', { weekday: 'short' });

	// get the next seven days names and date
	const nextSevenDays = Array.from({ length: 7 }, (_, i) => {
		const nextDay = new Date(year, month, day + i + 1);
		return {
			name: nextDay.toLocaleString('default', { weekday: 'short' }),
			date: nextDay.getDate()
		};
	});
</script>

<div class="timeline-section">
	<section class="timeline">
		{#each nextSevenDays as { name, date }}
			<div>
				<p>{name}</p>
				<div>
					{date}
				</div>
			</div>
		{/each}
	</section>
	<div class="background" />

	<section class="announcements">
		<h2>Announcements</h2>
		<p>There are no announcements for now.</p>
	</section>
</div>

<style lang="scss">
	.timeline-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0.4rem;
		justify-content: center;
		border-radius: 0.5rem;
		flex: 1;
		position: relative;
		overflow: hidden;
		row-gap: 1rem;
	}

	.background {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 4rem;
		border-radius: 0.3rem 0.3rem 0 0;
		z-index: 1;

		// background-color: var(--color-bg-0-faded);
	}

	.announcements {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0.4rem;
		justify-content: center;
		flex: 1;
		overflow: hidden;
		z-index: 2;
		border-top: 1px solid var(--color-border-2);
	}

	.timeline {
		position: relative;
		overflow: hidden;

		display: flex;
		z-index: 2;
		column-gap: 1rem;
		width: 100%;
		max-width: 500px;
		justify-content: space-between;
		background-color: var(--color-bg-1);
		background-color: var(--color-bg-primary-faded);
		border-radius: 0.7rem;
		padding: 0.7rem 1rem;

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 0.4rem;
			> div {
				width: 2rem;
				height: 2rem;
				border-radius: 8px;
				// background-color: var(--color-border-0);
				// background-color: var(--color-bg-primary);
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-weight: bold;
				cursor: pointer;
				transition: all 0.2s ease-in-out;

				&:hover {
					background-color: var(--color-bg-0);
					transform: scale(1.15);
				}
			}
		}
	}
</style> -->
