<script lang="ts">
    import Icon from '../general/Icon.svelte';
    import DeleteIcon from '../general/icons/DeleteIcon.svelte';
    import EditIcon from '../general/icons/EditIcon.svelte';
    import Info from '../blocks/Info.svelte';
    import type {IRole} from "$lib/types/User";
    import {fetcher} from "$lib/util/fetcher";
    import {PUBLIC_USERS_API_URI} from "$env/static/public";
    import {STRATEGY_EMAIL} from "$lib/util/links";
    import {token} from "../../../stores/auth";
    import {onMount} from "svelte";
    let roles: IRole[] = [];
    let newRoleLabel: string;

    const getRoles = async () => {
        const response = await fetch(`${PUBLIC_USERS_API_URI}/roles/`, { method: 'GET' });
        roles = await response.json();
    };

    const deleteRole = async (roleId) => {
        await fetcher({
            URI: `${PUBLIC_USERS_API_URI}/roles/${roleId}`,
            requestInit: {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer  ${$token}`
                }
            },
            notifyError: {
                type: 'warning'
            },
            notifySuccess: {
                title: 'Success!',
                message: `Role successfully deleted`,
                type: 'success'
            }
        });
        await getRoles();
    }

    const addRole = async () => {
        await fetcher({
            URI: `${PUBLIC_USERS_API_URI}/roles`,
            requestInit: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer  ${$token}`
                },
                body: JSON.stringify({label: newRoleLabel})
            },
            notifyError: {
                title: 'Oops!',
                message: `Could not create role. if error persists, please contact us at ${STRATEGY_EMAIL}`,
                type: 'warning'
            },
            notifySuccess: {
                title: 'Success!',
                message: `Role successfully created`,
                type: 'success'
            }
        });
        await getRoles();
    }

    onMount(()=> {
        getRoles();
    })
</script>

<h2>Roles</h2>
        <Info>
            <p>
                Roles come with privileged access scopes. These scope are crucial to tailor what users see based
                on their roles. Please make any adjustments with that in mind and consult other leads.
            </p>
            <p>Alternatively, consider giving users more roles rather than adjusting the role itself.</p>
        </Info>

<Info>
    <p>
        Some roles are by design uneditable through the portal</p>
</Info>
        <ul class="items">

                {#each roles as role}
                    <li>
                        <div class="row">
                            <h5>
                                {role.label}
                            </h5>

                            <div class="actions">
                                <button>
                                    <Icon>
                                        <EditIcon />
                                    </Icon>
                                </button>
                                <button on:click={() => deleteRole(role.id)}>
                                    <Icon>
                                        <DeleteIcon />
                                    </Icon>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <p></p>
                            <div class="actions">
<!--                                <button class="expandable"> Scopes </button>-->
                            </div>
                        </div>
                    </li>
                {/each}

        </ul>

        <footer>
            <div class="new-role">
            <label>
                <input placeholder="role label" bind:value={newRoleLabel}>
            </label>
            <button class="btn btn-primary" on:click={addRole}>Add Role</button>
            </div>

        </footer>


<style lang="scss">

  footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 0.4rem 0;
  }
  .new-role {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: var(--border-radius-medium);
    column-gap: 1rem;
background-color: var(--color-bg-2);
    padding: 0.4rem;


    button {
        background-color: transparent;
      color: var(--color-text-1);
      padding: 0.4rem 1rem;

    }
  }
  h2 {
    padding-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--color-text-2);
  }
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    //border: 1px solid var(--color-border-1);

    gap: 1rem;
    padding: 1rem 0;

    li {
      display: flex;
      flex-direction: column;
      background-color: var(--color-bg-2);
      border-radius: var(--border-radius-medium);
      padding: 0.6rem;
      row-gap: 0.8rem;
      ;
    }

    .row {
      display: flex;

      justify-content: space-between;

      align-items: center;
      .actions {
        display: flex;
        column-gap: 2rem;
        .expandable {
          border: 1px solid var(--color-border-1);
          padding: 0.4rem 1rem;
          border-radius: var(--border-radius-medium);
          color: var(--color-text-1);

          &:hover {
            background-color: var(--color-bg-primary);
          }
        }
      }

      button {
        background-color: transparent;
      }

      p {
        font-size: 0.8rem;
        padding-left: 0.4rem;
        color: var(--color-text-2);
      }
    }
  }

</style>
