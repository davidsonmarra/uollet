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
import criptosReducer from '../reducers/criptosReducer';
import selectedCriptoReducer from '../reducers/selectedCriptoReducer';
import transactionsReducer from '../reducers/transactionsReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Toast, { BaseToast } from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import theme from '../global/styles/theme';

export default function AppRoutes() {
  const theme = useTheme();

  const allReducers = combineReducers({
    criptos: criptosReducer,
    selectedCrypto: selectedCriptoReducer,
    transactions: transactionsReducer
  });
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary_dark,
          tabBarInactiveTintColor: theme.colors.inactive,
          tabBarShowLabel: false,
          // tabBarHideOnKeyboard: true,
          tabBarStyle: {
            paddingBottom: 10,
            paddingTop: 10,
            height: 75,
            backgroundColor: theme.colors.background_light,
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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
}