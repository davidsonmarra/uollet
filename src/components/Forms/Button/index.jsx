import React, { useState } from 'react';
import {
  Container,
  ButtonSubmit,
  Title
} from './styles';

export default function Button({ title, onPress }) {
  return (
    <Container>
      <ButtonSubmit onPress={onPress}>
        <Title>{title}</Title>
      </ButtonSubmit>
    </Container>
  );
}