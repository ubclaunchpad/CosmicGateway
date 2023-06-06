<script lang="ts">
	import Info from '$lib/components/blocks/Info.svelte';
	import ApplicationSteps from './ApplicationSteps.svelte';
	export let projectId: number = 1;
	export let postId: number = 1;
</script>

<article>
	<h1>Application</h1>
	<Info>
		<p>Fill out the application below to apply for a position</p>
		<p>skip application process by signing up</p>
	</Info>

	<ApplicationSteps />

	<div class="bottombar" />
</article>

<footer>
	<button>Submit Application</button>
	<p>After submitting an application you should recieve an automated email from us</p>
</footer>

<style lang="scss">
	article {
		height: 100%;
	}
</style>
