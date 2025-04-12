export type Route = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLink: (...params: any) => string;
  pathname: string;
};

export const routes = {
  main: {
    getLink: () => '/',
    pathname: '/',
  },
  randomPost: {
    getLink: () => '/random-post',
    pathname: '/random-post',
  },
  landing: {
    getLink: () => '/landing',
    pathname: '/landing',
  },
  navigation: {
    getLink: () => '/navigation',
    pathname: '/navigation',
  },
  articles: {
    pathname: '/articles',
    getLink: () => '/articles',
  },
  createArticle: {
    pathname: '/articles/create',
    getLink: () => '/articles/create',
  },
  updateArticle: {
    pathname: '/articles/:id',
    getLink: (id: string) => `/articles/${id}`,
  },
} as const satisfies Record<string, Route>;
