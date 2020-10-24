import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';
import Main from './src/Main/Main';
import Home from './src/Home/Home';
import Login from './src/Login/Login';
import PublicRoute from './PublicRoute';
import UserContext from '../context/userContext';
import Pay from './src/Pay/Pay';
import Load from '../components/Load';

export default function Hunlu() {
	const [UserData, setUserData] = useState({
		name: null,
		id: null,
		isPaid: false,
	});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const checkLoggedIn = async () => {
			const data = await axios.post('/api/status', null, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			console.log('WOrks');
			if (data.data.success) {
				setUserData({
					name: data.data.user.name,
					id: data.data.user.googleId || data.data.user.facebookId,
					isPaid: data.data.isPaid,
				});
			}
			setLoading(false);
		};
		checkLoggedIn();
	}, []);
	if (loading) return <Load />;
	return (
		<UserContext.Provider value={{ UserData, setUserData }}>
			<BrowserRouter>
				<Switch>
					<PrivateRoute comp={Main} path="/home" exact />
					<PublicRoute
						restricted={false}
						comp={Pay}
						path="/pay"
						exact
					/>
					<PublicRoute
						restricted={false}
						comp={Home}
						path="/"
						exact
					/>
					<PublicRoute
						restricted={true}
						comp={Login}
						path="/login"
						exact
					/>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
}
