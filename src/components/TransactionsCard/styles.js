import styled from 'styled-components/native';
import { Feather, FontAwesome  } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Background = styled.View`
  border-radius: 8px;
  margin-top: 20px;
  margin-right: 8px;
  background-color: #FFFFFF11;
`;

export const Container = styled.View`
  border-radius: 8px;
  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  padding: 20px 20px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background-color: #FFFFFF11;
  
  
  justify-content: space-between;
`; 

export const HeaderTransaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`; 

export const Type = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};

`;

export const IconTransaction = styled(Feather)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme, type }) => type === 'purchases' ? theme.colors.red : theme.colors.green };
`;

export const IconTransactionTotal = styled(FontAwesome)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme, type, amount }) => 
  type === 'total' ? 
  (amount < 0 ? theme.colors.red : theme.colors.green) 
  : theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};

`;