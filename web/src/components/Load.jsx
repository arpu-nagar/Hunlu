import Loader from 'react-loader-spinner';
import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default class Load extends React.Component {
	//other logic

	render() {
		const style = {
			backgroundColor: '#333',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		};

		return (
			<div style={style}>
				<Loader
					type="Puff"
					color="#ffffff"
					height={100}
					width={100}
					timeout={8000} //3 secs
				/>
			</div>
		);
	}
}
