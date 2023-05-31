// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const slug = params.slug;
	try {
		const post = await import('../' + slug + '.md');
		// const { title, date } = post.metadata;
		const content = post.default;
		return {
			content
			// date
		};
	} catch (error) {
		// console.log(error);
	}

	try {
		const post = await import('../' + slug + '/1.md');
		// const { title, date } = post.metadata;
		const content = post.default;

		return {
			content
			// date
		};
	} catch (error) {
		return {
			// date
		};
	}
}
