import { writable } from 'svelte/store';
import { PUBLIC_USERS_API_URI } from '$env/static/public';
import type { IRole } from '$lib/types/User';

export const userRoles = writable<IRole[]>([]);
export const userScopes = writable<Set<string>>(new Set());

export const getRolesAndScopes = async (id: number) => {
	const token = localStorage.getItem('token');
	const response = await fetch(`${PUBLIC_USERS_API_URI}/users/${id}/roles/`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	if (response.status === 200) {
		const roles = (await response.json()) as IRole[];
		userRoles.set(roles);
		const scopes = new Set<string>();
		console.log(roles);
		roles.forEach((role) => {
			role.scopes.forEach((scope) => {
				scopes.add(scope);
			});
		});
		userScopes.set(scopes);
	}
};
