import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
height: ${Dimensions.get('window').height - 50}px;

`;


export const UserPhotoAndNameContainer = styled.View`
position: relative;
top: 15px;
left: 15px;
flex-direction: row;

`
export const PhotoSubtitleContainer = styled.View``

export const UsernameText = styled.Text`
color: white;
`