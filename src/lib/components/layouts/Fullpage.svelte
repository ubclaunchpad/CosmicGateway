<script lang="ts">
	import { slide } from 'svelte/transition';
	import MenuIcon from '../general/icons/MenuIcon.svelte';
	import logo from '$lib/assets/logo.png';
	import Navbar from './portal/Navbar.svelte';
	import { onMount } from 'svelte';
	let pageWidth: number;
	let collapse = true;
	const cutoff = 800;
	$: showNav = pageWidth > cutoff || !collapse;
	$: isCompact = pageWidth < cutoff;
	onMount(() => {
		pageWidth = document.body.clientWidth;
		window.addEventListener('resize', () => {
			pageWidth = document.body.clientWidth;
		});
	});

	const collapseNav = () => {
		if (!collapse) collapse = true;
	};

	const onNavigation = () => {
		collapseNav();
	};
</script>

<div
	id="page"
	on:keyup={(e) => {
		console.log(e.key);
		if (e.key === 'Escape') {
			collapseNav();
		}
	}}
>
	<aside>
		<div class="sidebar" class:compact={isCompact}>
			<div class="item" class:open={showNav}>
				{#if isCompact}
					<button on:click={() => (collapse = !collapse)}>
						<MenuIcon width={'1rem'} />
					</button>
				{/if}
			</div>

			{#if showNav}
				<div class="content" transition:slide={{ axis: 'x', duration: 300 }}>
					<Navbar on:navigate={onNavigation} />
				</div>
			{/if}

			<div class="item bottom" class:open={showNav}>
				<a href="/">
					<img src={logo} alt="logo" width="36px" />
				</a>
			</div>
		</div>
	</aside>

	<main class:blur={!collapse && isCompact} on:keyup={(e) => {}} on:click={collapseNav}>
		<slot />
	</main>
</div>

<style lang="scss">
	#page {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		overflow: hidden;
		padding: 0;
		height: 100svh;
		.blur {
			filter: blur(10px);
			:global(*) {
				pointer-events: none;
			}
		}
		main {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-direction: column;
			flex: 1;
			height: 100%;
			overflow: hidden;
			padding: 0rem;
		}

		aside {
			position: relative;
			min-width: 2.4rem;
			height: 100%;
			background-color: var(--color-bg-1);
			z-index: 100;
			.compact {
				position: absolute;
				top: 0;
				left: 0;
			}

			.sidebar {
				.item {
					width: 2.4rem;
					padding: 1rem 0.4rem;
					display: flex;
					justify-content: center;
					button {
						background-color: inherit;
					}
				}
				z-index: 200;
				border: 1px solid var(--color-border-1);
				background-color: var(--color-bg-1);
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				.content {
					width: 15rem;
					max-width: 100%;
					flex: 1;
				}
			}
		}
	}
</style>
