import {json} from '@sveltejs/kit';

export const GET = async () => {
    const obj: { teams: Object[] } = {
        teams: ['Team A', 'Team B', 'Team C', 'Team D']
    }

    return json(obj);
}