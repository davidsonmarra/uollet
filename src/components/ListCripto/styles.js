import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  background-color: #00000000;
  margin-bottom: 5px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_light};
  
`;

export const Icon = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  margin-right: 8px;
  border-radius: ${RFPercentage(50)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

`;