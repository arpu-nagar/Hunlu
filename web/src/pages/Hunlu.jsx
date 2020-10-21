import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axios from 'axios';
import { Main } from './src/Main';
import Home from './src/Home';
import Login from './src/Login';
import PublicRoute from './PublicRoute';
import UserContext from '../context/userContext';

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
			if (data.data.success) {
				setUserData({
					name: data.data.user.name,
					id: data.data.user.googleId || data.data.user.facebookId,
				});
			}
			setLoading(false)
		};
		checkLoggedIn()
	}, []);
		if(loading) return <div>Loading</div>
	return (
		<UserContext.Provider value={{ UserData, setUserData }}>
			<BrowserRouter>
				<Switch>
					<PrivateRoute comp={Main} path="/home" exact />
					<PublicRoute restricted={false} comp={Home} path="/" exact />
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
