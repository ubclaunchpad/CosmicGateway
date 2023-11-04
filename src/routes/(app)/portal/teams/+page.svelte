<script lang="ts">
	import { onMount } from 'svelte';
    let teams: string[] = [];
    //let teams: string[] = ['Team A', 'Team B', 'Team C', 'Team D'];
    export let data;

    onMount(() => {
        fetchTeams();
    })

    const fetchTeams = async () => {
        teams = data.teams
    }
  </script>
  <div>
    <h1>Teams</h1>
    <ul>
        {#each teams as team}
          <li>{team}</li>
        {/each}
      </ul>
  </div>
  
  
 
  
  <style lang="scss">
    h1 {
        margin-bottom: 0;
    }

    ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      border-radius: 15px; 
      padding: 10px 20px; 
      margin-bottom: 10px; 
      width: 500px;
      background-color: grey;
    }
  </style>
  