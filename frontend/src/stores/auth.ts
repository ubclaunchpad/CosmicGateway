import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { PUBLIC_API_URI } from '$env/static/public';
import { writable } from 'svelte/store';
const stored = browser ? localStorage.token : null;
export const token = writable(stored || null);
export const setLocalToken = (value: string) => {
	if (browser) {
		localStorage.setItem('token', value);
	}
};
token.subscribe(setLocalToken);
export const signout = () => {
	token.set(null);
	userStore.set(undefined);
	if (browser) {
		localStorage.removeItem('token');
	}
	goto('/signin');
};

interface UserI {
	userId: number;
	email: string;
	firstName: string;
	prefName: string;
	lastName: string;
	resumeLink: string;
	standing: number;
	faculty: number;
	socialMedia: number[];
	programs: number[];
}

export const userStore = writable<Partial<UserI> | undefined>(undefined);
export const fetchUser = async (userToken: string) => {
	console.log('fetching user');
	const response = await fetch(`${PUBLIC_API_URI}/users/me`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});
	if (response.status === 200) {
		const user = await response.json();
		if (browser) {
			userStore.set(user);
			token.set(userToken);
		}
	} else {
		throw new Error('Failed to fetch user');
	}
};
