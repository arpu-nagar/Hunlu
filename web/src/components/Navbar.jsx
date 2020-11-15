import React, { Component, useState, useContext } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import SearchContext from '../context/searchContent';

export default class Navbar extends Component {
	state = { activeItem: 'home' };
	static contextType = SearchContext;
	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		if (name == 'logout') {
			window.location.replace(`/api/logout`);
		} else window.location.replace(`/${name}`);
	};
	searchChange = (e) => {
		this.context.setSearch({
			search: e.target.value,
		});
	};

	componentDidMount() {
		this.context.setSearch({
			search: '',
		});
	}

	render() {
		const { activeItem } = this.state;
		console.log(this.context);
		return (
			<Menu secondary>
				<Menu.Item
					name="home"
					active={activeItem === 'home'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="favorites"
					active={activeItem === 'favorites'}
					onClick={this.handleItemClick}
				/>
				<Menu.Menu position="right">
					<Menu.Item>
						<Input
							icon="search"
							placeholder="Search..."
							defaultValue=""
							onChange={this.searchChange}
						/>
					</Menu.Item>
					<Menu.Item
						name="logout"
						active={activeItem === 'logout'}
						onClick={this.handleItemClick}
					/>
				</Menu.Menu>
			</Menu>
		);
	}
}
