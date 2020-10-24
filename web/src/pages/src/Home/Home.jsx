import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Heading } from './style';
import { Button, Icon } from 'semantic-ui-react';

const Home = () => {
	const [load, setLoad] = useState(false);
	const history = useHistory();
	return (
		<Container>
			<Heading>HUNLU</Heading>
			{load ? (
				<Button basic loading>
					Loading
				</Button>
			) : (
				<Button
					secondary
					onClick={() => {
						setLoad(true);
						history.push('/login');
					}}
				>
					Login
				</Button>
			)}
		</Container>
	);
};

export default Home;
