import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';

type InputProps = {
  customStyle?: string;
} & ComponentProps<'textarea'>;

export const Textarea = ({ customStyle, ...props }: InputProps) => (
  <textarea className={clsx(s.input, customStyle)} {...props}></textarea>
);
