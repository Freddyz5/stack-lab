/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Select, SelectItem } from '@heroui/react';
import { ICONS } from 'apps/web/src/Categories/constants/icons';

const CustomSelect = ({ field, form, options, ...props }: any) => {
  const currentValue = field.value;

  const IconSelected = options.filter((option:any) => option.value === field.value).map((option:any) => {
    const Icon: React.ElementType | any = ICONS.find(icon => icon[0] === (option.icon ? option.icon : 'Scan'))?.[1];
    return (
      <Icon key={option.value} className="h-6 w-6" />
    )
  })

  return (
    <Select
      {...props}
      selectedKeys={currentValue ? new Set([currentValue]) : new Set()}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0];
        form.setFieldValue(field.name, selected);
      }}
      onBlur={() => {
        form.setFieldTouched(field.name, true);
      }}
      startContent={IconSelected}
      classNames={{
          ...props.classNames,
          value: `text-[#cdfeec90] group-data-[has-value=true]:text-[#cdfeec] ${props.classNames?.value}`,
          trigger: `bg-[#040F10EE] border border-[#cdfeec] ${props.classNames?.trigger}`,
          helperWrapper: `absolute top-[90%] ${props.classNames?.helperWrapper}`,
        }
      }
      listboxProps={{
        ...props.listboxProps,
        itemClasses: {
          ...props.listboxProps?.itemClasses,
          base: `dark:data-[hover=true]:bg-[#cdfeec80] data-[selectable=true]:focus:bg-[#cdfeec30] text-[#cdfeec] ${props.listboxProps?.itemClasses?.base}`,
        }
      }}
      popoverProps={{
        ...props.popoverProps,
        classNames: {
          ...props.popoverProps?.classNames,
          base: `before:bg-default-200 ${props.popoverProps?.classNames?.base}`,
          content: `p-0 border-small border-divider bg-background ${props.popoverProps?.classNames?.content}`,
        },
      }}
    >
      {options.map((option:any) => {
        const Icon: React.ElementType | any = ICONS.find(icon => icon[0] === option.icon)?.[1];
        return (
          <SelectItem
            key={option.value}
            startContent={Icon ? <Icon className="h-6 w-6" /> : null}
          >
            {option.label}
          </SelectItem>
        )
      })}
    </Select>
  );
};

export default CustomSelect;
