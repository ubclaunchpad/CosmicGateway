<script lang="ts">
	import FaceContentIcon from '../general/icons/FaceContentIcon.svelte';
	import FaceSmileIcon from '../general/icons/FaceSmileIcon.svelte';
	import FaceWinkIcon from '../general/icons/FaceWinkIcon.svelte';

	export let count: number;
	const MemberIcons = {
		0: FaceContentIcon,
		1: FaceWinkIcon,
		2: FaceSmileIcon
	};
</script>

<div class="members">
	{#each { length: Math.min(count, 3) } as _, i}
		<div class="member">
			<!-- <svelte:component this={MemberIcons[i]} />  -->
		</div>
	{/each}
	{#if count && count > 3}
		<div class="member">
			<p>+{count - 3}</p>
		</div>
	{/if}
</div>

<style lang="scss">
	.members {
		display: flex;
		flex-direction: row;
		padding: 20px;
		gap: 0.5rem;
		// width: 100%;
		width: fit-content;
		width: 70px;
		position: relative;
		align-items: center;

		// height: 4rem;

		.member {
			display: flex;
			position: absolute;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 2.5rem;
			height: 2.5rem;
			padding: 10px;
			background-color: transparent;
			background-color: var(--color-bg-1);
			box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
			border-radius: 50%;
			transform: translateX(50%);
			&:nth-child(1) {
				z-index: 3;
				right: 0rem; /* Adjust the horizontal spacing between circles */
			}

			&:nth-child(2) {
				z-index: 2;
				right: 1.5rem; /* Adjust the horizontal spacing between circles */
			}

			&:nth-child(3) {
				z-index: 1;
				right: 3rem; /* Adjust the horizontal spacing between circles */
			}

			&:nth-child(4) {
				z-index: 0;
				right: 4.5rem; /* Adjust the horizontal spacing between circles */
			}
		}

		p {
			font-size: 0.8rem;
			font-weight: 500;
			color: var(--color-text-1);
			background-color: var(--color-bg-1);
			border-radius: 4px;
		}
	}
</style>
