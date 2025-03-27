import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';

type InputProps = {
  customStyle?: string;
} & ComponentProps<'input'>;

export const Input = ({ customStyle, ...props }: InputProps) => (
  <input className={clsx(s.input, customStyle)} {...props}></input>
);
