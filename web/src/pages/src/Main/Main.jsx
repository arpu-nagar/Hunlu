// @flow
import React, { useState, useContext } from 'react';
import Navbar from '../../../components/Navbar';
import SearchContext from '../../../context/searchContent';
import { Container } from './style';
export default (Home) => {
	const [search, setSearch] = useState('');
	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			<Container>
				<Navbar />
			</Container>
		</SearchContext.Provider>
	);
};
