import { ReactElement } from 'react';
import { Outlet } from 'react-router';
import s from './layout.module.scss';

type LayoutProps = {
  header?: ReactElement;
};

export const Layout = ({ header }: LayoutProps) => (
  <div className={s.layout}>
    {header}
    <main className={s.main}>
      <Outlet></Outlet>
    </main>
  </div>
);
