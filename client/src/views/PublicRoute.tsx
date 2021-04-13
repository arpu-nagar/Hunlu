import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
	component?: any;
	isSignedIn?: boolean;
	restricted?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, isSignedIn, restricted, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				isSignedIn !== null && restricted ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: { msg: 'This page is not accessible.' },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
