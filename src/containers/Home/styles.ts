import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  height: ${Dimensions.get('window').height}px;
`;

export const ScrollableMain = styled.ScrollView`
  height: ${Dimensions.get('window').height}px;
`;

