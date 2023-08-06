<script lang="ts">
    import {userScopes} from "../../../stores/scopes";
    const scopes = $userScopes;
    import { PUBLIC_USERS_API_URI } from '$env/static/public';
    import Loader from '$lib/components/blocks/Loader.svelte';
    import {
        type IFaculty,
        type IRole,
        type ISpecialization,
        type IStanding,
        type IUser,
        type IUserPatchRequest,
        UserRequestMapper
    } from '$lib/types/User';
    import { getDate } from '$lib/util/user';
    import { STRATEGY_EMAIL } from '$lib/util/links';
    import { fetcher } from '$lib/util/fetcher';
    import {token} from "../../../stores/auth";
    import {notificationStore} from "../../../stores/notification";
    let user: IUser;
    export let editView = false;
    export let referenceUser: IUser;
    $: id = 1;
    let listOfFaculties: IFaculty = [];
    let listOfSpecializations: ISpecialization = [];
    let listOfStandings: IStanding = [];
    let roles: IRole[] = [];
    let querying = false;
    let hide = false;
    let changedFields = {};
    $: if (user && referenceUser) {
        changedFields = getChangedFields(referenceUser, user);
    }
    $: if (editView) {
        fetchFormDetails();
    }

    $: if (!user && referenceUser) {
        user = structuredClone(referenceUser);
    }

    function getChangedFields(originalRef: IUser, modifiedRef: IUser) {
        const originalFields: IUserPatchRequest = UserRequestMapper(originalRef);
        const modifiedFields: IUserPatchRequest = UserRequestMapper(modifiedRef);
        const changedFields: IUserPatchRequest = {};

        for (const key in originalFields) {
            const fieldKey = key as keyof IUserPatchRequest;
            if (JSON.stringify(originalFields[fieldKey]) !== JSON.stringify(modifiedFields[fieldKey])) {
                const partialkey = key as keyof IUserPatchRequest;
                changedFields[partialkey] = modifiedFields[fieldKey];
            }
        }
        return changedFields;
    }


    async function getUserInfo(refresh = false) {
        if (!referenceUser || refresh) {
            const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer  ${$token}`,
                    'Content-Type': 'application/json'
                }
            });
            referenceUser = await response.json();
            user = structuredClone(referenceUser);
        } else if (!user) {
            user = structuredClone(referenceUser);
            return;
        }
    }

    async function fetchFormDetails() {
        const response = await fetch('/api/resources', {
            method: 'GET'
        });
        const resources = await response.json();
        listOfFaculties = resources.listOfFaculties;
        listOfSpecializations = resources.listOfSpecializations;
        listOfStandings = resources.listOfStandings;
    }

    export const updateProfile = async () => {
        if (Object.keys(changedFields).length === 0) {
            notificationStore.set({
                title: 'Nothing to update',
                message: 'Please change one or more fields',
                type: 'warning'
            });
            return;
        }
        hide = true;

        await fetcher({
            URI: `${PUBLIC_USERS_API_URI}/users/${referenceUser.id}`,
            requestInit: {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer  ${$token}`
                },
                body: JSON.stringify(changedFields)
            },
            notifySuccess: {
                title: 'Account Updated',
                message: 'User account has been updated.',
                type: 'success'
            },
            notifyError: {
                title: 'Oops!',
                message: `Could not update profile. if error persists, please contact us at ${STRATEGY_EMAIL}`,
                type: 'warning'
            }
        });
        querying = true;
        hide = false;
    };

    $: if (querying) {
        getUserInfo(true).then(() => (querying = false));
    }
</script>

