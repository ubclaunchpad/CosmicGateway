export interface INotification {
	title: string;
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
	timeout?: number;
}
