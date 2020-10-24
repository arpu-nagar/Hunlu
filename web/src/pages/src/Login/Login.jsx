import React from 'react';
import GoogleButton from 'react-google-button';
import FacebookLogin from 'react-facebook-login';
import { Container, Head, Content, SubCont1, SubCont } from './style';
export default function Login() {
	const google = async () => {
		try {
			window.open('/api/auth/google', '_self');
		} catch (err) {
			console.log(err);
		}
	};

	const facebook = async () => {
		try {
			window.open('/api/auth/facebook', '_self');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<SubCont1>
				<Head>Hello from Hunlu! </Head>
				<Content>
					Some fonts are meant to grab attention, but the letterforms
					that draw attention to large posters can be hard on the eyes
					when they're used in a long piece of text. The best fonts
					for super long texts are clean, elegant and easy-to-read on
					screen and in print.
				</Content>
			</SubCont1>
			<SubCont>
				<GoogleButton type="light" onClick={google} />

				<FacebookLogin
					//{icon="fa-facebook"}
					onClick={facebook}
				/>
			</SubCont>
		</Container>
	);
}
