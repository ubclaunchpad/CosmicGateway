export async function load({ params }) {
	console.log(params);
	try {
		const post = await import('../docs/starter' + '.md');

		// const { title, date } = post.metadata;
		const content = post.default;
		console.log(content);

		return {
			content
			// date
		};
	} catch (error) {
		console.log(error);
		return {};
	}
}
