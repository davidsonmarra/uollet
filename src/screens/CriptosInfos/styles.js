import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 50px 25px 0;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFPercentage(50)}px;
  margin-right: 8px;
`;

export const TitleText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const ChartContainer = styled.View`
  align-items: center;
`;

export const ContainerChartPadding = styled.View`
  padding-left: ${RFValue(30)}px;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(400)}px;
  height: ${RFValue(350)}px;
`;

export const ContainerList = styled.View`
  padding: 0 25px;
`;

export const TransactionList = styled.FlatList`
  padding: 0 25px 100px;
  width: 100%;
`;