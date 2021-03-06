import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicRoutes from './public.routes';
import criptosReducer from '../reducers/criptosReducer';
import selectedCriptoReducer from '../reducers/selectedCriptoReducer';
import transactionsReducer from '../reducers/transactionsReducer';
import isLoggedReducer from '../reducers/isLoggedReducer';
import userReducer from '../reducers/userReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

// import { useAuth } from '../hooks/auth'

export default function Routes() {
  const allReducers = combineReducers({
    criptos: criptosReducer,
    selectedCrypto: selectedCriptoReducer,
    transactions: transactionsReducer,
    isLogged: isLoggedReducer,
    user: userReducer
  });
  const store = createStore(allReducers);
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <PublicRoutes />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
    </Provider>
  );
}