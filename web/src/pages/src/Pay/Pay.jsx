import React, { useState, useContext } from 'react';
import UserContext from '../../../context/userContext';
import Axios from 'axios';
import { useHistory } from 'react-router';
import { Dropdown, Button } from 'semantic-ui-react';
import { Container , Form , Sub} from './style';
function Pay() {
	const friendOptions = [
		{
			key: '1',
			text: 'Rs. 199',
			value: '199',
		},
		{
			key: '2',
			text: 'Rs. 399',
			value: '399',
		},
		{
			key: '3',
			text: 'Rs. 599',
			value: '599',
		},
		{
			key: '4',
			text: 'Rs. 799',
			value: '799',
		},
	];

	const history = useHistory();
	const [sel, setSel] = useState('199');
	const { UserData } = useContext(UserContext);
	if (UserData.isPaid) history.push('/home');
	const submit = async (e) => {
		console.log('hi');
		window.open(`/api/pay/${sel}`, '_self');
	};
	return (
		<Container>
			<Form>
					<h2>Membership type</h2>
	<div>{friendOptions.map((obj) => {
		return <div>{obj.text} for Access to Type {obj.key}.</div>
	})}</div>
			</Form>
			<Sub>
			<Dropdown
				placeholder="Select Membership Price"
				fluid
				selection
				options={friendOptions}
				onChange={(event) => {
					setSel(event.target.value);
				}}
			/>
			<Button secondary type="submit" value="Submit" onClick={submit}>
				Buy Membership
			</Button>
			</Sub>
		</Container>
	);
}

export default Pay;
