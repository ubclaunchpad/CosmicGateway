<script lang="ts">
	import { faceContentIcon, faceSmileIcon, faceWinkIcon } from '$lib/util/icons';
	export let count: number;
	const MemberIcons = {
		0: faceSmileIcon,
		1: faceWinkIcon,
		2: faceContentIcon
	};
</script>

<div class="members">
	<div class="member">
		{#if count && count > 3}
			<p>+{count - 3}</p>
		{/if}
	</div>
	{#each { length: Math.min(count, 3) } as _, i}
		<div class="member">
			<img src={MemberIcons[i]} alt="user icon" />
		</div>
	{/each}
</div>

<style lang="scss">
	.members {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 10px;
		gap: 0.5rem;
		width: 100%;
		position: relative;
		height: 6rem;

		.member {
			display: flex;
			position: absolute;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 2rem;
			height: 2rem;
			padding: 10px;
			background-color: transparent;
			background-color: var(--color-bg-1);
			box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
			border-radius: 50%;
			transform: translateX(-50%);
			&:nth-child(1) {
				z-index: 3;
				right: 0;
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
