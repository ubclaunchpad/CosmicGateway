export const load = async ({ params }) => {
	console.log('params');
	console.log(params.id);
	return {
		postingId: params.id
	};
};

// export const ssr = false;
