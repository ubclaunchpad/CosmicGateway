
<script lang="ts">
    import {slide, fly } from 'svelte/transition';
    import CloseIcon from "$lib/components/general/icons/CloseIcon.svelte";
    import Icon from "$lib/components/general/Icon.svelte";

    export let show = false;

</script>

<div class="dropdown">
    <div class="box" >
        <button on:click={() => {show = !show}}>Manage Roles</button>
        {#if show}
        <div class="content" in:slide={{ y: 100, duration: 500 }} out:slide={{ y: 100, duration: 500 }} >
            <section class="roles">
                <div>
                    <select>
                        <option>Admin</option>
                        <option>Admin</option>
                        <option>Admin</option>
                        <option>Admin</option>
                    </select>
                    <button>Add</button>
                </div>
                <div>
                    <p>Role</p>
                    <Icon>
                        <CloseIcon/>
                    </Icon>
                </div>
                <div>
                    <p>Role</p>
                    <Icon>
                        <CloseIcon/>
                    </Icon>
                </div>







            </section>

        </div>
        {/if}
    </div>
</div>




<style lang="scss">

  .roles {
    display: flex;
    flex-direction: column;

    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.4rem;
      gap: 1rem;
        &:last-child {
            border-bottom: none;
        }
        >p {
            font-size: 0.8rem;
            font-weight: 500;
        }
        >button {
            border: none;
            font-size: 0.8rem;
            font-weight: 500;
            cursor: pointer;
        }
    }
  }
  .dropdown{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 100000;

  }

    .box {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;

      border-radius: var(--border-radius-small);


      .content {
        padding: 0.4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background-color: var(--color-bg-5);
        box-shadow: var(--box-shadow-small);
        border: 1px solid var(--color-border-1);
        border-radius: var(--border-radius-small);

      }
    }

</style>