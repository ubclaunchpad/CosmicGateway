export interface ProjectInfo {
	id: number;
	name: string;
	description: string;
	statusId: number;
	resources: ProjectResource[];
	users: PorjectMembers[];
}

export interface ProjectResource {
	id: number;
	name: string;
	description?: string;
	link: string;
	typeId: string;
}

export interface PorjectMembers {
	userId: number;
	firstName: string;
	prefName: string;
	lastName: string;
	role: string;
}
