<script>
	import { AlignLeftIcon, AlignRightIcon } from '$lib/static/icons';
	let isOpen = false;
</script>

<div class="hero">
	<div class="main-page">
		<slot name="main" class="content" />
	</div>

	{#if $$slots.side}
		<div id="side-content">
			<button
				id="collapser"
				on:click={() => {
					isOpen = !isOpen;
				}}
			>
				{#if isOpen}
					<img src={AlignRightIcon} alt="align right" />
				{:else}
					<img src={AlignLeftIcon} alt="align left" />
				{/if}
			</button>
			{#if isOpen}
				<div id="side-div">
					<slot name="side" />
				</div>
			{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.hero {
		height: 100%;
		border-radius: 10px 10px 10px 10px;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
		overflow: hidden;
		flex: 1;
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: var(--color-bg-primary-faded);
	}

	.main-page {
		position: relative;
		background-color: var(--color-bg-0);
		border-radius: 10px 0 0 10px;
		flex-direction: column;
		height: 100%;
		overflow: scroll;
		padding: 0.4rem 1rem;
		flex: 1;
		height: 100%;
	}

	#side-content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
		position: relative;
		padding: 0;
		height: 100%;
		border-radius: 0 10px 10px 0;
		overflow: hidden;
		transition: all 0.4s ease-in-out;
		#collapser {
			position: relative;
			z-index: 3;
			top: 0;
			left: 0;
			overflow: hidden;
			height: 100%;
			background-color: var(--color-bg-0);
			border-right: 3px double var(--color-bg-1);
			border-left: 3px double var(--color-bg-1);
			opacity: 0.8;
		}
		#side-div {
			position: relative;
			flex: 1;
			height: 100%;
			width: 450px;
			overflow-x: hidden;
		}
	}

	// main {
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: flex-start;
	// 	flex-direction: column;
	// 	width: 100%;
	// 	height: 100%;
	// 	height: 100svh;
	// 	overflow: hidden;
	// 	background: linear-gradient(
	// 		90deg,
	// 		var(--color-bg-primary-faded) 0%,
	// 		var(--color-bg-primary-faded) 100%
	// 	);
	// 	background: linear-gradient(
	// 		90deg,
	// 		var(--color-bg-primary-faded) 0%,
	// 		var(--color-bg-primary-faded) 100%
	// 	);
	// 	padding: 0;

	// 	.page {
	// 		display: flex;
	// 		flex-direction: row;
	// 		justify-content: flex-start;
	// 		align-items: flex-start;
	// 		width: 100%;
	// 		height: 100%;
	// 		overflow: hidden;
	// 		padding: 1rem;
	// 		column-gap: 1rem;

	// 		.sidebar {
	// 			width: 250px;
	// 			height: 100%;
	// 			background-color: var(--color-bg-0);
	// 			border-radius: 10px;
	// 			box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
	// 			padding: 0;
	// 			margin: 0;
	// 		}
	// 	}

	// 	nav {
	// 		position: sticky;
	// 		z-index: 100000;
	// 		padding: 0 1rem;
	// 		min-height: 4rem;
	// 		display: flex;
	// 		flex-direction: row;
	// 		align-items: center;
	// 		justify-content: space-between;
	// 		width: 100%;
	// 		top: 0;

	// 		img {
	// 			width: 36px;
	// 		}

	// 		background-color: var(--color-bg-2);
	// 		border-bottom: 1px solid var(--color-bg-1);

	// 		h1 {
	// 			flex: 1;
	// 			padding: 1rem 0;
	// 		}

	// 		ul {
	// 			display: flex;
	// 			column-gap: 1.5rem;
	// 			align-items: start;

	// 			li {
	// 				list-style: none;
	// 				text-align: left;

	// 				a {
	// 					text-decoration: none;
	// 					&:hover {
	// 						// color: $color-primary;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// footer {
	// 	display: flex;
	// 	width: 100%;
	// 	justify-content: center;
	// 	padding: 1rem;
	// }
	// }
</style>
