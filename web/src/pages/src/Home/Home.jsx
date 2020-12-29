import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Heading, SubHead } from './style';
import { Button, Icon } from 'semantic-ui-react';

const Home = () => {
	const [load, setLoad] = useState(false);
	const history = useHistory();
	return (
		<Container>
			<Heading>HUNLU</Heading>
			<SubHead>Re-imagine watching movies at home.</SubHead>
			{load ? (
				<Button basic loading>
					Loading
				</Button>
			) : (
				<Button
					primary
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
