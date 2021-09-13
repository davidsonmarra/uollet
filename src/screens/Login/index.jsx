import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import GoogleSvg from '../../assets/google';
import AppleSvg from '../../assets/apple';
import Logo from '../../assets/logo-uollet-login';
import { Ionicons } from '@expo/vector-icons';
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
import firebase from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';

const schema = Yup.object().shape({
  email: Yup
  .string()
  .email('Digite um e-mail válido')
  .required('Obrigatório ter um e-mail'),
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
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);
  const transactions = useSelector((state) => state.transactions);
  const coins = useSelector((state) => state.criptos);

  async function fetchData() {
    await apiCoinGecko.get('/coins/markets/', {
      params: {
        vs_currency: 'brl',
        ids: criptos
      }
    }).then(res => {
      // console.log(res.data)
      dispatch({type: 'SET_INFOS', payload: res.data})
      setIsLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Login efetuado!',
        text2: 'O login foi efetuado com sucesso ✔',
        position: 'bottom',
      });
      reset();
      navigation.navigate('AppRoutes');
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if(isLogged) {
      setIsLoading(true);
      fetchData();
    }
  }, [isLogged])

  function loginUser(data) {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      
      // reset();
      // navigation.navigate('AppRoutes');
      dispatch({ type: 'LOGIN' });
      return true;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      Toast.show({
        type: 'error',
        text1: 'Algo deu errado!',
        text2: `Usuário ou senha incorretos! ❌`,
        position: 'bottom',
      });
      return false;
    });
  }

  function SignIn(data) {
    console.log("Entrou");
    if(loginUser(data)) {
      // reset();
      // navigation.navigate('AppRoutes');
    }
  }

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

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
            <ButtonText>
            {
              isLoading ?
              <ActivityIndicator size={28} color={theme.colors.title} /> :
              'Entrar'
            }
            </ButtonText>
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