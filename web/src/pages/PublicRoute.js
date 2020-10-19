import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = () => {
	return false;
};

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	console.log(isLogin() && restricted);
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
