import s from './style.module.scss';
import { NavigationWithPermissions } from '@shared/index';
import { navigationList } from './constants';

const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
  // 'events',
];

const checkHasUserPermission = async (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

export const NavigationPage = () => {
  return (
    <div className={s.container}>
      <NavigationWithPermissions
        navigationList={navigationList}
        checkPermission={checkHasUserPermission}
      ></NavigationWithPermissions>
    </div>
  );
};
