import { PUBLIC_TEAMS_API_URI } from '$env/static/public';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {

	if (!params.team) {
		return {
			status: 404,
			error: new Error('Invalid team name')
		};
	}

	const teamNameAndId = params.team.split('-');

	if (teamNameAndId.length !== 2) {
		return {
			status: 404,
			error: new Error('Invalid team name')
		};
	}

	const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams/${teamNameAndId[1]}`, {
		method: 'GET'
	});

	const team = await res.json();

	return {
		team: team
	};
};
