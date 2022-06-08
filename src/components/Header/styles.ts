import { Dimensions, FlexStyle } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
width: ${Dimensions.get('window').width}px;
height: 50px;
margin-top: 25px;
flex-direction: row;
align-items: center;
`;

export const LogoContainer = styled.View`
flex-direction: row;
width: ${Dimensions.get('window').width / 1.6}px;
`

export const ButtonsContainer = styled.View<FlexStyle>`
flex-direction: row;
flex:1;
justify-content: space-around;
`
