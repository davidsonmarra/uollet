import styled from 'styled-components/native';
import { Feather, FontAwesome5  } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.primary_light};
  margin-top: 20px;
  margin-right: 8px;
  padding: 20px 20px;
  border-radius: 8px;
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

export const IconTransactionTotal = styled(FontAwesome5)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};

`;