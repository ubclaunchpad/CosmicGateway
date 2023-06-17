import { token, fetchUser } from '../../stores/auth';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});
	if (null === userToken || undefined === userToken || '' === userToken) {
		throw redirect(307, '/signin');
	} else {
		try {
			await fetchUser(userToken);
		} catch (e) {
			throw redirect(307, '/signin');
		}
	}
	return {};
};

export const ssr = false;
// export const prerender = false;
