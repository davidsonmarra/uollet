import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CriptosInfos from '../screens/CriptosInfos';
import ButtonTransaction from '../components/ButtonTransaction';
import Transactions from '../screens/Transactions';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons'; 
const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary_dark,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 75,
          backgroundColor: theme.colors.background_light,
          borderTopColor: theme.colors.primary_darkP
        }
      }}
    >
      <Screen 
        name="Início"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Entypo 
              name="wallet"
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
  );
}