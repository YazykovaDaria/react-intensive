import { NavLink } from 'react-router';
import { routes } from '@shared/index';
import s from './header.module.scss';

export const Header = () => (
  <header className={s.header}>
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={routes.main.getLink()}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Home Page
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={routes.randomPost.getLink()}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Post Page
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
