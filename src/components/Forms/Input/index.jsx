import React from 'react';
import {
  Container,
} from './styles';

export default function Input({ placeholder, value, ...rest }) {
  return (
    <Container placeholder={placeholder} value={value} {...rest} />
  );
}