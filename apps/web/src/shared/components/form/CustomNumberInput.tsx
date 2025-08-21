import { NumberInput } from '@heroui/react';
import React from 'react';

const CustomNumberInput = ({ field, form, ...props }: any) => {
  const handleChange = (e: any) => {
    form.setFieldValue(field.name, e.target.value);
  };
  return (
    <NumberInput
      {...field}
      {...props}
      onChange={handleChange}
      onBlur={() => {
        form.setFieldTouched(field.name, true);
      }}
      classNames={{
        ...props.classNames,
        input: `text-[#cdfeec] placeholder:text-[#cdfeec90] ${props.classNames?.input}`,
        inputWrapper: `bg-[#040F10EE] border border-[#cdfeec] ${props.classNames?.inputWrapper}`,
        helperWrapper: `mb-[-20px] ${props.classNames?.helperWrapper}`,
      }}
      isWheelDisabled
      hideStepper
    />
  );
};

export default CustomNumberInput;