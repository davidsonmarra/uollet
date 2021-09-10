import React, { useState } from 'react';
import Input from '../Input';
import { Control, Controller } from 'react-hook-form';
import { Container, ViewBtn, Button, Eye } from './styles';
import { useTheme } from 'styled-components';

export default function InputForm({
  name,
  icon,
  control,
  defaultValue,
  secureTextEntry,
  setIsVisible,
  ...rest 
}) {
  const theme = useTheme();
  return (
    <Container>
      {icon}
      <Controller
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
            {...rest}
          />
        )}
        name={name}
      />
      {
        name === 'password' &&
        (secureTextEntry 
        ? <ViewBtn onPress={() => setIsVisible(false)}><Button >
            <Eye name="eye" size={22} color={theme.colors.primary} />
          </Button></ViewBtn>
        : <ViewBtn onPress={() => setIsVisible(true)}><Button>
            <Eye name="eye-slash" size={22} color={theme.colors.primary} />
          </Button></ViewBtn>)
      }
    </Container>
  );
}