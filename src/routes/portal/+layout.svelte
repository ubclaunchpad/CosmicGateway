<script>
	import Fullpage from '$lib/components/layouts/Fullpage.svelte';
	import Navbar from '$lib/components/layouts/portal/Navbar.svelte';
</script>

<Fullpage>
	<Navbar on:navigate={() => {}} slot="nav" />
	<slot />
</Fullpage>
