<script lang="ts">
	import ResourceViewModal from '$lib/components/admin/ResourceViewModal.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';

	let showResources = false;
</script>

<ResourceViewModal
	on:modalevent={() => {
		showResources = false;
	}}
	isOpen={showResources}
/>

<MainPage>
	<div slot="main" class="content">
		<h1>Admin</h1>

		<div class="cards">
			<div class="card-lg" />
			<div class="card-sm">
				<div class="button-list">
					<button
						on:click={() => {
							showResources = true;
						}}>Roles</button
					>
					<button>Standings</button>
					<button>Faculties</button>
					<button>Specializations</button>
				</div>
			</div>

			<div class="card-sm">
				<!-- <PieChart /> -->
			</div>
		</div>

		<div class="cards">
			<div class="card-lg">
				<h2>Funding</h2>
			</div>
			<div class="card-lg">
				<h2>Sponsors</h2>
			</div>

			<div class="card-lg">
				<h2>Logistics</h2>
			</div>
		</div>
	</div>
</MainPage>

<style lang="scss">
	.cards {
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;
		flex-wrap: wrap;
		overflow: hidden;
		border-bottom: 1px solid var(--color-border-1);

		> div {
			background-color: var(--color-bg-2);
			border-radius: var(--border-radius-medium);
			box-shadow: var(--box-shadow-sm);
			padding: 1rem;
			gap: 1rem;
			max-width: 100%;

			h2 {
				font-size: 1.2rem;
			}

			.button-list {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				height: 100%;
				gap: 1rem;
				padding: 0.5rem 0rem;

				button {
					width: 100%;
					height: 3rem;
					padding: 0.5rem 0.8rem;
					background-color: var(--color-bg-3);
					border-radius: var(--border-radius-large);
					color: var(--color-text-2);
					transition: all 0.2s ease-in-out;

					&:hover {
						background-color: var(--color-bg-primary);
					}
				}
			}
		}
	}

	.card-lg {
		flex: 1;
		min-width: 20rem;
		min-height: 20rem;
	}

	.card-sm {
		min-width: 20rem;
		min-height: 20rem;
	}

	.content {
		width: 100%;
		height: 100%;
	}
</style>
