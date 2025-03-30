import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  NotFoundPage,
  MainPage,
  RandomPostPage,
  LandingPage,
  NavigationPage,
} from '@pages/index';
import { routes, Layout } from '@shared/index';

const router = createBrowserRouter([
  {
    path: routes.main.pathname,
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: routes.main.pathname, element: <MainPage /> },
      { path: routes.randomPost.pathname, element: <RandomPostPage /> },
    ],
  },
  {
    path: routes.landing.pathname,
    children: [{ path: routes.landing.pathname, element: <LandingPage /> }],
  },
  {
    path: routes.navigation.pathname,
    children: [
      { path: routes.navigation.pathname, element: <NavigationPage /> },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
