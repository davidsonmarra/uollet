import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 50%;
  margin-right: ${({ type }) => type === 'sell' ? '5px' : '0'};
  background-color: #FFFFFF;
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: ${({ theme, type, isSelectted }) => 
  isSelectted && type === 'sell' ? 
  theme.colors.green : 
  isSelectted && type === 'purchase' ?
  theme.colors.red :
  theme.colors.background_light};
  border-radius: 8px;

`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;