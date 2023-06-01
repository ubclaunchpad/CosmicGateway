<script>
	import Info from '$lib/components/blocks/Info.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function application() {
		dispatch('message');
	}
</script>

<article>
	<h2>Overview</h2>

	<Info>
		<p>Querying is done by sending a POST request to the server with the following body:</p>
	</Info>

	<section>
		<p>Status</p>
		<p>Active</p>
	</section>

	<section>
		<p>Current Team size</p>
		<p>5</p>
	</section>

	<section>
		<p>Open roles</p>
		<p>2</p>
	</section>

	<section>
		<p>Github</p>
		<p><a href="mailto:strategy@ubcluanchpad.com">launchpad/intertia</a></p>
	</section>

	<section>
		<p>Timeline</p>
		<Info><p>Insight tool is in progress</p></Info>
	</section>
	<section>
		<a
			class="github-button"
			href="https://github.com/ubclaunchpad/Essentially"
			data-icon="octicon-star"
			data-size="large"
			aria-label="Star ff/ff on GitHub">Star</a
		>
		<a
			class="github-button"
			href="https://github.com/ubclaunchpad/Essentially/subscription"
			data-icon="octicon-eye"
			data-size="large"
			aria-label="Watch ff/ff on GitHub">Watch</a
		>
	</section>
</article>

<footer>
	<button on:click={application}>Interested in joining?</button>

	<p>Other Inquiry: <a href="mailto:strategy@ubcluanchpad.com">strategy@ubcluanchpad.com</a></p>
</footer>

<style lang="scss">
	article section {
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-bg-1);
	}
</style>
