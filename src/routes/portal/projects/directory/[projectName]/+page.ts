export async function load({ params }) {
	const post = await import(`../${params.projectName}.md`);
	const { title, date, id } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		id
	};
}

export const prerender = false;
