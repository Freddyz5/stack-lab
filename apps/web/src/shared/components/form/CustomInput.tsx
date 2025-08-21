/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Input } from '@heroui/react';

const CustomInput = ({ field, form, onPasswordChange, ...props }: any) => {
  const handleChange = (e: any) => {
    form.setFieldValue(field.name, e.target.value);
    if (onPasswordChange) {
      onPasswordChange(e.target.value);
    }
  };
  return (
    <Input
      {...field}
      {...props}
      onChange={handleChange}
      onBlur={() => {
        form.setFieldTouched(field.name, true);
      }}
    />
  );
};

export default CustomInput;
