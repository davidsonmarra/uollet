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
import { ActivityIndicator, Platform, Alert } from 'react-native';
import apiCoinGecko from '../../services/coinGecko';
import criptos from '../../utils/criptos';
import { signInWithGoogleAsync } from '../../services/googleLogin';
import { signInWithApple } from '../../services/appleLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if(isLogged && user != {}) {
      fetchData();
    }
  }, [isLogged])
//===================================================================================
  // LOGINS
  async function handleSignInWithApple() {
    setIsLoading(true);
    try {
      let userLogin = await signInWithApple();
      console.log(userLogin.email)
      if(!userLogin.email) {
        const userLogged = await AsyncStorage.getItem(`@uollet:${String(userLogin.id)}`); 
        userLogin = JSON.parse(userLogged);
      }      
      dispatch({ type: 'USER_LOGIN', payload: userLogin });
      dispatch({ type: 'LOGIN' });
      Toast.show({
        type: 'success',
        text1: 'Login efetuado!',
        text2: 'O login foi efetuado com sucesso ✔',
        position: 'bottom',
      });
      return true;
    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível conectar a conta Apple");
      setIsLoading(false);
    }
  }

  async function handleSignInWithGoogle() {
    setIsLoading(true);
    try {
      const userLogin = await signInWithGoogleAsync();
      console.log("USER:", userLogin);
      const currentUser = {
        name: userLogin.user.givenName,
        email: userLogin.user.email, 
        id: userLogin.user.id,
        avatar: userLogin.user.photoUrl ? 
        userLogin.user.photoUrl : `https://ui-avatars.com/api/?name=${userLogin.user.givenName}&length=1`
      }
      dispatch({ type: 'USER_LOGIN', payload: currentUser });
      dispatch({ type: 'LOGIN' });
      Toast.show({
        type: 'success',
        text1: 'Login efetuado!',
        text2: 'O login foi efetuado com sucesso ✔',
        position: 'bottom',
      });
      return true;
    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível conectar a conta Google");
      setIsLoading(false);
    }
    
  }

  useEffect(() => { console.log(user)}, [user])


  async function loginUser(data) {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      
      const currentUser = {
        name: user.displayName,
        email: user.email, 
        id: user.uid,
        avatar: user.photoURL ? 
        user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName}&length=1`
      }
      dispatch({ type: 'USER_LOGIN', payload: currentUser });
      dispatch({ type: 'LOGIN' });
      Toast.show({
        type: 'success',
        text1: 'Login efetuado!',
        text2: 'O login foi efetuado com sucesso ✔',
        position: 'bottom',
      });
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
    setIsLoading(true);
    if(loginUser(data)) {
      
    }
  }

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });
//================================================================================================================================
  // CRIPTOS INFO
  async function fetchData() {
    await apiCoinGecko.get('/coins/markets/', {
      params: {
        vs_currency: 'brl',
        ids: criptos
      }
    }).then(res => {
      dispatch({type: 'SET_INFOS', payload: res.data})
      setIsLoading(false);
      reset();
      navigation.navigate('AppRoutes');
    })
    .catch(err => console.log(err));
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
            autoCompleteType="off"
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
            autoCompleteType="off"
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
          <ForgotPassword >
            <Ionicons name="md-information-circle-outline" size={24} color="black" />
            <ForgotPassordText onPress={() => {
            navigation.navigate('Esqueci a senha');
          }}>Esqueceu a senha?</ForgotPassordText>
          </ForgotPassword>
        </Form>
        <Footer>
          <FooterText>Entrar com:</FooterText>
          <SocialButtonsContainer>
            <ButtonContainer>
              <SocialButton onPress={() => handleSignInWithGoogle()} >
                <GoogleSvg width={50} height={50} />
              </SocialButton>
            </ButtonContainer>
            {
              Platform.OS === 'ios' &&
              <ButtonContainer>
                <SocialButton  onPress={() => handleSignInWithApple()} >
                  <AppleSvg width={50} height={50} />
                </SocialButton>
              </ButtonContainer>
            }
          </SocialButtonsContainer>
        </Footer>
      </Container>
    </TouchableWithoutFeedback>
  );
}