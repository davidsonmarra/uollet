import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import InputForm from '../../components/Forms/InputForm';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px 20px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
`;

export const InputEmail = styled(InputForm).attrs({
  placeholderTextColor: '#777',
  activeOpacity : 0.5
})`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.background_light};
`;

export const ButtonSubmit = styled(RectButton).attrs({
  rippleColor: '#FFFFFF11',
})`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;