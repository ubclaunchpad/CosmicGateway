export async function load({ params }) {
	try {
		const post = await import('../docs/README' + '.md');
		// const { title, date } = post.metadata;
		const content = post.default;

		return {
			content
			// date
		};
	} catch (error) {
		return {};
	}
}
