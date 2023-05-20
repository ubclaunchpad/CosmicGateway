// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const slug = params.slug;
	console.log(`${params.slug}`);
	try {
		const post = await import('../' + slug + '.md');
		// const { title, date } = post.metadata;
		const content = post.default;
		console.log(content);

		return {
			content
			// date
		};
	} catch (error) {
		return {};
	}
}
