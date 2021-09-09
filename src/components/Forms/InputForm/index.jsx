import React, { useState } from 'react';
import Input from '../Input';
import { Control, Controller } from 'react-hook-form';

export default function InputForm({
  name,
  control,
  defaultValue,
  ...rest 
}) {
  return (
      <Controller
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
  );
}