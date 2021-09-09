import React from 'react';
import {
  Container,
  Title,
  Icon,
  Button
} from './styles';

export default function ListCripto({ item, setSelectedCrypto, ...rest }) {
  return (
    <Container {...rest} onPress={() => setSelectedCrypto(item)} activeOpacity={1}>
      <Button {...rest} >
        <Icon source={{ uri: item.image }} />
        <Title>{item.id}</Title>
      </Button>
    </Container>
  );
}