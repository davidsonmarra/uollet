import React from 'react';
import {
  Container,
  Img,
  Button,
  Title,
  Icon
} from './styles';

export default function CriptoSelect({ coin, setIsModalVisible }) {
  return (
    <Container >
      <Button onPress={() => setIsModalVisible(true)}>
        <Img source={{ uri: coin.image }} />
        <Title>{coin.id}</Title>
        <Icon name="chevron-down"/>
      </Button>
    </Container>
  );
}