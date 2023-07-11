<script lang="ts">
	import { onMount } from 'svelte';
	import Info from '$lib/components/blocks/Info.svelte';
	import SectionForm from '$lib/components/layouts/SectionForm.svelte';
	import { userStore } from '../../../stores/auth';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/layouts/PageForm.svelte';
	onMount(async () => {
		if ($userStore !== undefined) {
			goto('/portal');
		}
	});
</script>

<PageForm>
	<SectionForm>
		<div slot="header">
			<h2>Portal</h2>
		</div>
		<div>
			<Info>
				<p>Currently only allow Google sign in. We will add more ways to sign in soon.</p>
			</Info>
		</div>
		<div class="router">
			<a href="./auth/signin">Sign in</a>
			<a href="./auth/signup">Sign up</a>
		</div>
		<Info>
			<p>
				Having issues? <span>
					<a href="mailto:strategy@ubclaunchpad.com">email us</a>
				</span>
			</p>
		</Info>
	</SectionForm>
</PageForm>

<style lang="scss">
	.router {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		row-gap: 1rem;
		width: 100%;
		height: 100%;
		padding: 1rem;
		a {
			transition: all 0.2s ease-in-out;
			width: 240px;
			text-align: center;
			padding: 0.4rem 1rem;
			background-color: var(--color-bg-primary-faded);
			border-radius: var(--border-radius-small);
			color: var(--color-text-1);
			font-size: 0.9rem;
			text-decoration: none;
			&:hover {
				background-color: var(--color-bg-primary);
			}
		}
	}
</style>
