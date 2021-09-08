import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 50px 15px 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

export const ContainerType = styled.View`
  width: 100%;
  flex-direction: row;
`;