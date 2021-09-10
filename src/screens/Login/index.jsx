import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';
import GoogleSvg from '../../assets/google';
import AppleSvg from '../../assets/apple';
import Logo from '../../assets/logo-uollet-login';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  Container,
  Header,
  ForgotPassordText,
  ForgotPassword,
  Form,
  InputLogin,
  ButtonSubmit,
  ButtonText,
  ButtonSignUp,
  ButtonTextUp,
  Footer,
  FooterText,
  ButtonContainer,
  BorderButton,
  SocialButtonsContainer,
  SocialButton
} from './styles';

export default function Login() {
  const [isVisible, setIsVisible] = useState(true);
  const {control, handleSubmit} = useForm();
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <Logo width={200} height={200} />
      </Header>
      <Form>
        <InputLogin 
          control={control}
          name="email"  
          placeholder="email"
          icon={
            <Ionicons 
              name="person" 
              size={22} 
              color={theme.colors.primary} 
            />
          }
        />
        <InputLogin 
          control={control}
          name="password"  
          placeholder="senha"
          secureTextEntry={isVisible}
          setIsVisible={setIsVisible}
          icon={
            <Ionicons 
              name="md-lock-closed" 
              size={22} 
              color={theme.colors.primary} 
            />
          }
        />
        
        <ButtonSubmit>
          <ButtonText>Entrar</ButtonText>
        </ButtonSubmit>
        <BorderButton>
          <ButtonSignUp>
            <ButtonTextUp>Cadastrar</ButtonTextUp>
          </ButtonSignUp>
        </BorderButton>
        <ForgotPassword>
          <Ionicons name="md-information-circle-outline" size={24} color="black" />
          <ForgotPassordText>Esqueceu a senha?</ForgotPassordText>
        </ForgotPassword>
      </Form>
      <Footer>
        <FooterText>Entrar com:</FooterText>
        <SocialButtonsContainer>
          <ButtonContainer>
            <SocialButton  >
              <GoogleSvg width={50} height={50} />
            </SocialButton>
          </ButtonContainer>
          <ButtonContainer>
            <SocialButton  >
              <AppleSvg width={50} height={50} />
            </SocialButton>
          </ButtonContainer>
        </SocialButtonsContainer>
      </Footer>
    </Container>
  );
}