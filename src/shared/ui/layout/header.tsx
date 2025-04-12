import { NavLink } from 'react-router';
import s from './header.module.scss';

type Link = {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLink: (...params: any) => string;
};

type HeaderProps = {
  links: Link[];
};

export const Header = ({ links }: HeaderProps) => (
  <header className={s.header}>
    <nav>
      <ul className={s.list}>
        {links.map((link, i) => (
          <li key={i} className={s.item}>
            <NavLink
              to={link.getLink()}
              className={({ isActive }) => (isActive ? s.active : '')}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
