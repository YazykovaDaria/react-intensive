import { ComponentProps } from 'react';
import s from './button.module.scss';

type ButtonProps = {
  customStyle?: string;
} & ComponentProps<'button'>;

export const Button = ({
  children,
  customStyle,
  type = 'button',
  ...props
}: ButtonProps) => (
  <button className={`${s.button} ${customStyle}`} {...props} type={type}>
    {children}
  </button>
);
