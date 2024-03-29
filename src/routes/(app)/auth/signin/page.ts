import { redirect } from '@sveltejs/kit';
import { fetchUser, token } from '../../../../stores/auth';

export const load = async () => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});
	if (userToken) {
		try {
			await fetchUser(userToken);
		} catch (e) {
			throw redirect(300, '/sign-in');
		}
	}
	return {};
};

export const ssr = false;
