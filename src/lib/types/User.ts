import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { fetcher } from '$lib/util/fetcher';
import { STRATEGY_EMAIL } from '$lib/util/links';
import { getDate } from '$lib/util/user';
import { token } from '../../stores/auth';
export interface IUser {
	id: number;
	first_name: string;
	last_name: string;
	pref_name: string;
	resume_link?: string;
	email: string;
	faculty: IDict<string>;
	standing: IDict<string>;
	specialization: IDict<string>;
	roles: IDict<string>[];
	username: string;
	created_at: string;
	updated_at: string;
	member_since: string | undefined;
}

export interface IUserRequest {
	first_name: string;
	last_name: string;
	pref_name: string;
	resume_link?: string;
	email: string;
	faculty_id: number;
	standing_id: number;
	specialization_id: number;
	role_id?: number[];
	username?: string;
}

export type IUserPatchRequest = Partial<IUserRequest>;

export function UserRequestMapper(user: IUser): IUserPatchRequest {
	const partialUser = {
		first_name: user.first_name,
		last_name: user.last_name,
		pref_name: user.pref_name,
		resume_link: user.resume_link,
		email: user.email,
		faculty_id: user.faculty.id,
		standing_id: user.standing.id,
		specialization_id: user.specialization.id,
		// roleId: user.roles.map((role) => role.id),
		username: user.username
	};

	return removeUndefinedKeys(partialUser);
}

export async function getUserInfo(id: number) {
	let userToken;
	token.subscribe((token) => {
		userToken = token;
	});

	if (!userToken) {
		console.log('no token');
		return;
	}

	const response = await fetcher({
		URI: `${PUBLIC_USERS_API_URI}/users/${id}`,
		requestInit: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userToken}`
			}
		},
		notifyError: {
			title: 'Oops!',
			message: `Could not retrieve profile. if error persists, please contact us at ${STRATEGY_EMAIL}`,
			type: 'warning'
		}
	});

	return response;
}

function removeUndefinedKeys<T extends { [s: string]: unknown }>(obj: T): Partial<T> {
	return Object.entries(obj).reduce((acc, [key, value]) => {
		if (value !== undefined) {
			acc[key as keyof T] = value as T[keyof T];
		}
		return acc;
	}, {} as Partial<T>);
}

export interface IDict<T> {
	id: number;
	label: T;
}

export type IFaculty = IDict<string>[];
export type ISpecialization = IDict<string>[];
export type IStanding = IDict<string>[];
export type IRole = IDict<string>[];

export const userFieldMapper = <K extends keyof IUser>(key: K, value: IUser[K]): string => {
	switch (key) {
		case 'created_at':
		case 'updated_at':
			return value ? getDate(value as string) : '';
		case 'member_since':
			return value ? getDate(value as string) : 'N/A';
		case 'faculty':
		case 'standing':
		case 'specialization':
			return (value as { label: string }).label;
		case 'roles':
			return (value as IRole).map((role: { label: string }) => role.label).join(', ');
		default:
			return value as string;
	}
};
