import { json } from '@sveltejs/kit';

export const GET = async () => {
	const obj: { teams: any[] } = {
		teams: [
			{
				name: '🪐 Cosmic Gateway',
				year: 2023,
				color: '#937CAA',
				status: 'in progress'
			},
			{
				name: '🍏 Nom Appetite',
				year: 2023,
				color: '#A5C77A',
				status: 'in progress'
			},
			{
				name: ' 📄 ClassSync',
				year: 2023,
				color: '#DBC8B2',
				status: 'in progress'
			},
			{
				name: '🔵 BlueNav',
				year: 2023,
				color: '#0865D8',
				status: 'in progress'
			},
			{
				name: '🍣 Team5',
				year: 2023,
				color: '#F3747B',
				status: 'in progress'
			},
			{
				name: '🧋 Team6',
				year: 2023,
				color: '#C9995F',
				status: 'in progress'
			},
			{
				name: '🍣 Team7',
				year: 2023,
				color: '#809CFF',
				status: 'in progress'
			},
			{
				name: '🍣 Team8',
				year: 2023,
				color: '#3F3356',
				status: 'in progress'
			}
		]
	};

	return json(obj);
};
