import type { INotification } from '$lib/types/INotification';
import { writable } from 'svelte/store';
export const notificationStore = writable<INotification | undefined>(undefined);
