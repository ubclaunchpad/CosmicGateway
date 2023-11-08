<script lang="ts">
	import Icon from '$lib/components/general/Icon.svelte';
	import ArrowRightIcon from '$lib/components/general/icons/ArrowRightIcon.svelte';
import { onMount } from 'svelte';
    let teams: string[] = [];
    
    export let data;

    onMount(() => {
        fetchTeams();
    })

    const fetchTeams = async () => {
        teams = data.teams
    }

    function handleClick(teamName: string) {
    // Handle the click event
    console.log(`Clicked on ${teamName}`);
    // Here you could navigate to a team page or perform some other action
  }
  </script>
  <div class="teamsList">
    <h1>Teams</h1>
    <ul>
        {#each teams as team}
      <li>
        <button on:click={() => handleClick(team)}>
            <div class="teamLabel">
              <div class="labelContent">
                <p class="teamName">{team}</p>
                <p class="lastEdited">last edited 2 minutes ago</p>
              </div>
              <div class="arrowIcon">
                <Icon>
                    <ArrowRightIcon/>
                  </Icon>
              </div>
            </div>
          </button>
        
      </li>
    {/each}
      </ul>
  </div>
  
  <style lang="scss">

    .teamLabel {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 65px;
        padding: 0 20px;
        background-color: rgb(227, 225, 225);
        border-bottom-left-radius: 31px;
        border-bottom-right-radius: 31px;
        box-sizing: border-box;
        &:hover {
            background-color: --color-bg-primary;
        }
    }

    .labelContent {
        display: flex;
        flex-direction: column;
    }

    .teamName {
        font-weight: bold;
        margin: 0;
    }

    .lastEdited {
        font-size: 0.8em;
        margin: 0;
    }

    .arrowIcon {
        // use a proper arrow icon here
        font-size: 1.2em;
        color: black;
        fill: black;
        stroke: black;
    }

    button {
        width: 301px;
        height: 361px;
        background-color: rgb(234, 234, 234);
        padding: 10px 20px;
        border-radius: 31px;
        margin-bottom: 0px;
        cursor: pointer;
        transition: background-color 0.3s;
        text-align: left;

        &:hover {
            background-color: var(--color-bg-primary);
        }
    }
    
    h1 {
        margin-bottom: 0;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    .teamsList {
        width: 100%;
        overflow-y: auto;
    }

    ul {
        list-style: none;
    }

    li {
        position: relative;
        margin: 26.5px;
    }
    
  </style>
  