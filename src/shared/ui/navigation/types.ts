export type Route = {
  name: string;
  pathname: string;
  getLink: () => string;
  text: string;
};

export type NavigationList = {
  name: string;
  text: string;
  children: NavigationList[] | Route[];
};

export type LevelStyles = { [key: string]: string };

export type NavigationWithPermissionsProps = {
  navigationList: NavigationList[] | Route[];
  checkPermission: (routeName: string) => boolean;
};
