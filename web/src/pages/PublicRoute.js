import React , {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/userContext';
import axios from 'axios';


const PublicRoute = ({ comp: Component, restricted, ...rest }) => {
	const {UserData} = useContext(UserContext);
	console.log(UserData)
	return (
		<Route
			{...rest}
			render={(props) =>
				(UserData.id!= null) && restricted ? (
					<Redirect to="/home" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PublicRoute;
