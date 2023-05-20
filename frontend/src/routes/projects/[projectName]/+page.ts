// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	console.log(params);
	const post = await import(`../${params.projectName}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
