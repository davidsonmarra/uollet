import React from 'react';
import {
  Container,
  Button,
  Title
} from './styles';

export default function ButtonTypeTransaction({ 
  type, 
  title, 
  isSelectted, 
  setSelectTypeButton, 
}) {
  return (
    <Container type={type}>
      <Button
        type={type}
        isSelectted={isSelectted}
        onPress={() => setSelectTypeButton(type)}
      >
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}