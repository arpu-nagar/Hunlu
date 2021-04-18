import { Container, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import DrawerDriver from '../../../components/DrawerDriver';
import Navbar from '../../../components/Navbar';
import VideoCard from '../../../components/VideoCard';

interface Props {}
const useStyles = makeStyles({
	root: {
		width: 'calc(100vw-40px)',
		height: '100%',
		backgroundColor: '#15202B',
		overflowX: 'hidden'
	},
	mainContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%',
		overflowX: 'hidden'
	}
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
		setState({
			menuOpen: false,
		});
	}
	
	const classes = useStyles();
	return (
		<div className={classes.root}
		onKeyPress={closeDrawer}
		>
			<Navbar changeMenu={changeMenu} />
			<DrawerDriver open={state.menuOpen}/>
			<div className={classes.mainContainer}>
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			<VideoCard />
			</div>
			
		</div>
	);
}

export default MainDriver;
