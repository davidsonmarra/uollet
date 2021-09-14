import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import Toast from 'react-native-toast-message';
import firebase from '../../config/firebase';
import {
  Container,
  Header,
  Title,
  InputEmail,
  Form,
  ButtonSubmit,
  ButtonText
} from './styles';

const schema = Yup.object().shape({
  email: Yup
  .string()
  .email('Digite um e-mail válido')
  .required('Obrigatório ter um e-mail'),
});

export default function ForgotPassword({ navigation }) {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  function newPassword(data) {
    firebase.auth().sendPasswordResetEmail(data.email)
      .then(() => {
        reset();
        Toast.show({
          type: 'success',
          text1: 'Enviamos um e-mail!',
          text2: `Você recebeu um e-mail para trocar sua senha!`,
          position: 'bottom',
        });
        navigation.navigate('Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Toast.show({
          type: 'error',
          text1: 'Algo deu errado!',
          text2: `Algo não funcionou corretamente e impossibilitou a troca da senha! ❌`,
          position: 'bottom',
        });
      });
      return true
  }
  
  async function forgotPassword(data) {
    await newPassword(data);
  }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>
            Esqueceu a senha? {'\n'}
            Não se preocupe! {'\n'} 
            Entre com seu e-mail {'\n'} 
            Iremos te ajudar!
          </Title>
        </Header>
        <Form>
          <InputEmail 
            control={control}
            name="email"  
            placeholder="e-mail"
            autoCapitalize='none'
            error={errors.email && errors.email.message}
            icon={
              <MaterialIcons 
                name="email" 
                size={22} 
                color={theme.colors.primary} 
              />
            }
          />
        </Form>
        <ButtonSubmit onPress={handleSubmit(forgotPassword)}>
          <ButtonText>
            Continuar
          </ButtonText>
        </ButtonSubmit>
      </Container>
    </TouchableWithoutFeedback>
  );
}