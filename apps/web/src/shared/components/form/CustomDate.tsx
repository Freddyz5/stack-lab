/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker } from '@heroui/react';
import { DateValue, parseDate, getLocalTimeZone } from "@internationalized/date";
import React, { useState, useEffect } from 'react';

const CustomDate = ({ field, form, ...props }: any) => {
  const toDateValue = (isoString: string | null | undefined): DateValue => {
    if (!isoString) return parseDate(new Date().toISOString().split('T')[0]);
    const date = new Date(isoString);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return parseDate(`${yyyy}-${mm}-${dd}`);
  };

  const [value, setValue] = useState<DateValue>(() => toDateValue(field.value));

  useEffect(() => {
    setValue(toDateValue(field.value));
  }, [field.value]);

  const handleChange = (e: DateValue) => {
    setValue(e);
    const isoString = e.toDate(getLocalTimeZone()).toISOString();
    form.setFieldValue(field.name, isoString);
  };

  return (
    <DatePicker
      {...field}
      {...props}
      value={value}
      onChange={handleChange}
      classNames={{
        ...props.classNames,
        input: `text-[#cdfeec] placeholder:text-[#cdfeec90] ${props.classNames.input}`,
        inputWrapper: `bg-[#040F10EE] border border-[#cdfeec] ${props.classNames.inputWrapper} `,
        helperWrapper: `mb-[-20px] ${props.classNames.helperWrapper}`,
      }}
    />
  );
};

export default CustomDate;