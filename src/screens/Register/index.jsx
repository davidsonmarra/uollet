import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Toast from 'react-native-toast-message';
import {
  Container,
  Header,
  Form,
  Input,
  Title,
  ButtonContainer,
  Button,
  ButtonText
} from './styles';

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('É obrigatório um nome'),
  email: Yup
  .string()
  .email('Digite um e-mail válido')
  .required('Obrigatório ter um e-mail'),
  password: Yup
  .string()
  .min(6, 'Minimo de 6 caracteres')
  .matches(/[A-Z]/, 'Pelo menos um caractere maiúsculo')
  .matches(/[0-9]/, 'Pelo menos um número')
  .matches(/[!-.]|[:-@]|[[-`]|[{-~]/, 'Pelo menos um caractere especial')
  .required('É obrigatório ter uma senha'),
  passwordConfirm: Yup
  .string()
  .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
  .required('É necessário confirmar a senha')
});

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })
  // const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(true);
  const [isVisiblePasswordConfirm, setIsVisiblePasswordConfirm] = useState(true);
  const theme = useTheme();

  function SignIn(data) {
    reset();
    Toast.show({
      type: 'success',
      text1: 'Cadastro efetuado!',
      text2: `Seja bem vindo ${data.name}, o seu cadastro foi efetuado com sucesso ✔`,
      position: 'bottom',
    });
    navigation.navigate('Login');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        {/* <Header>
          <Title>Cadastre uma nova conta aqui!</Title>
        </Header> */}
        <Form>
          <Input
            control={control}
            name="name"  
            placeholder="nome"
            autoCapitalize='none'
            error={errors.name && errors.name.message}
            icon={
              <Ionicons 
                name="person" 
                size={22} 
                color={theme.colors.primary} 
              />
            }
          />
          <Input
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
          <Input
            control={control}
            name="password"  
            placeholder="senha"
            secureTextEntry={isVisible}
            autoCapitalize='none'
            setIsVisible={setIsVisible}
            error={errors.password && errors.password.message}
            icon={
              <MaterialCommunityIcons 
                name="key" 
                size={22} 
                color={theme.colors.primary} 
              />
            }
          />
          <Input
            control={control}
            name="passwordConfirm"  
            placeholder="confirmação de senha"
            secureTextEntry={isVisiblePasswordConfirm}
            autoCapitalize='none'
            setIsVisible={setIsVisiblePasswordConfirm}
            error={errors.passwordConfirm && errors.passwordConfirm.message}
            icon={
              <MaterialCommunityIcons 
                name="key-change" 
                size={22} 
                color={theme.colors.primary} 
              />
            }
          />
        </Form>
        <ButtonContainer>
          <Button onPress={handleSubmit(SignIn)}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </ButtonContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}