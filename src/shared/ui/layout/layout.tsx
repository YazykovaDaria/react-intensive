import { Outlet } from 'react-router';
import { Header } from './header';
import s from './layout.module.scss';

export const Layout = () => (
  <div className={s.layout}>
    <Header></Header>
    <main className={s.main}>
      <Outlet></Outlet>
    </main>
  </div>
);
