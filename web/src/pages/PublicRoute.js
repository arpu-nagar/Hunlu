import React , {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/userContext';
import axios from 'axios';
const PublicRoute = ({ comp: Component, restricted, ...rest }) => {
	const isLogin = async () => {
	const blob = await axios.post('/api/status');
	console.log(blob)
	if(blob.data.success) return isLog(true);
	return isLog(false)
};
const isLog = (val) => {
	return val;
}
	console.log(isLogin());
	return (
		// restricted = false meaning public route
		// restricted = true meaning restricted route
		<Route
			{...rest}
			render={(props) =>
				isLogin() && restricted ? (
					<Redirect to="/home" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PublicRoute;
