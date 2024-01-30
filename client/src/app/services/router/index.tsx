import type { FunctionComponent } from 'react';
import { createBrowserRouter, RouterProvider as MainRouterProvider } from 'react-router-dom';

import routes from '../../routes';

const router = createBrowserRouter(routes);

export const RouterProvider: FunctionComponent = () => {
  return <MainRouterProvider router={router} />;
};
