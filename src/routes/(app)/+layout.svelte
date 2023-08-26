<script>
	import '../styles.scss';
	import '../variables.scss';
	import Notification from '$lib/components/general/Notification.svelte';
</script>

<svelte:head>
	<script nonce="%sveltekit.nonce%" src="https://accounts.google.com/gsi/client"></script>
</svelte:head>

<slot />
<Notification />