<div class="profile">

                {#if hide}
                    <Loader width={'100%'} height={'100%'} />
                {:else}

                    <section class="grid-row">
                        {#if editView}
                            <section class="attribute">
                                <p>Preferred Name</p>
                                <input bind:value={user.pref_name} />
                            </section>
                        {/if}
                    </section>

                    <section class="grid-row">
                        <section class="attribute">
                            <p>Name</p>
                            {#if !editView}
                                <p>{referenceUser.first_name}</p>
                            {:else}
                                <input bind:value={user.first_name} />
                            {/if}
                        </section>
                    </section>

                    <section class="grid-row">
                        <section class="attribute">
                            <p>Last name</p>
                            {#if !editView}
                                <p>{referenceUser.last_name}</p>
                            {:else}
                                <input bind:value={user.last_name} />
                            {/if}
                        </section>
                    </section>


                    <section class="grid-row">
                        <section class="attribute">
                            <p>Email</p>
                            <p>{user.email}</p>
                        </section>

                    </section>
                    <section class="grid-row">

                        <section class="attribute">
                            <p>Username</p>
                            {#if !editView}
                                <p>{referenceUser.username}</p>
                            {:else}
                                <input bind:value={user.username} />
                            {/if}
                        </section>

                    </section>



                    <h3>Background</h3>

                    <section class="grid-row">
                        <section class="attribute">
                            <p>Faculty</p>
                            {#if !editView}
                                <p>{referenceUser.faculty.label}</p>
                            {:else}
                                <select bind:value={user.faculty.id}>
                                    {#each listOfFaculties as field}
                                        <option selected={user.faculty.id === field.id} value={field.id}
                                        >{field.label}</option
                                        >
                                    {/each}
                                </select>
                            {/if}
                        </section>
                    </section>
                    <section class="grid-row">

                        <section class="attribute">
                            <p>Specialization</p>
                            {#if !editView}
                                <p>{referenceUser.specialization.label}</p>
                            {:else}
                                <select bind:value={user.specialization.id}>
                                    {#each listOfSpecializations as field}
                                        <option selected={user.specialization.id === field.id} value={field.id}
                                        >{field.label}
                                        </option>
                                    {/each}
                                </select>
                            {/if}
                        </section>
                    </section>

                    <section class="attribute">
                        <p>Standing</p>
                        {#if !editView}
                            <p>{referenceUser.standing.label}</p>
                        {:else}
                            <select bind:value={user.standing.id}>
                                {#each listOfStandings as field}
                                    <option selected={user.standing.id === field.id} value={field.id}
                                    >{field.label}</option
                                    >
                                {/each}
                            </select>
                        {/if}
                    </section>

                    <section class="attribute">
                        <p>Resume</p>
                        {#if !editView}
                            <p>{referenceUser.resume_link}</p>
                        {:else}
                            <input bind:value={user.resume_link} />
                        {/if}
                    </section>

                    <section class="grid-row">
                        <section class="attribute">
                            <p>Created At</p>
                            <p class="stamp">{getDate(referenceUser.created_at)}</p>
                        </section>

                        <section class="attribute">
                            <p>Updated At</p>
                            <p class="stamp">{getDate(referenceUser.updated_at)}</p>
                        </section>
                    </section>
                {/if}
</div>

<!--    <div class="bottombar" slot="bottom-bar">-->

<!--        <footer>-->
<!--            {#if scopes.has('admin:write')}-->

<!--                <button class="btn btn-primary" >Edit user information</button>-->
<!--                <button class="btn btn-primary" >Delete user</button>-->
<!--            {/if}-->

<!--        </footer>-->

<!--    </div>-->




<style lang="scss">
  .profile-content {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    overflow: hidden;

    :global(button) {
      padding: 0.3rem 0.6rem;
      border-radius: var(--border-radius-small);
    }
  }



  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    gap: 0.5rem;
    button {
      padding: 0.3rem 0.6rem;
      border-radius: var(--border-radius-small);
    }


  }

  .profile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 100%;

    h2 {
      font-size: 1rem;

    }

    h3 {
      font-size: 0.9rem;
      padding: 1rem 0 1rem;
    }

    .grid-row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > section {
        flex: 1;
      }
      &.top {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

      }
    }

    .attribute {
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: flex-start;
      &.role {
        position: relative;
        display: flex;
        flex: 1;
        width: 100%;

        justify-content: flex-end;

      }
      > p {
        padding: 0.5rem 0.4rem;
        font-size: 0.9rem;
        &:first-child {
          color: var(--color-text-2);
          font-weight: 400;
          font-size: 0.8rem;
        }
        &:last-child {
          border: 1px solid var(--color-border-0);
          color: var(--color-text-1);
          border-radius: var(--border-radius-small);
          background-color: var(--color-bg-3);
        }
        &.stamp {
          color: var(--color-text-2);
          background-color: inherit;
          border-color: transparent;
          font-weight: bold;
        }
      }

      input,
      select {
        padding: 0.5rem 0.4rem;
        border: 1px solid var(--color-border-0);
        color: var(--color-text-2);
        background-color: var(--color-bg-4);
        border-radius: var(--border-radius-medium);
        width: 100%;
        &:focus {
          border-color: var(--color-text-primary);
        }
      }
    }
  }
</style>
