import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { writable } from 'svelte/store';
const stored = browser ? localStorage.token : null;
export const token = writable(stored || null);
export const setLocalToken = (value: string | undefined) => {
	if (browser) {
		if (!value) return localStorage.removeItem('token');
		localStorage.setItem('token', value);
	}
};
token.subscribe(setLocalToken);
export const signout = () => {
	token.set(undefined);
	userStore.set(undefined);
	if (browser) {
		localStorage.removeItem('token');
	}
	goto('/signin');
};

export interface UserI {
	id: number;
	email: string;
	firstName: string;
	prefName: string;
	lastName: string;
	resumeLink: string;
	standing: any;
	faculty: any;
	specialization: any;
}

export const userStore = writable<UserI | undefined>(undefined);
export const fetchUser = async (userToken: string) => {
	console.log('fetching user');
	const response = await fetch(`${PUBLIC_USERS_API_URI}/users/me`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});
	if (response.status === 200) {
		const user = (await response.json()) as UserI;
		if (browser) {
			userStore.set(user);
			token.set(userToken);
		}
	} else {
		throw new Error('Failed to fetch user');
	}
};
