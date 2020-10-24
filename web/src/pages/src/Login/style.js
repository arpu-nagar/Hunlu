import styled from 'styled-components';
import { login_bg } from '../../../assets/index';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	background-image: url(${login_bg});
`;

export const Head = styled.div`
	font-size: 2.5rem;
	font-weight: 700;
	color: white;
`;

export const Content = styled.div`
	margin-top: 10%;
	font-size: 1.1rem;
	font-weight: 300;
	width: 60%;
	color: grey;
`;

export const SubCont1 = styled.div`
	text-align: center;
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SubCont = styled.div`
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`;
