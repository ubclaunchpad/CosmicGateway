<script lang="ts">
	export let status: string;
	const statusColourMapper: { [status: string]: string } = {
		'in progress': '#809CFF',
		'Ready for Review': '#fbbf24',
		'Ready for Deployment': '#10b981',
		Deployed: '#00C48C',
		Cancelled: '#ef4444',
		Completed: '#10b981'
	};
</script>

<div class="text-white rounded-3xl w-fit px-4 py-0 h-fit flex items-center text-sm" style="background-color: {statusColourMapper[status]}">
	<p>{status}</p>
</div>
