import { token, fetchUser } from '../../stores/auth';

export const load = async () => {
	let userToken;
	token.subscribe((value) => {
		userToken = value;
	});
	if (userToken) {
		try {
			await fetchUser(userToken);
		} catch (e) {
			console.log(e);
		}
	}
	return {};
};

export const ssr = false;
