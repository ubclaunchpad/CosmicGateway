<script lang="ts">
	import Icon from './Icon.svelte';
	import { DiscordIcon, FigmaIcon, GithubIcon, LinkIcon, MediumIcon, YoutubeIcon } from './icons';
	export let domain: string;

	function resourcesIconMapper(domain: string) {
		switch (domain) {
			case 'youtube':
				return YoutubeIcon;
			case 'discord':
				return DiscordIcon;
			case 'medium':
				return MediumIcon;
			case 'github':
				return GithubIcon;
			case 'figma':
				return FigmaIcon;
			default:
				return LinkIcon;
		}
	}
</script>

<Icon>
	<svelte:component this={resourcesIconMapper(domain)} />
</Icon>
