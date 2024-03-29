import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	if (!params.area) {
		return {
			status: 404,
			error: new Error('Invalid area name')
		};
	}

	if (!params.id) {
		return {
			status: 404,
			error: new Error('Invalid doc id')
		};
	}

	const areaNameAndId = params.area.split('-');
	const docNameAndId = params.id.split('-');

	if (areaNameAndId.length !== 2 || docNameAndId.length !== 2) {
		return {
			status: 404,
			error: new Error('Invalid name')
		};
	}

	return {
		area: {
			id: areaNameAndId[1],
			name: areaNameAndId[0]
		},
		doc: {
			id: docNameAndId[1],
			name: docNameAndId[0]
		}
	};
};
