<script lang="ts">
	import Icon from '../general/Icon.svelte';
	import ArrowRightIcon from '../general/icons/ArrowRightIcon.svelte';
	import type { IRoleComponent } from '$lib/types/types';
	export let role: IRoleComponent;
</script>

<a href={role.anchorLink} class="role-section" target="_blank" referrerpolicy="no-referrer">
	<div class="role-header">
		<h5>{role.title}</h5>
		<a href={role.anchorLink}>
			<Icon>
				<ArrowRightIcon />
			</Icon>
		</a>
	</div>
	<div class="role-img">
		<slot />
	</div>

	<div class="role-dsc">
		<!--		<img src={role.image} alt="logo" />-->
		<p>{role.description}</p>
	</div>
</a>

<style lang="scss">
	.role-dsc {
		display: flex;
		flex-direction: row;
		gap: 0.4rem;
		justify-content: center;
		align-items: center;

		p {
			text-align: center;
		}
	}

	:global(.role-section) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 2fr 2fr;
		width: 100%;
		height: 350px;
		padding: 1rem;
		color: var(--color-text-2);
		text-decoration: none;
		background-color: var(--color-black-2);

		:global(img) {
			//background-color: red;
			height: 180px;
			max-width: 100%;
		}

		p {
			padding-top: 1rem;
			font-size: 0.9rem;
			text-align: center;
			color: var(--color-text-2);
		}

		.role-img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
		}

		.role-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;

			h5 {
				width: fit-content;
				font-size: 1rem;
			}
		}
	}
</style>
