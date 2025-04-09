import { useState, useEffect } from 'react';
import s from './style.module.scss';
import { Route, NavigationList } from './types';
import {
  generateNavigationListWithPermissions,
  isNavigationList,
} from './helpers';

type NavigationWithPermissionsProps = {
  navigationList: NavigationList[] | Route[];
  checkPermission: (routeName: string) => Promise<boolean>;
};

const getLinkElement = (route: Route) => (
  <a href={route.getLink()} className={s.navigationLv3}>
    {route.text}
  </a>
);

const getListUi = (list: NavigationList[] | Route[], level = 1) => {
  const elements = list.map((item) => {
    const isList = isNavigationList(item);

    const childrenElements = isList ? getListUi(item.children, level + 1) : [];

    if (!isList) {
      return getLinkElement(item);
    }

    return (
      <ul key={item.name} className={s[`navigationLv${level}`]}>
        <li>{item.text}</li>
        {childrenElements.map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    );
  });

  return elements;
};

export const NavigationWithPermissions = ({
  navigationList,
  checkPermission,
}: NavigationWithPermissionsProps) => {
  const [isChecking, setIsChecking] = useState(true);
  const [navigation, setNavigation] = useState<NavigationList[]>([]);

  useEffect(() => {
    const getNavigation = async () => {
      try {
        const navigation = await generateNavigationListWithPermissions({
          navigationList,
          checkPermission,
        });

        setNavigation(navigation);
      } catch (error) {
        console.log(error);
      } finally {
        setIsChecking(false);
      }
    };

    getNavigation();
  }, [checkPermission, navigationList]);

  return (
    <>
      {isChecking && <span>Loading...</span>}
      {navigation.length > 0 ? (
        <nav className={s.navigation}>{...getListUi(navigation)}</nav>
      ) : null}
    </>
  );
};
