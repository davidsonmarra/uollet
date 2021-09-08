import React, { useState } from 'react';
import {
  Container,
  Button,
  Icon
} from './styles';

export default function ButtonTransaction({ size, color }) {
  return (
    <Container colorCurent={color}>
      <Button>
        <Icon size={size} colorCurent={color} />
      </Button>
    </Container>
  );
}