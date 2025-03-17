import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';

interface InputProps extends ComponentProps<'input'> {
  customStyle?: string;
}

export const Input = ({ customStyle, ...props }: InputProps) => (
  <input className={clsx(s.input, customStyle)} {...props}></input>
);
