import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFoundPage, MainPage, RandomPostPage } from '@pages/index';
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
]);

export const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
