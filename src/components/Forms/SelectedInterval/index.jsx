import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  Container,
  ButtonContainer,
  Button,
  ButtonText,
  Icon
} from './styles';

export default function SelectedInterval({ interval, setIsModalVisible }) {
  const theme = useTheme();
  return (
    <Container>
      <ButtonContainer>
        <Button onPress={() => setIsModalVisible(true)}>
          <ButtonText>{String(interval)} dias</ButtonText>
          <Icon name="chevron-down" size={20} color={theme.colors.inactive} />
        </Button>
      </ButtonContainer>
    </Container>
  );
}