import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';

type InputProps = {
  customStyle?: string;
  label: string;
} & ComponentProps<'input'>;

export const Checkbox = ({ label, customStyle, ...props }: InputProps) => (
  <label className={clsx(s.checkbox, customStyle)}>
    <input type="checkbox" {...props}></input>
    {label}
  </label>
);
