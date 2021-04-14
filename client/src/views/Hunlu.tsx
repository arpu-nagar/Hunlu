// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import { reqData } from '../utils/api';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomeDriver from './src/Home/HomeDriver';
import InvalidDriver from './src/Invalid/InvalidDriver';
import LoginDriver from './src/Login/LoginDriver';
import MainDriver from './src/Main/MainDriver';
import PayDriver from './src/Pay/PayDriver';
import PlayerDriver from './src/Player/PlayerDriver';

interface UserData {
	name: string;
	id: string;
	isPaid: boolean;
	content: any;
	favorites: any;
	ok: boolean;
	likes: any;
	dislikes: any;
	userID?: any;
}

export const Hunlu: React.FC<{}> = () => {
	const history = useHistory();
	const [UserData, setUserData] = useState<UserData>({
		name: '',
		id: '',
		isPaid: false,
		content: [],
		favorites: [],
		ok: true,
		likes: [],
		dislikes: [],
		userID: '',
	});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const checkLoggedIn = async () => {
			const data = await reqData('/status', {}, 'POST');
			console.log(data);
			if (data.data.success) {
				setUserData({
					name: data.data.user.name,
					id: data.data.user.googleId || data.data.user.facebookId,
					isPaid: data.data.isPaid,
					content: data.data.content,
					userID: data.data.userID,
					favorites: data.data.favorites,
					ok: data.data.ok,
					likes: data.data.likes,
					dislikes: data.data.dislikes,
				});
			}
			if (!UserData.ok) history.push('/invalid');
			setLoading(false);
		};
		checkLoggedIn();
	}, [UserData.ok, history]);
	if (loading) return <div>Loading...</div>;
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute
					restricted={true}
					component={HomeDriver}
					path="/home"
					exact
				/>
				<PublicRoute
					restricted={false}
					component={PayDriver}
					path="/pay"
					exact
				/>
				<PublicRoute
					restricted={false}
					component={HomeDriver}
					path="/"
					exact
				/>
				<PublicRoute
					restricted={true}
					component={LoginDriver}
					path="/login"
					exact
				/>
				<PublicRoute
					restricted={false}
					component={InvalidDriver}
					path="/invalid"
					exact
				/>
				<PrivateRoute component={PlayerDriver} path="/play/:id" exact />
			</Switch>
		</BrowserRouter>
	);
};
