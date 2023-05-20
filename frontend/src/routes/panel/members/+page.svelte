<script lang="ts">
	import { USERS_SEED } from '../../../seed/users';
	const users = USERS_SEED;
</script>

<div class="content">
	<div class="table-wrapper">
		<table>
			<thead>
				<tr>
					{#each Object.keys(users[0]) as key}
						<th>{key}</th>
					{/each}
				</tr>
			</thead>

			<tbody>
				{#each users as user}
					<tr>
						{#each Object.values(user) as value}
							{#if typeof value === 'object'}
								<td>
									{#each Object.values(value) as val}{val}{/each}
								</td>
							{:else}
								<td>{value}</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang="scss">
	.search {
		display: flex;
		justify-content: center;
		flex-direction: row;
		padding: 1rem;
		width: 100%;
		column-gap: 1rem;
		input {
			min-width: 300px;
		}
	}
	.table-wrapper {
		display: flex;
		// padding: 1rem;
		justify-content: flex-start;
		width: 100%;
		padding: 0rem 0rem;
		overflow-x: scroll;
		border-radius: 1%;
		border: 1px solid var(--color-bg-1);

		table {
			// background-color: var(--color-bg-1);
			box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 2px;
			// width: 100%;
			padding: 0rem;
			border-collapse: separate;
			border-spacing: 0px;
			border-radius: 1rem;

			thead > :first-child > :last-child {
				border-top-right-radius: 5px;
			}

			thead th:first-of-type {
				border-top-left-radius: 5px;
			}

			tbody > :last-child > :last-child {
				border-bottom-right-radius: 5px;
			}

			tbody > :last-child > :first-child {
				border-bottom-left-radius: 5px;
			}

			thead tr {
				text-align: left;
			}

			tr {
				th {
					font-weight: 600;
					background-color: var(--color-bg-2);
				}
				td,
				th {
					padding: 1rem;
				}
			}

			tbody {
				tr:nth-of-type(odd) {
					background-color: var(--color-bg-1);
				}
				tr:nth-of-type(even) {
					background-color: var(--color-bg-2);
				}
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;
	}
</style>
