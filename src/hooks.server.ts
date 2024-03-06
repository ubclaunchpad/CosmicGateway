import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/teams')) {
		return new Response('teams is not a ready yet', { status: 403, statusText: 'Forbidden' });
	}

	const response = await resolve(event);
	return response;
};
