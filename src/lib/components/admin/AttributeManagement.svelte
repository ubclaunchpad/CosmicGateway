<script lang="ts">
    import type {IDict} from "$lib/types/User";
    import {PUBLIC_USERS_API_URI} from "$env/static/public";
    import {onMount} from "svelte";
    import Info from "$lib/components/blocks/Info.svelte";
    let attributes: IDict<string>[] = [];
    export let attrEndpointName: string;

    const getAttributes = async () => {
        const response = await fetch(`${PUBLIC_USERS_API_URI}/${attrEndpointName}`, { method: 'GET' });
        attributes = await response.json();
    };

    onMount(()=> {
        getAttributes();
    })
</script>

<h2>{attrEndpointName}</h2>

<Info>
    <p>
        Currently, we don't support editing through the UI directly. Please use the API endpoints to edit the attributes.
    </p>
</Info>

<ul class="items">
    {#each attributes as attr}
        <li>
            <div class="row">
                <h5>
                    {attr.label}
                </h5>

                <div class="actions">

                </div>
            </div>
            <div class="row">
                <p></p>
                <div class="actions">
                </div>
            </div>
        </li>
    {/each}

</ul>

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
