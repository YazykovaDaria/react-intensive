import { NavigationList, Route } from './types';

type NavigationWithPermissions = {
  navigationList: NavigationList[] | Route[];
  checkPermission: (routeName: string) => Promise<boolean>;
};

export const isNavigationList = (item: NavigationList | Route) =>
  'children' in item;

export const generateNavigationListWithPermissions = async ({
  navigationList,
  checkPermission,
}: NavigationWithPermissions) => {
  const listItems = await Promise.all(
    navigationList.map(async (item) => {
      const isList = isNavigationList(item);

      const childrenElements = isList
        ? await generateNavigationListWithPermissions({
            navigationList: item.children,
            checkPermission,
          })
        : [];

      if (!isList) {
        return (await checkPermission(item.name)) ? item : null;
      }

      if (childrenElements.length === 0) {
        return null;
      }

      item.children = childrenElements;
      return item;
    })
  );

  return listItems.filter(Boolean) as NavigationList[];
};
