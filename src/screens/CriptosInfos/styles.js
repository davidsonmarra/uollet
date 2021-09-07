import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 50px 25px 0;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;


export const ChartContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const ContainerList = styled.View`
  padding: 0 25px;
`;

export const TransactionList = styled.FlatList`
  width: 100%;
`;