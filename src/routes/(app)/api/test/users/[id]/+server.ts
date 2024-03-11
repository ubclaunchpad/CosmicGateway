import type { IUser } from '$lib/types/User';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const obj: IUser = {
		id: 881709496070406145,
		first_name: 'Lebron',
		last_name: 'James',
		pref_name: 'Lebron',
		email: 'lbj@ubclaunchpad.com',
		created_at: '2023-07-12T07:30:05.398Z',
		updated_at: '2023-09-29T21:03:16.349Z',
		resume_link: 'www.none-needed.com',
		faculty: {
			id: 881038255263285249,
			label: 'Science'
		},
		standing: {
			id: 881038255380070401,
			label: '4th year'
		},
		specialization: {
			id: 881038255685632001,
			label: 'CPSC'
		},
		roles: [{
			id: 1,
			scopes: ['admin'],
			label: 'admin',
		}],
		username: 'lbj',
		member_since: 'Sept 1, 2003',
		teams: [
			{
				name: '🍏 Nom Appetite',
				year: 2023,
				color: '#A5C77A',
				status: 'in progress'
			},
		]
	};

	// timeout to simulate a slow network
	await new Promise((resolve) => setTimeout(resolve, 1500));

	return json(obj);
};
