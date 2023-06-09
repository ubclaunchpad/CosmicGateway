<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import type { ProjectInfo } from '../../../../seed/projects';
	import Status from '../../projects/Status.svelte';
	import Apply from '$lib/components/application/Apply.svelte';
	export let projectId: number;
	export let apply = false;
	let project: ProjectInfo;
	let showStatus = true;

	const fetchProject = async () => {
		const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects/${projectId}`);
		const data = (await res.json()) as ProjectInfo;
		project = data;
	};
	onMount(async () => {
		await fetchProject();
	});
</script>

<div id="slide">
	<div class="content">
		{#if project}
			{#if !apply}
				<Status {project} on:message />
			{:else}
				<Apply />
			{/if}
		{/if}
	</div>
</div>

<style lang="scss">
	#slide {
		width: fit-content;
		position: sticky;
		overflow-y: hidden;
		border-left: 1px solid var(--color-bg-1);
		background-color: var(--color-bg-0);
		height: 100%;
		padding: 0;
		> div {
			width: 400px;
			background-color: var(--color-bg-0);
		}
	}
	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.content {
		padding: 1rem;
		border-radius: 5px;
		row-gap: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		overflow-y: hidden;

		article {
			overflow: scroll;

			> div {
				padding: 1rem 0;
			}
		}

		footer {
			display: flex;
			flex-direction: column;
			p {
				padding: 0.5rem 0 0 0;
				font-weight: 300;
				font-size: 0.8rem;
				font-style: italic;
			}
		}

		div {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			flex: 1;
		}

		p {
			font-size: 0.9rem;
		}

		section {
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1.5rem;
			padding: 0.5rem 0;
			label {
				width: 200px;
				max-width: 100%;
				font-size: 0.9rem;
			}

			input,
			option,
			select {
				font-size: 0.9rem;
			}
		}
	}

	button {
		background-color: var(--color-bg-primary);
		color: var(--color-text-0-light);
		padding: 0.5rem;
		font-weight: 600;
		border-radius: 7px;
		font-size: 1.2rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		padding: 1rem 0;
	}

	h1,
	h2 {
		padding-top: 0;
	}
</style>
