import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import ReactPlayer from 'react-player/lazy';
import { Container, Icon } from 'semantic-ui-react';
import { Inner } from './style';
import { useState } from 'react';
import { positions, Provider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import axios from 'axios';

export default function Player() {
	const options = {
		timeout: 1500,
		position: positions.TOP_RIGHT,
	};

	const history = useHistory();
	const [state, setState] = useState({
		like: false,
		dislike: false,
		fav: false,
	});
	let id = window.location.pathname.substr(6);
	const { UserData, setUserData } = useContext(UserContext);
	let video = {};
	if (
		UserData.content.find((obj) => {
			if (obj._id === id) {
				video = obj;
				return true;
			}
		})
	) {
		console.log('Video found');
	} else history.push('/home?msg=nocontent');
	const back = () => {
		history.push('/home');
	};
	if (UserData.favorites.find((it) => it === id)) state.fav = true;
	if (UserData.likes.find((it) => it === id)) state.like = true;
	if (UserData.dislikes.find((it) => it === id)) state.dislike = true;

	const like = async () => {
		if (state.like || state.dislike) {
			alert.error('You have already liked or disliked this video.');
			return;
		}
		const data = await axios.post('/');
	};

	const dislike = () => {};

	return (
		<Provider template={AlertTemplate} {...options}>
			<Container>
				<Icon name="angle left" size="huge" onClick={back} />
				<Inner>
					<ReactPlayer url={video.link} controls={true} />
					<div>
						<Icon
							link
							name="thumbs up"
							color={state.like ? 'green' : 'black'}
							onClick={like}
						/>
						{video.likes}
						<Icon
							link
							name="thumbs down"
							color={state.dislike ? 'red' : 'black'}
							onClick={dislike}
						/>
						{video.dislikes}
						<Icon link name="like" color={state.fav ? 'blue' : 'black'} />
					</div>
				</Inner>
			</Container>
		</Provider>
	);
}
