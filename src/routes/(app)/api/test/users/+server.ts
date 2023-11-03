import type { IUser } from '$lib/types/User';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const obj: { users: IUser[] } = {
		users: [
			{
				id: 881709496070406145,
				first_name: 'Mike',
				last_name: 'Roberts',
				pref_name: 'Mikert',
				email: 'dev@ubclaunchpad.com',
				created_at: '2023-07-12T07:30:05.398Z',
				updated_at: '2023-09-29T21:03:16.349Z',
				resume_link: 'www.google.com',
				faculty: {
					id: 881038255263285249,
					label: 'Science'
				},
				standing: {
					id: 881038255380070401,
					label: 'Other'
				},
				specialization: {
					id: 881038255685632001,
					label: 'Other'
				},
				roles: [],
				username: 'olti',
				member_since: 'Sept 20, 2023'
			},
			{
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
				roles: [],
				username: 'lbj',
				member_since: 'Sept 1, 2003'
			}
		]
	};

	return json(obj);
};
