import React from 'react';
import CurrencyInput from 'react-native-currency-input';
import {
  Container,
  ContainerPrice
} from './styles';

export default function Input({ name, placeholder, value, ...rest }) {
  return (
    
      name === "price" ?
      <ContainerPrice name={name} placeholder={placeholder} value={value} {...rest}/> :
      <Container name={name} placeholder={placeholder} value={value} {...rest} />
    
  );
}