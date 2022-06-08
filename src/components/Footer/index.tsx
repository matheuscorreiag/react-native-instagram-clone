import React from 'react';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Icon name='home' size={25} color={'#fff'} />
      <Icon name='search' size={25} color={'#fff'} />
      <EntypoIcon name='folder-video' size={25} color={'#fff'} />
      <Icon name='shopping-bag' size={25} color={'#fff'} />
      <Icon name='circle' size={25} color={'#fff'} />
    </Container>
  );
};

export default Footer;
