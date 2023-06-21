export interface IUser {
	firstName: string;
	lastName: string;
	prefName: string;
	resumeLink?: string;
	email: string;
	faculty: { id: number; name: string };
	standing: { id: number; name: string };
	specialization: { id: number; name: string };
	role: { id: number; name: string };
	username: string;
}
