<!-- <script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import ApplicationCard from '$lib/components/recruitment/ApplicationCard.svelte';
	import { PUBLIC_POSTING_API_URI, PUBLIC_PROJECT_API_URI } from '$env/static/public';
	import { onMount } from 'svelte';
	import type { ProjectInfo } from '../../../../../seed/projects.js';
	export let data;
	let posting: any;
	let hideEmptyColumns = false;
	let project: ProjectInfo;
	const fetchProject = async () => {
		const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects/${posting.projectId}`);
		project = (await res.json()) as ProjectInfo;
	};

	const toggleEmptyColumns = () => {
		hideEmptyColumns = !hideEmptyColumns;
	};

	const fetchPostingInfo = async () => {
		const response = await fetch(`${PUBLIC_POSTING_API_URI}/postings/${data.postingId}`, {
			method: 'GET'
		});
		posting = await response.json();
	};

	$: if (posting) {
		fetchProject();
	}

	onMount(() => {
		fetchPostingInfo();
	});
</script>

<MainPage>
	<div slot="main" class="content">
		<div class="header">
			<h1>
				Recruting for
				{#if posting}
					<span class="badge">{posting.projectName}/{posting.title}</span>
				{:else}
					Loading...
				{/if}
			</h1>
			<div class="header-buttons">
				<button>
					<!== <img src={filterIcon} alt="Filter" /> ==>
				</button>
				<button>
					<!== <img src={orderIcon} alt="Filter" /> ==>
				</button>
				<button on:click={toggleEmptyColumns}>
					{#if hideEmptyColumns}
						<!== <img src={eyeIcon} alt="more options" /> ==>
					{:else}
						<!== <img src={eyeOffIcon} alt="more options" /> ==>
					{/if}
				</button>
			</div>
		</div>

		<!== <div class="info-section">	
		{#if project}
		<ProjectCard project={project}/>
		{:else}
			Loading...
		{/if}

		<Banner image={InfoIcon} title={"Applications"} description={" "}
		type={0}
		 links={[
			{
				text: 'Create a new posting',
				link: '/portal/recruitment/postings/new'
			},
			{
				text: 'View the docs about recruitment',
				link: '/portal/recruitment/applications'
			}
		]}
		/>
		
		<Banner image={InfoIcon} title={"Applications"} description={" "}
		type={1}
		 links={[
			{
				text: 'Create a new posting',
				link: '/portal/recruitment/postings/new'
			},
			{
				text: 'View the docs about recruitment',
				link: '/portal/recruitment/applications'
			}
		]}
		/>
	</div> ==>

		<ApplicationCard {posting} {hideEmptyColumns} />
	</div>
</MainPage>

<style lang="scss">
	h1 {
		font-weight: 600;
	}

	.badge {
		background-color: var(--color-bg-1);
		padding: 0.2rem 0.4rem;
		border-radius: 10px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 100%;
		.header-buttons {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: fit-content;
			column-gap: 10px;

			button {
				padding: 0.4rem;
				border-radius: 10px;
				transition: all 0.2s ease-in-out;
				:hover {
					background-color: var(--color-bg-2);
				}
				img {
					width: 20px;
				}
			}
		}
	}

	div {
		display: flex;
		flex-direction: column;
		padding: 0.4rem;
	}

	.info-section {
		display: flex;
		flex-direction: row;
		padding: 0.4rem;
		column-gap: 1rem;
		width: 100%;
	}

	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		row-gap: 1rem;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		overflow: scroll;
	}
</style> -->
