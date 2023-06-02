export interface ProjectInfo {
	id: number;
	name: string;
	description: string;
	statusId: number;
	resources: ProjectResource[];
}

export interface ProjectResource {
	id: number;
	name: string;
	description?: string;
	link: string;
	typeId: string;
}
