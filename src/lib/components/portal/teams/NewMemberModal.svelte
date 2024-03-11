<script lang="ts">
	import { PUBLIC_TEAMS_API_URI , PUBLIC_USERS_API_URI} from '$env/static/public';
	import Button from '$lib/components/general/Button.svelte';
	import { onMount } from 'svelte';
	import { token } from '../../../../stores/auth';
	import { modalPanel } from '../../../../stores/modal';
	export let teamid: string | number;
    let users = [];
    $: matchedUsers = users.filter(user => user.email.toLowerCase().includes(search.toLowerCase()) || user.first_name.toLowerCase().includes(search.toLowerCase()) || user.last_name.toLowerCase().includes(search.toLowerCase()));
    let search = '';

    onMount(() => {
        getUsers().then(res => {
            users = res;
        });
    });

	let newMember = {
		team_role: 'other',
		userid: '',
        teamid: teamid
	};

    const roles = [
        'developer',
        'designer',
        'tech lead',
        'other'
    ];

    async function getUsers() {
        const res = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + $token
            }
        });
        const result = await res.json();
        return result.data;
    }

   
	async function addMember() {
		modalPanel.set({
			open: false,
			component: null,
			props: {}
		});
		const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams/${teamid}/members/${newMember.userid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
                Authorization: 'Bearer ' + $token
			},
			body: JSON.stringify(newMember)
		});
	}


</script>

<div class="flex flex-col gap-2 w-full flex-1">
	<h1 class="pt-6 text-lg font-bold">Add Member</h1>
	<form class=" py-4 rounded-xl w-full max-w-md flex flex-col flex-1 min-w-[600px]">
		<div class="flex flex-col flex-1 gap-4 w-full pb-10">
         
            {#if newMember.userid === ''}
      
			<div class="form-control w-full">
			
                <input
                    id="search"
                    type="text"
                    placeholder="Search for a user"
                    class="p-2 dark:bg-neutral-700 rounded"
                    bind:value={search}
                />
				<div class="flex flex-col gap-1 py-2 h-60 max-h-60 overflow-y-scroll">
                    {#if search.length > 0 && matchedUsers.length === 0}
                        <p class="text-center text-neutral-500 p-4">No users found</p>
              
                    {:else}
                    {#each matchedUsers as user}
                        <button
                            on:click={() => {
                                newMember.userid = user.id;
                            }}
                            class=" text-sm flex p-2 justify-between hover:shadow-sm flex-col lg:flex-row bg-neutral-50 rounded border border-base-300  w-full dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-800"
                        >
                            <p class="text-center">{user.first_name} {user.last_name}</p>
                            <p class="text-center">{user.email}</p>
                        </button>
                    {/each}
                    {/if}
                    </div>
			</div>
            {:else}

            <div class="flex gap2 items-center">
                <button
                    on:click={() => {
                        newMember.userid = '';
                    }}
                    class="text-sm flex p-2 justify-between hover:shadow-sm flex-col lg:flex-row bg-neutral-50 rounded border border-base-300  w-fit dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-800"
                >
                    <p class="text-center">Change User</p>
                </button>
                <p class="text-center text-neutral-500 p-4">Selected User: {matchedUsers.find(user => user.id === newMember.userid).first_name} {matchedUsers.find(user => user.id === newMember.userid).last_name}</p>
            </div>
                
            <div class="form-control">

                <label for="role" class="label">
                    <span class="label-text
                    dark:text-neutral-200">Role</span>
                </label>
                <select
                    id="role"
                    class="select dark:bg-neutral-700 rounded"
                    bind:value={newMember.team_role}
                >
                    {#each roles as role}
                        <option value={role}>{role}</option>
                    {/each}
                </select>
            </div>
			<Button class="text-md w-full" on:click={addMember}>Add Member</Button>
            {/if}
		</div>
	</form>
</div>
