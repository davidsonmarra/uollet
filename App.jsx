import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import theme from './src/global/styles/theme';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
          <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}