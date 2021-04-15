import { makeStyles } from '@material-ui/core';
import React from 'react';
import DrawerDriver from '../../../components/DrawerDriver';
import Navbar from '../../../components/Navbar';

interface Props {}
const useStyles = makeStyles({
	root: {
		width: '100vw',
		height: '100vh',
		backgroundColor: '#15202B',
	},
});

function MainDriver(props: Props) {
	// const {} = props;
	const [state, setState] = React.useState({
		menuOpen: false,
	});
	function changeMenu() {
		setState((state) => ({
			menuOpen: true,
		}));
	}
	function closeDrawer() {
		setState((state) => ({
			menuOpen: false,
		}));
	}
	const classes = useStyles();
	return (
		<div className={classes.root}
		onKeyPress={closeDrawer}
		>
			<Navbar changeMenu={changeMenu} />
			<DrawerDriver open={state.menuOpen} />
		</div>
	);
}

export default MainDriver;
