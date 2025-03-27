import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  NotFoundPage,
  MainPage,
  RandomPostPage,
  LandingPage,
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
    children: [{ path: routes.landing.getLink(), element: <LandingPage /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
