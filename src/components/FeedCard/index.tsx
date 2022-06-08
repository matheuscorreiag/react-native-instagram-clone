import React from 'react';

import { Text } from 'react-native';
import { UserStoryIcon } from '../UserStories/styles';

import { Container, UserPhotoAndNameContainer, PhotoSubtitleContainer, UsernameText } from './styles';


interface FeedCardProps {
  username: string;
  timeAge: string;
  subTitle: string;
}
const FeedCard: React.FC<FeedCardProps> = ({ subTitle, timeAge, username }) => {
  return (
    <Container>
      <UserPhotoAndNameContainer>
        <UsernameText>{username}</UsernameText>
      </UserPhotoAndNameContainer>

      <PhotoSubtitleContainer></PhotoSubtitleContainer>
    </Container>
  );
};

export default FeedCard;
