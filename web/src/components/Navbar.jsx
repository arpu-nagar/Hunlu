import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
	state = { activeItem: 'home' };

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
		if (name == 'logout') {
			window.location.replace(`/api/logout`);
		} else window.location.replace(`/${name}`);
	};

	render() {
		const { activeItem } = this.state;

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
						<Input icon="search" placeholder="Search..." />
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
