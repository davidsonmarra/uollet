import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export default function PublicRoutes() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Screen
        name="Login"
        component={Login}
        
      />
    </Navigator>
  );
}