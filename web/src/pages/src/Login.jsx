import React from 'react';
import axios from 'axios';
export default function Login() {
	const google = async () => {
		try {
			const data = await axios.post('/api/auth/google', null, {
				withCredentials: true
			})
			console.log(data);	
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
