import { browser } from '$app/environment';
import { writable } from 'svelte/store';
export const isAuthenticated = writable(false);
const stored = browser ? localStorage.token : null;
export const token = writable(stored || null);

token.subscribe((value) => {
	if (browser) {
		if (value !== null) {
			localStorage.setItem('token', value);
		}
	}
});

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

export const userStore = writable<Partial<UserI>>({});
