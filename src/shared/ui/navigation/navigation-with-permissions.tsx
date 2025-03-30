import { ReactElement } from 'react';
import s from './style.module.scss';
import {
  Route,
  NavigationList,
  LevelStyles,
  NavigationWithPermissionsProps,
} from './types';

const levelStyles: LevelStyles = {
  1: s.navigationLv1,
  2: s.navigationLv2,
};

const getLinkElement = (route: Route) => (
  <a href={route.getLink()} className={s.navigationLv3}>
    {route.text}
  </a>
);

const isNavigationList = (item: NavigationList | Route) => {
  return 'children' in item;
};

const generateNavigationListWithPermissions = ({
  navigationList,
  checkPermission,
  level = 1,
}: NavigationWithPermissionsProps & { level?: number }): ReactElement[] => {
  return navigationList
    .map((item) => {
      const isList = isNavigationList(item);

      const childrenElements = isList
        ? generateNavigationListWithPermissions({
            navigationList: item.children,
            checkPermission,
            level: level + 1,
          })
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

export const NavigationWithPermissions = ({
  navigationList,
  checkPermission,
}: NavigationWithPermissionsProps) => {
  const navigation = generateNavigationListWithPermissions({
    navigationList,
    checkPermission,
  });

  return navigation.length > 0 ? (
    <nav className={s.navigation}>{navigation}</nav>
  ) : null;
};
