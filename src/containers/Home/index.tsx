import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Feed from '../../components/Feed';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import UserStories from '../../components/UserStories';

import { Container, ScrollableMain } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <StatusBar backgroundColor='#000' style='light' />
      <Header />
      <ScrollableMain>
        <UserStories />
        <Feed />
      </ScrollableMain>
      <Footer />
    </Container>
  );
};

export default Home;
