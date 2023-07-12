import { PUBLIC_USERS_API_URI } from '$env/static/public';
import { json } from '@sveltejs/kit';

interface IDict<T> {
	id: string;
	label: T;
}

let listOfFaculties: IDict<string>[] = [];
let listOfSpecializations: IDict<string>[] = [];
let listOfStandings: IDict<string>[] = [];
let listOfRoles: IDict<string>[] = [];
let outOfSync = true;
let isUpdating = false; // Lock variable

export const GET = async () => {
	await updateResourceInfo();
	const obj = {
		listOfFaculties: listOfFaculties,
		listOfSpecializations: listOfSpecializations,
		listOfStandings: listOfStandings,
		listOfRoles: listOfRoles
	};
	return json(obj);
};

export const POST = () => {
	return new Response(String(0));
};

async function updateResourceInfo() {
	if (outOfSync && !isUpdating) {
		isUpdating = true; // Acquire the lock
		try {
			const facultiesPromise = getFaculties();
			const specializationsPromise = getSpecializations();
			const standingsPromise = getStandings();
			const rolesPromise = getRoles();

			[listOfFaculties, listOfSpecializations, listOfStandings, listOfRoles] = await Promise.all([
				facultiesPromise,
				specializationsPromise,
				standingsPromise,
				rolesPromise
			]);
		} catch (error) {
			// Handle any errors that occur during the API calls
		} finally {
			isUpdating = false; // Release the lock
		}
	}

	outOfSync = false;
}

const getFaculties = async (): Promise<{ id: string; label: string }[]> => {
	const response = await fetch(`${PUBLIC_USERS_API_URI}/faculties`, {
		method: 'GET'
	});

	return await response.json();
};

const getSpecializations = async (): Promise<{ id: string; label: string }[]> => {
	const response = await fetch(`${PUBLIC_USERS_API_URI}/specializations`, {
		method: 'GET'
	});

	return await response.json();
};

const getRoles = async () => {
	// const response = await fetch(`${PUBLIC_USERS_API_URI}/roles`, {
	// 	method: 'GET'
	// });

	return [];
};

const getStandings = async (): Promise<{ id: string; label: string }[]> => {
	const response = await fetch(`${PUBLIC_USERS_API_URI}/standings`, {
		method: 'GET'
	});

	return await response.json();
};
