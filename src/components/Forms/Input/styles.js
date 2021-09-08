import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: '#fefefe55'
})`
  width: 100%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.input};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;
  
`;