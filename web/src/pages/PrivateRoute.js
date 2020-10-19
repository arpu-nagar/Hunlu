/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
	return false;
};

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
