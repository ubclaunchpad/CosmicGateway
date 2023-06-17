// export const load = ({ url }) => {
// 	let githubCredentials = {};
// 	const githubCode = url.searchParams.get('code');
// 	if (url.searchParams.get('code')) {

// 		// if (githubCode) {
// 		// 	githubCredentials = verifyGithubLogin(githubCode);
// 		// }
// 	}
// 	return {
// 		githubCredentials: githubCredentials,
// 		githubcode: githubCode
// 	};
// };

// async function verifyGithubLogin(githubCode) {
// 	try {
// 		// const response = await fetch('https://github.com/login/oauth/access_token', {
// 		// 	method: 'POST',
// 		// 	headers: {
// 		// 		'Content-Type': 'application/json',
// 		// 		Accept: 'application/json',
// 		// 		'access-control-allow-origin': '*',
// 		// 		'referrer-policy': 'no-referrer'
// 		// 	},
// 		// 	body: JSON.stringify({
// 		// 		client_id: 'Iv1.bfff0a578d157ec8',
// 		// 		client_secret: '636f28fd21527eed08d50c801777aeb8a2c7d7cf',
// 		// 		code: githubCode,
// 		// 		redirect_uri: 'http://localhost:3000/signup'
// 		// 	})
// 		// });
// 		// const data = await response.json();
// 		// return data;
// 	} catch (error) {
// 		console.log('error', error);
// 	}
// }
