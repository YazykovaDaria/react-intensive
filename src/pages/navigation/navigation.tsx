import s from './style.module.scss';
import { ReactElement } from 'react';

const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
  // 'events',
];

const checkHasUserPermission = (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

// Со звездочкой проверка прав асинхронная
// const checkHasUserPermission = async (routeName) => {
// 	return USER_READ_PERMISSIONS.includes(routeName)
// }

type Route = {
  name: string;
  pathname: string;
  getLink: () => string;
  text: string;
};

type NavigationList = {
  name: string;
  text: string;
  children: NavigationList[] | Route[];
};

const routes = {
  vacancies: {
    name: 'vacancies',
    pathname: 'vacancies',
    getLink: () => '/vacancies',
    text: 'Вакансии',
  },
  candidates: {
    name: 'candidates',
    pathname: 'candidates',
    getLink: () => '/candidates',
    text: 'Кандидаты',
  },
  events: {
    name: 'events',
    pathname: 'events',
    getLink: () => '/events',
    text: 'События',
  },
  clients: {
    name: 'clients',
    pathname: 'clients',
    getLink: () => '/clients',
    text: 'Клиенты',
  },
  partners: {
    name: 'partners',
    pathname: 'partners',
    getLink: () => '/partners',
    text: 'Партнёры',
  },
};

const navigationList = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [routes.vacancies, routes.candidates],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
];

const getLinkElement = (route: Route) => (
  <a href={route.getLink()} className={s.navigationLv3}>
    {route.text}
  </a>
);

type LevelStyles = { [key: string]: string };

const levelStyles: LevelStyles = {
  1: s.navigationLv1,
  2: s.navigationLv2,
};

const isNavigationList = (item: NavigationList | Route) => {
  return 'children' in item;
};

const generateNavigationListWithPermissions = (
  navigationList: NavigationList[] | Route[],
  checkPermission: (routeName: string) => boolean,
  level = 1
): ReactElement[] => {
  return navigationList
    .map((item) => {
      const isList = isNavigationList(item);

      const childrenElements = isList
        ? generateNavigationListWithPermissions(
            item.children,
            checkPermission,
            level + 1
          )
        : [];

      if (!isList) {
        return checkPermission(item.name) ? getLinkElement(item) : null;
      }

      if (Array.isArray(childrenElements)) {
        const filteredChildren = childrenElements.filter(Boolean);
        if (filteredChildren.length === 0) {
          return null;
        }
      }

      return (
        <ul className={levelStyles[level]} key={item.name}>
          <li>{item.text}</li>
          {childrenElements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    })
    .filter(Boolean) as ReactElement[];
};

export const NavigationPage = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  );

  return (
    <div className={s.container}>
      {navigationListWithPermission.length > 0 && (
        <nav className={s.navigation}>{navigationListWithPermission}</nav>
      )}
    </div>
  );
};
