import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  border-radius: 8px;
  padding: 0 50px;
  margin-top: 8px;
`;

export const ButtonContainer = styled.View`
  background-color: #FFFFFF11;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  background-color: #FFFFFF11;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.inactive};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)``;