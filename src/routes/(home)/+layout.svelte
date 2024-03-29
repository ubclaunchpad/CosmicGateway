<script>
	import Notification from '$lib/components/general/Notification.svelte';
	import Fullpage from '$lib/components/layouts/Fullpage.svelte';
</script>

<Fullpage>
	<slot />
</Fullpage>
<Notification />
