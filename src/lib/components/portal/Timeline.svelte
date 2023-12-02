<script lang="ts">
	const currentDate = new Date();
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth();
	let daysInMonth = new Date(year, month + 1, 0).getDate();
	let days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
	let currentDay = date.getDate();
	let monthName = date.toLocaleString('default', { month: 'long' });
	let firstDayOfWeek = new Date(year, month, 1).getDay();
	days.unshift(...Array(firstDayOfWeek).fill(null));

	let weeks = [];
	for (let i = 0; i < days.length; i += 7) {
		weeks.push(days.slice(i, i + 7));
	}

	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const changeMonth = (direction: number) => {
		month += direction;
		if (month < 0) {
			month = 11;
			year--;
		} else if (month > 11) {
			month = 0;
			year++;
		}
		daysInMonth = new Date(year, month + 1, 0).getDate();
		days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
		currentDay = date.getDate();
		date = new Date(year, month, currentDay); // update the date

		monthName = date.toLocaleString('default', { month: 'long' });
		firstDayOfWeek = new Date(year, month, 1).getDay();

		// add empty cells to the start of the days array
		days.unshift(...Array(firstDayOfWeek).fill(null));

		// split the days into weeks
		weeks = [];
		for (let i = 0; i < days.length; i += 7) {
			weeks.push(days.slice(i, i + 7));
		}
	};

	let selectedDate = new Date();
</script>

<div class="w-full flex flex-col items-center py-2 space-y-2 relative overflow-hidden h-ful px-2">
	<div class="flex flex-row items-center justify-between w-full border-b border-gray-100 py-2">
		<h2 class="text-xl font-bold">Schedule</h2>
		<button
			class="w-fit bg-primary-300 text-white justify-center items-center rounded-md flex flex-row space-x-2 px-3 text-sm py-1"
		>
			New Event
		</button>
	</div>
	<div class="flex flex-row items-center justify-between w-full">
		<div class="flex flex-row items-center justify-start gap-6">
			<button
				class="  rounded-full flex items-center justify-center font-bold cursor-pointer transform transition-all duration-200 hover:bg-gray-400 hover:scale-115"
				on:click={() => changeMonth(-1)}
			>
				&lt;
			</button>
			<button
				class="  rounded-full flex items-center justify-center font-bold cursor-pointer transform transition-all duration-200 hover:bg-gray-400 hover:scale-115"
				on:click={() => changeMonth(1)}
			>
				&gt;
			</button>
		</div>
		<h3 class="text-sm">{monthName} {year}</h3>
	</div>
	<section class="relative overflow-hidden flex flex-col space-y-2 items-center justify-center">
		<table class="w-fit">
			<thead>
				<tr class="flex space-x-4 w-fit">
					{#each dayNames as dayName}
						<th class="w-8 h-8 flex items-center justify-center font-normal text-sm text-gray-500">
							{dayName}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each weeks as week}
					<tr class="flex space-x-4 w-fit">
						{#each week as day}
							{#if day !== null && day.toString() === currentDay.toLocaleString('default') && month === currentDate.getMonth() && year === currentDate.getFullYear()}
								<td
									class="w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transform transition-all duration-200 hover:bg-gray-400 hover:scale-115 bg-blue-500 text-white"
								>
									{day}
								</td>
							{:else if day !== null}
								<td
									class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-200 hover:bg-gray-400 hover:scale-115"
								>
									{day}
								</td>
							{:else}
								<td
									class="w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer transform transition-all duration-200 hover:bg-gray-400 hover:scale-115"
								/>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</div>
