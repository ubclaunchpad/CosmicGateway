import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { error, type Load } from '@sveltejs/kit';
import { token } from '../../stores/auth';

export const load: Load = async () => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});

	const res = await fetch(`${PUBLIC_USERS_API_URI}/teams`, {
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + userToken
		}
	});

	const { teams } = await res.json();

	if (res.ok) {
		return { teams };
	}

	throw error(404, 'Unable to fetch teams');
};
