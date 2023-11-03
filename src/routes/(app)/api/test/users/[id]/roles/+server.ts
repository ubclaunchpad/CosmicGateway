import type { IDict, IRole } from '$lib/types/User';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const obj: IRole[] = [
		{
			id: 881038255685632001,
			label: 'admin',
			scopes: ['admin:write', 'admin:read']
		},
		{
			id: 881038255685632002,
			label: 'user',
			scopes: ['user']
		}
	];

	return json(obj);
};
