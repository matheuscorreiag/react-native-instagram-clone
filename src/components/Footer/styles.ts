import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
width: ${Dimensions.get('window').width}px;
position: absolute;
height: 40px;
align-items: center;
flex-direction: row;
justify-content: space-around;
bottom: 0;
background-color: black;
`;
