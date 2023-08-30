export async function load({ params }: { params: { projectName: string } }) {
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
