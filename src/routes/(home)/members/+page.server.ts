import { error, type Load } from '@sveltejs/kit';

import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { token } from '../../../stores/auth';

export const load: Load = async () => {
	let userToken;

	token.subscribe((value) => {
		userToken = value;
	});

	const res = await fetch(`${PUBLIC_USERS_API_URI}/users`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});

	const { data } = await res.json();

	if (res.ok) {
		return { users: data };
	}

	throw error(404, 'Unable to fetch users');
};
