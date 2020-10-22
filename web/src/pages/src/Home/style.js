import styled from 'styled-components'
import {home_bg} from '../../../assets/index'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-image: url(${home_bg});
    background-size:cover;
`;

export const Heading = styled.h1`
    margin-top: 12.5%;
    font-size: 12rem;
    color: #333;
    letter-spacing: 8px;
    font-family: 'Helvatica', sans-serif;
`
export const Button = styled.button`
    margin-top: 3.5%;
    padding: 2px 2px 2px 2px;
    width: 7.5%;
`