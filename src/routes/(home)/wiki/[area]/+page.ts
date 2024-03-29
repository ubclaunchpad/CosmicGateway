import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	if (!params.area) {
		return {
			status: 404,
			error: new Error('Invalid area name')
		};
	}

	const areaNameAndId = params.area.split('-');

	if (areaNameAndId.length !== 2) {
		return {
			status: 404,
			error: new Error('Invalid area name')
		};
	}

	console.log(areaNameAndId);

	return {
		id: areaNameAndId[1],
		name: areaNameAndId[0]
	};
};
