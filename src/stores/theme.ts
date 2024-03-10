import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable('light');

if (browser) {
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme) {
		theme.set(storedTheme);
	} else {
		theme.set('light');
		localStorage.setItem('theme', 'light');
	}
}

export function updateTheme(value: string) {
	theme.set(value);
	localStorage.setItem('theme', value);
}
