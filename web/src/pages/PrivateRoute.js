/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/userContext';
import axios from 'axios';

const PrivateRoute = ({ comp: Component, ...rest }) => {
	const { UserData } = useContext(UserContext);
	console.log(UserData);
	return (
		<Route
			{...rest}
			render={(props) =>
				UserData.id != null ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

export default PrivateRoute;
