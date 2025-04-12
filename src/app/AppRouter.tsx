import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  NotFoundPage,
  MainPage,
  RandomPostPage,
  LandingPage,
  NavigationPage,
  ArticlesPage,
  CreateArticlePage,
} from '@pages/index';
import { routes, Layout, Header } from '@shared/index';

const MAIN_ROUTE_LINKS = [
  { label: 'Main Page', getLink: routes.main.getLink },
  { label: 'Random Post', getLink: routes.randomPost.getLink },
];

const ARTICLE_ROUTE_LINKS = [
  { label: 'Articles', getLink: routes.articles.getLink },
  { label: 'New Article', getLink: routes.createArticle.getLink },
];

const router = createBrowserRouter([
  {
    path: routes.main.pathname,
    element: <Layout header={<Header links={MAIN_ROUTE_LINKS} />} />,
    errorElement: <NotFoundPage />,
    children: [
      { path: routes.main.pathname, element: <MainPage /> },
      { path: routes.randomPost.pathname, element: <RandomPostPage /> },
    ],
  },
  {
    path: routes.articles.pathname,
    element: <Layout header={<Header links={ARTICLE_ROUTE_LINKS} />} />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <ArticlesPage />,
      },
      { path: routes.createArticle.pathname, element: <CreateArticlePage /> },
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
