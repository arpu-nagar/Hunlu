/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/userContext';
import axios from 'axios';

const isLogin = async () => {
	const blob = await axios.post('/api/status');
	console.log(blob)
	if(blob.data.success) return isLog(true);
	return isLog(false)
};
const isLog = (val) => {
	return val;
}
const PrivateRoute = ({ comp: Component, ...rest }) => {
	console.log(isLogin());
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin() ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
