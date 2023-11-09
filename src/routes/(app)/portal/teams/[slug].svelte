<!-- src/routes/teams/[slug].svelte -->
<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let teamName = '';
  
    onMount(() => {
      // params.slug comes from the name of the file [slug].svelte
      // This assumes that the slug is the team's name.
      // Replace with actual property name if different.
      
    });
  </script>
  
  <h1>{teamName}</h1>
  