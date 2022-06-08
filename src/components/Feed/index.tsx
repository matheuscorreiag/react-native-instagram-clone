import React from 'react';

import { Text } from 'react-native';
import FeedCard from '../FeedCard';

import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <FeedCard username='Maratonize' subTitle='MEU DEUS! CORIGA 2 FOI CONFIRMADO!' timeAge='17 min' />
    </Container>
  );
};

export default Feed;
