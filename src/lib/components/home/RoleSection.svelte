<script lang="ts">
	const developerIcon ='src/lib/components/general/icons/illustrations/developerRole.svg';
	const designerIcon = 'src/lib/components/general/icons/illustrations/designerRole.svg';
	const designLeadIcon = 'src/lib/components/general/icons/illustrations/designLeadRole.svg';
	const coPresidentIcon = 'src/lib/components/general/icons/illustrations/CopresRole.svg';
	const techLeadRoleIcon = 'src/lib/components/general/icons/illustrations/techLeadRole.svg';
	const strategyRoleIcon = 'src/lib/components/general/icons/illustrations/strategyRole.svg';

	import { fade } from 'svelte/transition';
	import type { IRoleComponent } from '$lib/types/types';
	import {
		DEVELOPER_ROLE_LINK,
		DESIGNER_ROLE_LINK,
		CO_PRESIDENT_ROLE_LINK,
		STRATEGY_ROLE_LINK,
		DESIGN_LEAD_ROLE_LINK,
		TECH_LEAD_ROLE_LINK
	} from '$lib/util/links';
	import RoleCell from "$lib/components/home/RoleCell.svelte";

	const roles: IRoleComponent[] = [
		{
			title: 'Developer',
			anchorLink: DEVELOPER_ROLE_LINK,
			image: developerIcon,
			description:
				'As a developer, you will be working with other developers and designers to build a project for 4-8 months!'
		},
		{
			title: 'Designer',
			anchorLink: DESIGNER_ROLE_LINK,
			image: designerIcon,
			description:
				'As a designer, you will create the visual identity of the project and work with developers to build a project for 4-8 months!'
		},

		{
			title: 'Strategy & Operations',
			anchorLink: STRATEGY_ROLE_LINK,
			image: strategyRoleIcon,
			description:
				'As a strategy & operations member, you will be working with other members to help with the internal operations of the club and help with the strategy of the club.'
		},

		{
			title: 'Tech Lead',
			anchorLink: TECH_LEAD_ROLE_LINK,
			image: techLeadRoleIcon,
			description:
				'As a tech lead, you will lead a team of developers and designers to build a project for 4-8 months!'
		},

		{
			title: 'Design Lead',
			anchorLink: DESIGN_LEAD_ROLE_LINK,
			image: designLeadIcon,
			description:
				'As a design lead, you will lead a team of designers and developers to build a project for 4-8 months!'
		},
		{
			title: 'Co-president',
			anchorLink: CO_PRESIDENT_ROLE_LINK,
			image: coPresidentIcon,
			description:
				'As a co-president, you will lead the club and help with the internal operations of the club.'
		}
	];
	let scrollY = 0;
	let divH = 0;
	// $: if (divH != 0) console.log(divH.getBoundingClientRect().top);
</script>

<svelte:window bind:scrollY />
<div class="header" bind:this={divH}>
	<h3>Opportunities</h3>
	<p>
		We are looking for passionate students who are interested in building projects that will help
		the community
	</p>
</div>
<div class="roles">
	{#each roles as role}
		<div in:fade={{ delay: 500 }} out:fade class="wrapper">
			<RoleCell {role} />
		</div>
	{/each}
</div>

<style lang="scss">
	.roles {
		display: grid;
		grid-template-columns: repeat(3, 380px);
		justify-items: center;
		justify-content: center;
		width: 100%;
		padding: 3rem 0;
		@media screen and (max-width: 1100px) and (min-width: 550px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 550px) {
			grid-template-columns: repeat(1, 1fr);
		}

		.wrapper {
			//border: 1px dashed var(--color-border-2);
			padding: 1.2rem;
			//padding: 1.2rem;

			//&:nth-child(1) {
			//	border-top: none;
			//	border-right: none;
			//}
			//
			//&:nth-child(2) {
			//	border-top: none;
			//}
			//
			//&:nth-child(3) {
			//	border-top: none;
			//	border-left: none;
			//}
			//
			//&:nth-child(4) {
			//	border: none;
			//}
			//
			//&:nth-child(5) {
			//	border-bottom: none;
			//	border-top: none;
			//}
			//
			//&:nth-child(6) {
			//	border-bottom: none;
			//	border-top: none;
			//	border-left: none;
			//}
		}
	}
</style>
