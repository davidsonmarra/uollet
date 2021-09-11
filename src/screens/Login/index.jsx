import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
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
import { useFocusEffect } from '@react-navigation/core';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';

const schema = Yup.object().shape({
  email: Yup
  .string()
  .email('Digite um e-mail válido')
  .required('Obrigattório ter um e-mail'),
  password: Yup
  .string()
  .min(6, 'Minimo de 6 caracteres')
  .matches(/[A-Z]/, 'Pelo menos um caractere maiúsculo')
  .matches(/[0-9]/, 'Pelo menos um número')
  .matches(/[!-.]|[:-@]|[[-`]|[{-~]/, 'Pelo menos um caractere especial'),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(true);
  const theme = useTheme();

  function SignIn(data) {
    reset();
    Toast.show({
      type: 'success',
      text1: 'Login efetuado!',
      text2: 'O login foi efetuado com sucesso ✔',
      position: 'bottom',
    });
    navigation.navigate('AppRoutes');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Logo width={200} height={200} />
        </Header>
        <Form>
          <InputLogin 
            control={control}
            name="email"  
            placeholder="e-mail"
            autoCapitalize='none'
            error={errors.email && errors.email.message}
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
            autoCapitalize='sentences'
            error={errors.password && errors.password.message}
            setIsVisible={setIsVisible}
            icon={
              <Ionicons 
                name="md-lock-closed" 
                size={22} 
                color={theme.colors.primary} 
              />
            }
          />
          
          <ButtonSubmit onPress={handleSubmit(SignIn)}>
            <ButtonText>Entrar</ButtonText>
          </ButtonSubmit>
          <BorderButton>
            <ButtonSignUp onPress={() => {
              navigation.navigate('Cadastrar');
            }}>
              <ButtonTextUp>
                Cadastrar
              </ButtonTextUp>
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
    </TouchableWithoutFeedback>

  );
}