import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { BaseButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: relative;
`;

export const Button = styled(BaseButton).attrs({
  rippleColor: '#FFFFFF11'
})`
  width: 100%;
  background-color: ${({ select }) => select ? '#FFFFFF22' : '#FFFFFF00'};
  padding: 8px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PhotoCoin = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFPercentage(50)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const IconCaret = styled(FontAwesome5)`
  font-size: ${RFValue(15)}px;
  margin-right: 5px;
  color: ${({ theme, value }) => value >= 0 ? theme.colors.green : theme.colors.red};
`;

export const CurentValue = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};

`; 

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, value }) => value >= 0 ? theme.colors.green : theme.colors.red};
`;

export const Div = styled.View`
  width: ${({ deviceWidth }) => deviceWidth}px;
  height: 1px;
  background-color: #FFFFFF11;
  display: ${({ select }) => select ? 'none' : 'flex'};
`;