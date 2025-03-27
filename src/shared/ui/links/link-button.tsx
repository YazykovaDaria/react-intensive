import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './style.module.scss';

type LinkProps = {
  customStyle?: string;
} & ComponentProps<'a'>;

export const LinkButton = ({
  children,
  href,
  customStyle,
  ...props
}: LinkProps) => (
  <a href={href} {...props} className={clsx(s.linkBtn, customStyle)}>
    {children}
  </a>
);
