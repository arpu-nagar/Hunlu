import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import ReactPlayer from 'react-player/lazy';
import { Container, Icon } from 'semantic-ui-react';
import { Inner } from './style';
import { useState } from 'react';
import axios from 'axios';
export default function Player() {
	const history = useHistory();
	const [state, setState] = useState({
		like: false,
		dislike: false,
		fav: false,
	});
	let id = window.location.pathname.substr(6);
	console.log(id);
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

	const like1 = async () => {
		if (state.like || state.dislike) {
			console.log('You have already liked or disliked this video.');
			return;
		}
		const data = await axios.post('/api/content/like', {
			id: id,
			userID: UserData.userID,
		});
		console.log('Hi');
		console.log(data.data.msg);
	};

	const dislike = () => {};

	return (
		<Container>
			<Icon name="angle left" size="huge" onClick={back} />
			<Inner>
				<ReactPlayer url={video.link} controls={true} />
				<div>
					<Icon
						link
						name="thumbs up"
						color={state.like ? 'green' : 'black'}
						onClick={like1}
					/>
					{state.like ? video.likes + 1 : video.likes}
					<Icon
						link
						name="thumbs down"
						color={state.dislike ? 'red' : 'black'}
						onClick={dislike}
					/>
					{state.dislike ? video.dislikes + 1 : video.dislikes}
					<Icon link name="like" color={state.fav ? 'blue' : 'black'} />
				</div>
			</Inner>
		</Container>
	);
}
