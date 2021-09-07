import { StatusBar } from 'expo-status-bar';
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
import Home from './src/screens/Home';
import CriptosInfos from './src/screens/CriptosInfos';

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
      <CriptosInfos />
    </ThemeProvider>
  );
}