import { getDate } from '$lib/util/user';
export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	prefName: string;
	resumeLink?: string;
	email: string;
	faculty: Dict<string>;
	standing: Dict<string>;
	specialization: Dict<string>;
	roles: Dict<string>[];
	username: string;
	createdAt: string;
	updatedAt: string;
	memberSince: string | undefined;
}

export interface IUserRequest {
	firstName: string;
	lastName: string;
	prefName: string;
	resumeLink?: string;
	email: string;
	faculty: number;
	standing: number;
	specialization: number;
	role: number[];
	username?: string;
}

export type IUserPatchRequest = Partial<IUserRequest>;

export interface Dict<T> {
	id: number;
	name: T;
}

export type IFaculty = Dict<string>[];
export type ISpecialization = Dict<string>[];
export type IStanding = Dict<string>[];
export type IRole = Dict<string>[];

export const userFieldMapper = <K extends keyof IUser>(key: K, value: IUser[K]): string => {
	switch (key) {
		case 'createdAt':
		case 'updatedAt':
			return getDate(value as string);
		case 'faculty':
		case 'standing':
		case 'specialization':
			return (value as { name: string }).name;
		case 'roles':
			return JSON.parse(value as string).map((role: { name: string }) => role.name);
		default:
			return value as string;
	}
};

// const fieldVisibility = (key: string) => {
// 	switch (key) {
// 		case 'firstName':
// 		case 'lastName':
// 		case 'PrefName':
// 		case 'username':
// 		case 'standing':
// 		case 'faculty':
// 		case 'roles':
// 		case 'specialization':
// 			return true;
// 		default:
// 			return false;
// 	}
// };
