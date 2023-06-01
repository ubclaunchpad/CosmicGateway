import type { PageServerLoad, Actions } from './$types';
import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(
	'1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com'
);

async function verify(token) {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: '1008030581052-4p078no9tkl28689oakraltpk3clju2r.apps.googleusercontent.com'
	});
	const payload = ticket.getPayload();
	if (!payload?.email_verified) {
		throw new Error('not verified');
	}
	const userid = payload['sub'];
	return payload;
}

export const load = ((event) => {
	return {
		user: event.locals.user
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		try {
			// console.log('event.request', event.request);
			// const values = await event.request.formData();
			// event.locals.user = await verify(values.get('credential')).catch(console.error);
			return { success: true };
		} catch (e) {
			console.error(e);
			// redirect('/')
		}
	}
} satisfies Actions;
