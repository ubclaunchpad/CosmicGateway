import { onDestroy, type SvelteComponent } from 'svelte';
import { writable, type Writable } from 'svelte/store';

type SidePanelProp = {
	component: typeof SvelteComponent | null | NewableComponent;
	props: Record<string, any>; // Use a more accommodating type for props
	open: boolean;
};

function createAutoCleanupStore(initialValue) {
	let numSubscribers = 0;
	const { subscribe, set, update } = writable(initialValue, () => {
		numSubscribers++;
		return () => numSubscribers--;
	});

	function autoSubscribe(run, invalidate = () => {}) {
		const subscriber = subscribe(run, invalidate);

		onDestroy(() => {
			subscriber(); // Unsubscribe
			if (numSubscribers === 0) {
				// Check if there are no more subscribers
				// Perform your cleanup logic here
				set({ component: null, props: {}, open: false }); // Reset the store
			}
		});

		return subscriber;
	}

	return {
		subscribe: autoSubscribe,
		set,
		update
	};
}

type NewableComponent = new (...args: any[]) => SvelteComponent;

export const sidePanel: Writable<SidePanelProp> = createAutoCleanupStore({
	component: null,
	props: {},
	open: false
});
