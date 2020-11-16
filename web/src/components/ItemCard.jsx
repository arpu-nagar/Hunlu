import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Divider } from 'semantic-ui-react';
import './item.css';
export default function ItemCard({ obj }) {
	const route = () => {
		window.location.replace(`/play/${obj._id}`);
	};
	return (
		<Container onClick={route}>
			<h1 className="name">{obj.name}</h1>
			<div className="like">
				<Icon className="img" link color="white" name="like" />
			</div>
			<div className="right">
				<span className="genre">Genre: {obj.genre}</span>
			</div>
			<div>
				<Icon className="img" link color="green" name="thumbs up" /> {obj.likes}
				<Icon className="img" link color="red" name="thumbs down" />
				{obj.dislikes}
			</div>

			<h4>{obj.desc}</h4>
			<Divider horizontal>.</Divider>
		</Container>
	);
}
