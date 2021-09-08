import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  
`;

export const ButtonSubmit = styled(RectButton).attrs({
  rippleColor: '#FFFFFF11'
})`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 5px;
`;

export const Title = styled.Text`
  padding: 18px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title}
`;