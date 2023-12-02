import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		data: [
			{
				id: 6,
				label: 'Alumni'
			},
			{
				id: 1,
				label: 'First Year'
			},
			{
				id: 4,
				label: 'Fourth Year and up'
			},
			{
				id: 5,
				label: 'Graduate Student'
			},
			{
				id: 7,
				label: 'Other'
			},
			{
				id: 2,
				label: 'Second Year'
			},
			{
				id: 3,
				label: 'Third Year'
			}
		],
		meta: {
			offset: 0,
			limit: 30,
			total: 7
		}
	});
};
