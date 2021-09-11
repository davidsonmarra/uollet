import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import InputForm from '../../components/Forms/InputForm';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px 25px;
  background-color: #e5e5e5;
`;

export const Header = styled.View``;

export const ForgotPassword = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0;
`;

export const ForgotPassordText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-decoration: underline;
`; 

export const Form = styled.View`
  width: 100%;
`;

export const InputLogin = styled(InputForm).attrs({
  placeholderTextColor: '#777',
  activeOpacity : 0.5
})`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  width: 100%;
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

export const BorderButton = styled.View`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const ButtonSignUp = styled(RectButton).attrs({
  rippleColor: '#00000011'
})`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.title};
  justify-content: center;
  align-items: center;
  
`;

export const ButtonTextUp = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const SocialButtonsContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  border-radius: ${RFValue(50)}px;
  padding: 20px;
`;

export const SocialButton = styled(BorderlessButton)``;
