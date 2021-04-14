import { Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import bigLogo from '../../../assets/default-monochrome.svg';
import GoogleButton from 'react-google-button';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';

// import { FacebookProvider, LoginButton } from 'react-facebook';

interface Props {}

const useStyles = makeStyles({
	root: {
		width: '100vw',
		height: '100vh',
		zIndex: 2,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#15202B',
	},
	dialog: {
		height: '60vh',
		width: '80vw',
		backgroundColor: '#192734',
		zIndex: 100,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
		['@media (min-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
	},
	logo: {
		marginTop: '10%',
		width: '70%',
		['@media (min-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			width: '100%',
		},
	},
	title: {
		color: '#ffffff',
	},
	sub: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	subHead: {
		color: '#8899A6',
		fontWeight: 'lighter',
	},
});

function LoginDriver(props: Props) {
	// const {} = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Card className={classes.dialog} variant="outlined">
				<div className={classes.sub}>
					<img src={bigLogo} className={classes.logo} />
					<Typography className={classes.subHead}>
						Hunlu is a video-on demand video player like Netflix.
					</Typography>
				</div>
				<div className={classes.sub}>
					<GoogleButton
						type="dark" // can be light or dark
						style={{
							marginTop: '10px',
							marginBottom: '30px',
						}}
						onClick={() => {
							console.log('Google button clicked');
						}}
					/>
					<FacebookLogin
						appId="93898"
						onClick={() => {
							console.log('Google button clicked');
						}}
						callback={() => {
							console.log('hi');
						}}
						textButton="Sign in with Facebook"
						icon={<FaFacebook />}
					/>
				</div>
			</Card>
		</div>
	);
}

export default LoginDriver;
