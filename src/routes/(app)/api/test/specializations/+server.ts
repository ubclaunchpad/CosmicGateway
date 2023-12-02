import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		data: [
			{
				id: 1,
				label: 'Accounting'
			},
			{
				id: 2,
				label: 'African Studies'
			},
			{
				id: 3,
				label: 'American Studies'
			},
			{
				id: 4,
				label: 'Anthropology'
			},
			{
				id: 5,
				label: 'Archaeology'
			},
			{
				id: 6,
				label: 'Art History'
			},
			{
				id: 7,
				label: 'Asian Studies'
			},
			{
				id: 8,
				label: 'Astronomy'
			},
			{
				id: 9,
				label: 'Biochemistry'
			},
			{
				id: 10,
				label: 'Biology'
			},
			{
				id: 11,
				label: 'Biomedical Engineering'
			},
			{
				id: 12,
				label: 'Business Administration'
			},
			{
				id: 13,
				label: 'Canadian Studies'
			},
			{
				id: 14,
				label: 'Chemistry'
			},
			{
				id: 15,
				label: 'Chinese Studies'
			},
			{
				id: 16,
				label: 'Civil Engineering'
			},
			{
				id: 17,
				label: 'Classics'
			},
			{
				id: 18,
				label: 'Cognitive Systems: Computational Intelligence and Design'
			},
			{
				id: 19,
				label: 'Communication'
			},
			{
				id: 20,
				label: 'Computer Science'
			},
			{
				id: 21,
				label: 'Conservation and Restoration of Cultural Property'
			},
			{
				id: 22,
				label: 'Criminology'
			},
			{
				id: 23,
				label: 'Development Studies'
			},
			{
				id: 24,
				label: 'Economics'
			},
			{
				id: 25,
				label: 'Education'
			},
			{
				id: 26,
				label: 'Electrical and Computer Engineering'
			},
			{
				id: 27,
				label: 'English'
			},
			{
				id: 28,
				label: 'Environmental Engineering'
			},
			{
				id: 29,
				label: 'Environmental Sciences'
			},
			{
				id: 30,
				label: 'European Studies'
			}
		],
		meta: {
			offset: 0,
			limit: 30,
			total: 75
		}
	});
};
