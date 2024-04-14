import type { INotification } from '$lib/types/INotification';
import { createSWR } from 'sswr';
import { CacheItem, DefaultCache } from 'swrev';
import { notificationStore } from '../../stores/notification';

export interface IFetchRequest<T> {
	URI: string;
	requestInit?: RequestInit;
	onSuccess?: (data: T) => void;
	onError?: (data: T) => void;
	notifySuccess?: Partial<INotification>;
	notifyError?: Partial<INotification>;
	useSWR?: boolean;
}

export const fetchWithAuth: (key: string) => Promise<any> = async (url) => {
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	});

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	console.log('fetchWithAuth', response);

	return response.json();
};

export async function fetcher<T>(request: IFetchRequest<T>) {
	const { URI, requestInit } = request;
	try {
		const response = await fetch(URI, {
			...requestInit,
			headers: {
				...requestInit?.headers,
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});

		const responseInfo = await response.json();

		if (response.status === 200) {
			request.onSuccess?.(responseInfo.data);
			if (request.notifySuccess) {
				const notification: INotification = {
					title: 'Success!',
					message: responseInfo.message || 'Request was successful',
					type: 'success',
					...request.notifySuccess
				};
				notificationStore.set({ ...notification });
			}
			return responseInfo;
		} else {
			if (request.notifyError) {
				const notification: INotification = {
					title: responseInfo.error.name,
					message: responseInfo.error.message,
					type: 'warning',
					...request.notifyError
				};
				notificationStore.set({ ...notification });
			}
			return responseInfo;
		}
	} catch (e) {
		console.warn(e);
	}
}

export class localStorageCache extends DefaultCache {
	private cache: Map<string, CacheItem<unknown>>;
	constructor() {
		super();
		this.cache = new Map();
	}

	// get<D>(key: string): CacheItem<D> {
	// 	if (this.cache.has(key)) {
	// 		return this.cache.get(key) as CacheItem<D>;
	// 	}
	// 	return new CacheItem({ data: JSON.parse(localStorage.getItem(key) as string) });
	// }

	// getFromCache<D>(key: string): CacheItem<D> {
	// 	let item = localStorage.getItem(key) as unknown as D;
	// 	item = JSON.parse(item as string);
	// 	console.log('getting cache', key, item);
	// 	const cItem = new CacheItem({ data: item });
	// 	return cItem;
	// }

	// set<D>(key: string, value: CacheItem<D>): void {
	// 	console.log('setting cache', key, value);
	// 	if (value.data instanceof Promise) {
	// 		value.data.then((data) => {
	// 			localStorage.setItem(key, JSON.stringify(data));
	// 			this.cache.set(key, value);
	// 			this.broadcast(key, value);

	// 		});
	// 	} else {
	// 		localStorage.setItem(key, JSON.stringify(value.data));
	// 		this.cache.set(key, value);
	// 		this.broadcast(key, value);
	// 	}

	// }

	// remove(key: string): void {
	// 	localStorage.removeItem(key);
	// 	this.cache.delete(key);
	// }

	// clear(): void {
	// 	localStorage.clear();
	// 	this.cache.clear();
	// }

	// has(key: string): boolean {
	// 	return localStorage.getItem(key) !== null;
	// }
}

export const cachedSWR = createSWR({
	// cache: new localStorageCache(),
	fetcher: fetchWithAuth
});
