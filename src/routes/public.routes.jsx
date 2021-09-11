import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import { useTheme } from 'styled-components';
import AppRoutes from './app.routes';
const { Navigator, Screen } = createNativeStackNavigator();

export default function PublicRoutes() {  
  const theme = useTheme();
  return (
    <Navigator
    screenOptions={{
      headerShown: true,
    }}
    >
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.title,
          headerTitleStyle: {
            fontFamily: theme.fonts.bold,
          },
          headerBackTitle: "Voltar"
        }}
      />
      <Screen
        name="AppRoutes"
        component={AppRoutes}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}