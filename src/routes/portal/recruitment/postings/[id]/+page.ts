export const load = async ({ params }: { params: { id: string } }) => {
	return {
		postingId: params.id
	};
};

// export const ssr = false;
