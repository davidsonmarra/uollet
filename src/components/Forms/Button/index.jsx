import React, { useState } from 'react';
import {
  Container,
  ButtonSubmit,
  Title
} from './styles';

export default function Button({ title }) {
  return (
    <Container>
      <ButtonSubmit>
        <Title>{title}</Title>
      </ButtonSubmit>
    </Container>
  );
}