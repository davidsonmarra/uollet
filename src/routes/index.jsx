import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicRoutes from './public.routes';
import AppRoutes from './app.routes';
import criptosReducer from '../reducers/criptosReducer';
import selectedCriptoReducer from '../reducers/selectedCriptoReducer';
import transactionsReducer from '../reducers/transactionsReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Toast, { BaseToast } from 'react-native-toast-message';

// import { useAuth } from '../hooks/auth'

export default function Routes() {
  const allReducers = combineReducers({
    criptos: criptosReducer,
    selectedCrypto: selectedCriptoReducer,
    transactions: transactionsReducer
  });
  const store = createStore(allReducers);
  
  // const { user } = useAuth();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <PublicRoutes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
    </Provider>
  );
}