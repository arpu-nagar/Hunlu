import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import bigLogo from '../../../assets/default-monochrome.svg';
import { makeStyles } from '@material-ui/core/styles';
interface Props {
	history: any;
}

const useStyles = makeStyles({
	root: {
		width: '100vw',
		height: '100vh',
		zIndex: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#15202B',
	},
	heading: {
		color: '#ffffff',
	},
	subHead: {
		color: '#8899A6',
		fontWeight: 'lighter',
	},
	logo: {
		width: '70%',
		['@media (min-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			width: '33%',
		},
	},
	btn: {
		backgroundColor: '#1DA1F2',
		fontWeight: 'bold',
		color: '#ffffff',
		padding: '5px 10px 5px 10px',
		marginTop: '8vh',
	},
});

function HomeDriver(props: Props) {
	const {} = props;
	const classes = useStyles();
	const goToLogin = () => {
		props.history.push('/login');
	};
	return (
		<div className={classes.root}>
			<img src={bigLogo} className={classes.logo} />
			<Typography variant={'h5'} className={classes.subHead}>
				Bring movies to your bedroom.
			</Typography>
			<Button className={classes.btn} onClick={goToLogin}>
				Login
			</Button>
		</div>
	);
}

export default HomeDriver;
