import React from 'react';
export default function Login() {
	const google = async () => {
		try {
			window.open("/api/auth/google", "_self");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<button onClick={google}>Sign in With Google</button>
		</div>
	);
}
