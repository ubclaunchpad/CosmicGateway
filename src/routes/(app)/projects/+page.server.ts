import { error, type Load } from '@sveltejs/kit';

import { PUBLIC_USERS_API_URI } from '$env/static/public';

export const load: Load = async () => {
    const res = await fetch(`${PUBLIC_USERS_API_URI}/projects`, {
        method: 'GET',
    });

    const { projects } = await res.json();

    if (res.ok) {
        return { projects };
    }

    throw error(404, 'Unable to fetch projects');
};