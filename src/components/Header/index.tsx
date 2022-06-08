import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Direct from 'react-native-vector-icons/Entypo';
import InstagramLogo from '../../assets/insta.svg';


import { Container, ButtonsContainer, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <InstagramLogo width={150} height={50} />
      </LogoContainer>

      <ButtonsContainer>
        <Icon name='plus-square' size={25} color="#fff" />
        <Icon name='heart' size={25} color="#fff" />
        <Direct name='direction' size={25} color="#fff" />
      </ButtonsContainer>
    </Container>
  );
};

export default Header;
