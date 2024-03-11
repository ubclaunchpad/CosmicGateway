import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	// // status: 404,
	// //     error: new Error('Invalid team name')

	// const teamNameAndId = params.area.split('-');

	// // status: 404,
	// //     error: new Error('Invalid team name')

	// const res = await fetch(`${PUBLIC_TEAMS_API_URI}/teams/${teamNameAndId[1]}`, {
	//     method: 'GET'
	// });

	// const team = await res.json();

	// team: team
	return {
		area: params.area,
		id: params.id
	};
};
