<script lang="ts">
	import { blur, fade } from 'svelte/transition';

	export let projects = [
		{
			id: 1,
			title: 'Machine Learning Model',
			description: 'A machine learning model for predicting stock prices.',
			thumbnail: 'https://example.com/images/ml-model.jpg',
			status: 'active'
		},
		{
			id: 2,
			title: 'E-commerce Website',
			description: 'A fully functional e-commerce website built with React and Node.js.',
			thumbnail: 'https://example.com/images/e-commerce.jpg',
			status: 'active'
		},
		{
			id: 3,
			title: 'Mobile Game',
			description: 'A mobile game developed using Unity.',
			thumbnail: 'https://example.com/images/mobile-game.jpg',
			status: 'active'
		},
		{
			id: 4,
			title: 'Blockchain Application',
			description: 'A decentralized application built on the Ethereum blockchain.',
			thumbnail: 'https://example.com/images/blockchain-app.jpg',
			status: 'active'
		},
		{
			id: 5,
			title: 'Cybersecurity Tool',
			description: 'A cybersecurity tool for detecting network intrusions.',
			thumbnail: 'https://example.com/images/cybersecurity-tool.jpg',
			status: 'active'
		},
		{
			id: 6,
			title: 'Data Visualization Dashboard',
			description: 'A data visualization dashboard built with D3.js.',
			thumbnail: 'https://example.com/images/data-viz.jpg',
			status: 'active'
		},
		{
			id: 7,
			title: 'IoT Home Automation',
			description: 'A home automation system using IoT devices.',
			thumbnail: 'https://example.com/images/iot-home.jpg',
			status: 'active'
		},
		{
			id: 8,
			title: 'AR Application',
			description: 'An augmented reality application for mobile devices.',
			thumbnail: 'https://example.com/images/ar-app.jpg',
			status: 'active'
		},
		{
			id: 9,
			title: 'Cloud Migration',
			description: 'A project to migrate an on-premise system to the cloud.',
			thumbnail: 'https://example.com/images/cloud-migration.jpg',
			status: 'active'
		},
		{
			id: 10,
			title: 'DevOps Pipeline',
			description: 'A DevOps pipeline for continuous integration and deployment.',
			thumbnail: 'https://example.com/images/devops-pipeline.jpg',
			status: 'active'
		}
	];
</script>

<div
	class="carousel carousel-center space-x-4 bg-base-100 w-full rounded-lg border border-base-200 h-full max-h-[500px] overflow-hidde"
>
	{#each projects as project, i}
		<div
			class="card w-lg bg-base-100 shadow-sm w-96 rounded-lg border border-base-200 carousel-item relative overflow-hidden"
			in:fade|global={{ duration: 500, delay: i * 90 }}
		>
			<div class="card-body z-40 text-white pointer-events-none">
				<p><span class="badge badge-lg rounded-full">{project.status}</span></p>
				<h2 class="card-title">{project.title}</h2>

				<p>{project.description}</p>
			</div>
			<img
				src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				class="rounded-box absolute object-cover w-full"
			/>
			<div
				class="bg-black opacity-30 absolute w-full h-full z-30 hover:opacity-20 transition-opacity duration-300"
			></div>
		</div>
	{/each}
</div>
