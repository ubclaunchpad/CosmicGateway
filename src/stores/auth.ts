import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { writable } from 'svelte/store';
import { getRolesAndScopes } from './scopes';
const stored = browser ? localStorage.token : null;
export const token = writable(stored || null);

export const setLocalToken = (value: string | undefined) => {
	if (browser) {
		if (!value) return localStorage.removeItem('token');
		localStorage.setItem('token', value);
	}
};

token.subscribe(setLocalToken);
export const signout = async () => {
	token.set(undefined);
	userStore.set(undefined);
	if (browser) {
		localStorage.removeItem('token');
	}
	await goto('/auth');
};

export interface IUserMeta {
	id: number;
	email: string;
}

export const userStore = writable<IUserMeta | undefined>(undefined);
export const fetchUser = async (userToken: string) => {
	try {

	
	const response = await fetch(`${PUBLIC_USERS_API_URI}/users/me`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});
	if (response.status === 200) {
		const user = (await response.json()) as IUserMeta;
		if (browser) {
			userStore.set(user);
			token.set(userToken);
			// await getRolesAndScopes(user.id);
		}
	} 
	} catch (e) {

	const responseTest = await fetch(`api/test/users/me`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});

	if (responseTest.status === 200) {
		const user = (await responseTest.json()) as IUserMeta;
		if (browser) {
			userStore.set(user);
			token.set(userToken);
		}
	} else {
		await signout();
	}
	}

};
