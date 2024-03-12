import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { fetcher } from '$lib/util/fetcher';
import { STRATEGY_EMAIL } from '$lib/util/links';
import { getDate } from '$lib/util/user';
import { token } from '../../stores/auth';
export interface IUser {
	id: number;
	first_name: string;
	last_name: string;
	full_name?: string;
	pref_name: string;
	resume_link?: string;
	email: string;
	faculty: IDict<string>;
	standing: IDict<string>;
	specialization: IDict<string>;
	roles: IRole[];
	username: string;
	created_at: string;
	updated_at: string;
	member_since: string | undefined;
	teams?: any[];
}

export interface IRole extends IDict<string> {
	scopes: string[];
}
//
// export interface IScope {
// 	label: string;
// 	description: string;
// }

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

	return await fetcher({
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
			return value ? (value as { label: string }).label : '';
		case 'roles':
			return value
				? (value as IRole[]).map((role: { label: string }) => role.label).join(', ')
				: '';
		case 'teams':
			return value ? (value as any[]).map((team: { name: string }) => team.name).join(', ') : '';
		default:
			return value as string;
	}
};

export const userFieldVisibilityMapper = <K extends keyof IUser>(key: K): boolean => {
	switch (key) {
		case 'created_at':
		case 'updated_at':
		case 'username':
		case 'resume_link':
		case 'first_name':
		case 'id':
		case 'last_name':
		case 'pref_name':
		case 'specialization':
		case 'faculty':
		case 'standing':
		case 'member_since':
			return false;
		default:
			return true;
	}
};

export const userFieldLabelMapper = <K extends keyof IUser>(key: K): string => {
	switch (key) {
		case 'created_at':
			return 'Created';
		case 'updated_at':
			return 'Updated';
		case 'member_since':
			return 'Member Since';
		case 'pref_name':
			return 'Preferred Name';
		case 'resume_link':
			return 'Resume Link';
		case 'faculty':
			return 'Faculty';
		case 'standing':
			return 'Standing';
		case 'specialization':
			return 'Specialization';
		case 'username':
			return 'Username';
		case 'last_name':
			return 'Last Name';
		case 'roles':
			return 'Roles';
		case 'full_name':
			return 'Full Name';
		default:
			return key.charAt(0).toUpperCase() + key.slice(1);
	}
};
