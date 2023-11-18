<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from '$lib/components/general/Icon.svelte';
	import ArrowRightIcon from '$lib/components/general/icons/ArrowRightIcon.svelte';
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
	let teams: string[] = [];

	export let data;

	onMount(() => {
		fetchTeams();
	});

	const fetchTeams = async () => {
		console.log(data.teams);
		teams = data.teams;
	};
</script>

<MainPage>
	<div slot="main" class="teamsList">
		<h1 class="px-6 text-2xl">Teams</h1>
		<ul>
			{#each teams as team}
				<li>
					<a href="/portal/teams/{team}" class="teamItem">
						<div class="teamLabel">
							<div class="labelContent">
								<p class="teamName">{team}</p>
								<p class="lastEdited">last edited 2 minutes ago</p>
							</div>
							<div class="arrowIcon">
								<Icon>
									<ArrowRightIcon />
								</Icon>
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</MainPage>

<style lang="scss">
	.teamItem {
		display: block;
		width: 301px;
		height: 361px;
		background-color: rgb(234, 234, 234);
		padding: 10px 20px;
		border-radius: 31px;
		margin-bottom: 0px;
		cursor: pointer;
		transition: background-color 0.3s;
		text-align: left;
		position: relative;
		margin: 26.5px;

		&:hover {
			background-color: var(--color-bg-primary);
		}

		.teamLabel {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 65px;
			padding: 0 20px;
			background-color: rgb(227, 225, 225);
			border-bottom-left-radius: 31px;
			border-bottom-right-radius: 31px;
			box-sizing: border-box;
		}
	}

	.labelContent {
		display: flex;
		flex-direction: column;
	}

	.teamName {
		font-weight: regular;
		margin: 0;
	}

	.lastEdited {
		font-size: 0.8em;
		margin: 0;
	}

	.arrowIcon {
		font-size: 1.2em;
		color: black;
		fill: black;
		stroke: black;
	}

	h1 {
		margin-bottom: 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}

	.teamsList {
		width: 100%;
		overflow-y: auto;
	}
</style>
