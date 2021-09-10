import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  width: 50%;
  margin-right: ${({ placeholder }) => placeholder === 'R$' ? '5px' : '0'};
  padding: 18px;
  background-color: ${({ placeholder }) => placeholder === 'R$' ? '#FFFFFF22' : '#FFFFFF11'};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
`;