import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
	component?: any;
	isSignedIn?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, isSignedIn, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(routeProps) =>
				isSignedIn ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: '/home',
							state: { msg: true },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
