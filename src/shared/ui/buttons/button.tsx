import { ComponentProps } from 'react';
import s from './button.module.scss';

interface BtnProps extends ComponentProps<'button'> {
  customStyle?: string;
}

export const Button = ({ children, customStyle, ...props }: BtnProps) => (
  <button className={`${s.button} ${customStyle}`} {...props}>
    {children}
  </button>
);
