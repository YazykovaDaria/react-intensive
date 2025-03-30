import { ReactElement, useState, useEffect } from 'react';
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

const isNavigationList = (item: NavigationList | Route) => 'children' in item;

const generateNavigationListWithPermissions = async ({
  navigationList,
  checkPermission,
  level = 1,
}: NavigationWithPermissionsProps & { level?: number }): Promise<
  ReactElement[]
> => {
  const elements = await Promise.all(
    navigationList.map(async (item) => {
      const isList = isNavigationList(item);

      const childrenElements = isList
        ? await generateNavigationListWithPermissions({
            navigationList: item.children,
            checkPermission,
            level: level + 1,
          })
        : [];

      if (!isList) {
        return (await checkPermission(item.name)) ? getLinkElement(item) : null;
      }

      if (childrenElements.length === 0) {
        return null;
      }

      return (
        <ul className={levelStyles[level]} key={item.name}>
          <li>{item.text}</li>
          {childrenElements.map((child, i) => (
            <li key={i}>{child}</li>
          ))}
        </ul>
      );
    })
  );

  return elements.filter(Boolean) as ReactElement[];
};

export const NavigationWithPermissions = ({
  navigationList,
  checkPermission,
}: NavigationWithPermissionsProps) => {
  const [isChecking, setIsChecking] = useState(false);
  const [navigation, setNavigation] = useState<ReactElement[]>([]);

  useEffect(() => {
    const getNavigation = async () => {
      setIsChecking(true);
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
        <nav className={s.navigation}>{navigation}</nav>
      ) : null}
    </>
  );
};
