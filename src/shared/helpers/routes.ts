interface Route {
  getLink: () => string;
  pathname: string;
}

interface Routes {
  main: Route;
  randomPost: Route;
}

export const routes: Routes = {
  main: {
    getLink: () => '/',
    pathname: '/',
  },
  randomPost: {
    getLink: () => '/random-post',
    pathname: '/random-post',
  },
};
