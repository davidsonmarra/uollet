import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  background-color: #FFFFFF22;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
`;

export const Img = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  border-radius: ${RFPercentage(50)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text}
`;