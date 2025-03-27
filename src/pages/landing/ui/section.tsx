import { ComponentProps } from 'react';
import s from './style.module.scss';
import clsx from 'clsx/lite';

type SectionProps = {
  customStyle?: string;
} & ComponentProps<'section'>;

export const Section = ({ children, customStyle, ...props }: SectionProps) => (
  <section className={clsx(s.screen, customStyle)} {...props}>
    {children}
  </section>
);
