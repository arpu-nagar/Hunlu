import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { Container, Text } from './style';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/userContext';
export default function Invalid() {
	const history = useHistory();
	const { UserData } = useContext(UserContext);
	if (UserData.ok) history.push('/home');
	return (
		<Container>
			<Text>Sorry, but you cannot use more screens than your plan allows.</Text>
			<Button
				secondary
				onClick={() => {
					window.location.replace('/api/logout');
				}}
			>
				Logout
			</Button>
		</Container>
	);
}
