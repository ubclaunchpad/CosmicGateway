import { promises as fsPromises } from 'fs';
import path from 'path';

async function getPaths(postfix?: string): Promise<any> {
	const currentUrl = import.meta.url;
	const subPath = postfix ? `/${postfix}` : '';
	let currentDirectory = path.dirname(new URL(currentUrl).pathname);
	console.log(currentDirectory);
	if (postfix) {
		currentDirectory = path.join(currentDirectory, subPath);
	}

	try {
		const siblingDirectories = await fsPromises.readdir(currentDirectory, { withFileTypes: true });
		const directoryNames = siblingDirectories
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name)
			.filter((name) => /^[A-Za-z]/.test(name) && name !== 'img');
		console.log(directoryNames);
		return directoryNames;
	} catch (error) {
		return {};
	}
}

export const load = async ({ params }) => {
	return {
		directories: await getPaths(params.slug)
	};
};
