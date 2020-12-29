import React, { useState, useContext } from 'react';
import Navbar from '../../../components/Navbar';
import SearchContext from '../../../context/searchContent';
import UserContext from '../../../context/userContext';
import { Container } from 'semantic-ui-react';
import ItemCard from '../../../components/ItemCard';
import './style.css';
const Helper = ({ name }) => {
	const { UserData } = useContext(UserContext);
	const { Search } = useContext(SearchContext);
	return (
		<Container className="wrapper">
			<Navbar name={name} />
			{UserData.content
				.filter((item) => {
					return item.name.includes(Search.search);
				})
				.map((value, key) => (
					<ItemCard obj={value} key={key} />
				))}
		</Container>
	);
};

export default Helper;
