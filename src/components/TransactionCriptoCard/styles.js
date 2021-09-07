import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${({ select }) => select ? '#FFFFFF22' : '#FFFFFF00'};
  width: 100%;
  margin-top: 5px;
  padding: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border-bottom-width: 1px;
  border-bottom-color: rgba(191,191,191,1); */
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
  width: ${RFValue(70)}px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const IconCaret = styled(FontAwesome5)`
  font-size: ${RFValue(15)}px;
  margin-right: 5px;
  color: ${({ theme, value }) => value >= 0 ? theme.colors.green : theme.colors.red};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, value }) => value >= 0 ? theme.colors.green : theme.colors.red};
`;