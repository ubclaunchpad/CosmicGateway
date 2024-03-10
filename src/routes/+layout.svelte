<script lang="ts">
	import '../app.css';
	import { theme } from '../stores/theme';

	theme.subscribe((value) => {
		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<slot />
