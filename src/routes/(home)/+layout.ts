import { redirect } from '@sveltejs/kit';
import { fetchUser, token } from '../../stores/auth';

export const load = async ({ params }) => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});
	if (null === userToken || undefined === userToken || '' === userToken) {
		throw redirect(307, '/auth');
	} else {
		try {
			console.log('fetchUser', userToken);
			await fetchUser(userToken);
		} catch (e) {
			console.error(e);
			throw redirect(307, '/auth');
		}
	}
	return {};
};

export const ssr = false;
