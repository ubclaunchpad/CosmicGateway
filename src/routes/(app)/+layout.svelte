<script>
	import '../styles.scss';
	import '../variables.scss';
	import Notification from '$lib/components/general/Notification.svelte';
</script>

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy-Report-Only"
		content="script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;"
	/>
	<script src="https://accounts.google.com/gsi/client" defer></script>
</svelte:head>

<slot />
<Notification />
