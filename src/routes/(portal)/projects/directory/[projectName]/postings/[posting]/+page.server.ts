// import { PUBLIC_POSTING_API_URI } from '$env/static/public';
// import { compile } from 'mdsvex';

// export async function load({ params }) {
// 	const splitId = params.projectName.split('-');
// 	const a = (await fetchPostings(splitId[0], params.posting))[0].body;
// 	const transformed_code = await compile(a);
// 	return {
// 		code: transformed_code,
// 		projectId: splitId[0],
// 		postId: params.posting
// 	};
// }

// const fetchPostings = async (id, postId) => {
// 	const res = await fetch(`${PUBLIC_POSTING_API_URI}/postings?projectId=${id}&postId=${postId}`);
// 	return await res.json();
// };
