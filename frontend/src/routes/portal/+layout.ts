import { PUBLIC_API_URI } from '$env/static/public';
import { userStore, token } from '../../stores/auth';
import { redirect } from '@sveltejs/kit';

const fetchUser = async (userToken: string) => {
	try {
		const response = await fetch(`${PUBLIC_API_URI}/users/me`, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + userToken
			}
		});
		const user = await response.json();
		userStore.set(user);
	} catch (error) {
		console.error(error);
	}
};

export const load = async () => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});
	if (null === userToken || undefined === userToken || '' === userToken) {
		throw redirect(307, '/signin');
	} else {
		await fetchUser(userToken);
	}
	return {};
};

export const ssr = false;
// export const prerender = false;
