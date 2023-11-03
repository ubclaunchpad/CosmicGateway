import { json } from '@sveltejs/kit';

export const GET = async () => {
	const obj: { projects: Object[] } = {
		projects: [
			{
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
				start_date: '',
				end_date: '',
				status: 'In Development',
				team_size: 5,
				resources: [
					{
						type: 'Github',
						link: 'https://github.com'
					},
					{
						type: 'Website',
						link: 'https://google.com'
					}
				]
			},
			{
				title: 'Project rwgwglknmlkn1',
				description:
					'Lorem eflkemlknipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
				start_date: '',
				end_date: '',
				status: 'In Development',
				team_size: 5,
				resources: [
					{
						type: 'Github',
						link: 'https://github.com'
					},
					{
						type: 'Figma',
						link: 'https://figma.com'
					}
				]
			}
		]
	};

	return json(obj);
};
