<!--<script lang="ts">-->
<!--	import { onMount } from 'svelte';-->
<!--	import Modal from '../layouts/Modal.svelte';-->
<!--	import Icon from '../general/Icon.svelte';-->
<!--	import DeleteIcon from '../general/icons/DeleteIcon.svelte';-->
<!--	import EditIcon from '../general/icons/EditIcon.svelte';-->
<!--	import Info from '../blocks/Info.svelte';-->
<!--	export let isOpen: boolean;-->

<!--	let res;-->

<!--	const getResources = async () => {-->
<!--		const response = await fetch('/api/resources', { method: 'GET' });-->
<!--		res = (await response.json()).listOfRoles;-->
<!--	};-->

<!--	onMount(() => {-->
<!--		getResources();-->
<!--	});-->
<!--</script>-->

<!--<Modal title={'Manage Resources'} on:modalevent isModalOpen={isOpen} type="center">-->
<!--	<div class="modal-content" slot="modal-content">-->
<!--		<Info>-->
<!--			<p>-->
<!--				Roles come privileged access scopes. These scope are crucial to tailor what users see based-->
<!--				on their roles. Please make any adjustments with that in mind and consult other leads.-->
<!--			</p>-->
<!--			<p>Alternatively, consider giving users more roles rather than adjusting the role itself.</p>-->
<!--		</Info>-->
<!--		<ul class="items">-->
<!--			{#if res}-->
<!--				{#each res as role}-->
<!--					<li>-->
<!--						<div class="row">-->
<!--							<h5>-->
<!--								{role.name}-->
<!--							</h5>-->

<!--							<div class="actions">-->
<!--								<button>-->
<!--									<Icon>-->
<!--										<EditIcon />-->
<!--									</Icon>-->
<!--								</button>-->
<!--								<button>-->
<!--									<Icon>-->
<!--										<DeleteIcon />-->
<!--									</Icon>-->
<!--								</button>-->
<!--							</div>-->
<!--						</div>-->
<!--						<div class="row">-->
<!--							<p>Description</p>-->
<!--							<div class="actions">-->
<!--								<button class="expandable"> Scopes </button>-->
<!--							</div>-->
<!--						</div>-->
<!--					</li>-->
<!--				{/each}-->
<!--			{/if}-->
<!--		</ul>-->
<!--	</div>-->

<!--	<div class="bottombar" slot="bottom-bar">-->
<!--		<footer>-->
<!--			&lt;!&ndash; <button disabled={isEqual}>Save</button> &ndash;&gt;-->
<!--		</footer>-->
<!--	</div>-->
<!--</Modal>-->

<!--<style lang="scss">-->
<!--	.items {-->
<!--		display: flex;-->
<!--		flex-direction: column;-->
<!--		border: 1px solid var(&#45;&#45;color-border-1);-->
<!--		border-radius: var(&#45;&#45;border-radius-medium);-->

<!--		li {-->
<!--			display: flex;-->
<!--			flex-direction: column;-->
<!--			border-bottom: 1px solid var(&#45;&#45;color-border-1);-->
<!--			background-color: var(&#45;&#45;color-bg-2);-->
<!--			padding: 0.6rem;-->
<!--			row-gap: 0.8rem;-->
<!--		}-->

<!--		.row {-->
<!--			display: flex;-->

<!--			justify-content: space-between;-->
<!--			align-items: center;-->
<!--			.actions {-->
<!--				display: flex;-->
<!--				column-gap: 2rem;-->
<!--				.expandable {-->
<!--					border: 1px solid var(&#45;&#45;color-border-1);-->
<!--					padding: 0.4rem 1rem;-->
<!--					border-radius: var(&#45;&#45;border-radius-medium);-->
<!--					color: var(&#45;&#45;color-text-1);-->

<!--					&:hover {-->
<!--						background-color: var(&#45;&#45;color-bg-primary);-->
<!--					}-->
<!--				}-->
<!--			}-->

<!--			button {-->
<!--				background-color: transparent;-->
<!--			}-->

<!--			p {-->
<!--				font-size: 0.8rem;-->
<!--				padding-left: 0.4rem;-->
<!--				color: var(&#45;&#45;color-text-2);-->
<!--			}-->
<!--		}-->
<!--	}-->

<!--	footer {-->
<!--		display: flex;-->
<!--		flex-direction: row;-->
<!--		align-items: center;-->
<!--		justify-content: center;-->
<!--		column-gap: 1rem;-->
<!--		border-top: 1px solid var(&#45;&#45;color-border-0);-->
<!--		padding: 0.4rem 0;-->
<!--		width: 100%;-->
<!--	}-->

<!--	.modal-content {-->
<!--		padding: 1rem;-->
<!--	}-->
<!--</style>-->
