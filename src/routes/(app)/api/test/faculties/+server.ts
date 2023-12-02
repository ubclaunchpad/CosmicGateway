import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		data: [
			{ id: 6, label: 'Applied Science' },
			{ id: 5, label: 'Arts' },
			{ id: 4, label: 'Business' },
			{ id: 3, label: 'Education' },
			{ id: 1, label: 'Forestry' },
			{ id: 2, label: 'Land and Food Systems' },
			{ id: 8, label: 'Medicine' },
			{ id: 9, label: 'Other' },
			{ id: 7, label: 'Science' }
		],
		meta: { offset: 0, limit: 30, total: 9 }
	});
};
