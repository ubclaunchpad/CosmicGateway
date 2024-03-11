<script lang="ts">
	import '../app.css';
	import { theme } from '../stores/theme';
	import { browser } from '$app/environment';

	if (browser) {
		theme.subscribe((value) => {
			if (value === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	}
</script>

<slot />
