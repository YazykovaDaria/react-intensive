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
    path: routes.main.getLink(),
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: routes.main.getLink(), element: <MainPage /> },
      { path: routes.randomPost.getLink(), element: <RandomPostPage /> },
    ],
  },
  {
    path: routes.landing.getLink(),
    children: [{ path: routes.landing.getLink(), element: <LandingPage /> }],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
