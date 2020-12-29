import styled, { keyframes } from 'styled-components';
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

export const glow = keyframes`
from {
    text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff, 0 0 0px #fff;
  }
  to {
    text-shadow: 0 0 0.5px #fff, 0 0 0.5px #fff, 0 0 0.5px #fff, 0 0 0.5px #fff, 0 0 0.5px #fff, 0 0 0.5px #fff, 0 0 0.5px #fff;
  }	
`;

export const Heading = styled.h1`
	font-size: 12em;
	padding-bottom: 0%;
	color: #eee;
	font-weight: 900;
	letter-spacing: 5px;
	font-family: 'Lato', sans-serif;
	z-index: 2;
`;

export const SubHead = styled.h4`
	font-size: 2em;
	padding-bottom: 5.5%;
	color: lightgrey;
	font-weight: 500;
	letter-spacing: 2px;
	font-family: 'Lato', sans-serif;
	z-index: 2;
	-webkit-animation: ${glow} 0.5s ease-in-out infinite alternate;
	-moz-animation: ${glow} 0.5s ease-in-out infinite alternate;
	animation: ${glow} 0.5s ease-in-out infinite alternate;
`;
