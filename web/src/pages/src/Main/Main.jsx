// @flow
import React, { useState, useContext } from 'react';
import Navbar from '../../../components/Navbar';
import SearchContext from '../../../context/searchContent';
import UserContext from '../../../context/userContext';
import { Container } from './style';
import ItemCard from '../../../components/ItemCard';
import Helper from './Helper';
export default (Home) => {
	const [Search, setSearch] = useState({
		search: '',
	});
	const { UserData } = useContext(UserContext);
	return (
		<SearchContext.Provider value={{ Search, setSearch }}>
			<Helper name={UserData.name} />
		</SearchContext.Provider>
	);
};

{
	/* <Container>
				<Navbar />
				{UserData.content
					.filter((item) => {
						item.name.includes(search.search);
						console.log(search.search);
						console.log(item.name);
					})
					.map((value) => (
						<ItemCard obj={value} />
					))}
			</Container> */
}
