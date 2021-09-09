import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons'; 

export const Background = styled.View`
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const Container = styled.View`
  border-radius: 8px;
  padding: 16px;
  justify-content: space-between;
  background-color: #FFFFFF11;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.Image`
  margin-right: 8px;
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  border-radius: ${RFPercentage(50)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TypeImg = styled(AntDesign)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme, type }) => type === 'sell' ? theme.colors.green : theme.colors.red};
`;

export const PriceContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const BRLPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;

export const DateContainer = styled.View`
  align-items: flex-end;
  margin-top:5px;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_light};
`;