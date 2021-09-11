import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CriptosInfos from '../screens/CriptosInfos';
import ButtonTransaction from '../components/ButtonTransaction';
import Transactions from '../screens/Transactions';
import { SimpleLineIcons, Ionicons  } from '@expo/vector-icons'; 
const { Navigator, Screen } = createBottomTabNavigator();

import uuid from 'react-native-uuid';
import theme from '../global/styles/theme';

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary_dark,
          tabBarInactiveTintColor: theme.colors.inactive,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 75,
            backgroundColor: '#0a152b',
            borderTopWidth: 1,
            borderTopColor: theme.colors.primary_dark
          },
        }}
      >
        <Screen 
          name="Início"
          component={Home}
          options={{
            tabBarIcon: (({ size, color }) => (
              <Ionicons 
                name="wallet-outline"
                size={size}
                color={color}
              />
            ))
          }}
        />
        <Screen 
          name="Transação"
          component={Transactions}
          options={{
            tabBarIcon: (({ size, color }) => (
              <ButtonTransaction size={size} color={color} />
            ))
          }}
        />
        <Screen 
          name="Info"
          component={CriptosInfos}
          options={{
            tabBarIcon: (({ size, color }) => (
              <SimpleLineIcons
                name="chart"
                size={size}
                color={color}
              />
            ))
          }}
        />
      </Navigator>
    </>
  );
}