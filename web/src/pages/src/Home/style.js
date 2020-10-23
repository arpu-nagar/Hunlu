import styled from 'styled-components';
import { home_bg } from '../../../assets/index';
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-image: url(${home_bg});
	background-size: cover;
`;

export const Heading = styled.h1`
	font-size: 15em;
	padding-bottom: 12.5%;
	color: #333;
	font-weight: 900;
	letter-spacing: 5px;
	font-family: 'Lato', sans-serif;
`;

