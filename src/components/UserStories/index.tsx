import React from 'react';

import { Text } from 'react-native';

import { Container, UserStoryIcon, UserStoriesHorizontalContainer } from './styles';

const UserStories: React.FC = () => {
  return (
    <Container>
      <UserStoriesHorizontalContainer horizontal showsHorizontalScrollIndicator={false}>
        <UserStoryIcon />
        <UserStoryIcon />
        <UserStoryIcon />
        <UserStoryIcon />
        <UserStoryIcon />
        <UserStoryIcon />
      </UserStoriesHorizontalContainer>
    </Container>
  );
};

export default UserStories;
