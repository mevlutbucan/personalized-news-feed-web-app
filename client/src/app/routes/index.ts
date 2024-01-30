import { RouteObject } from 'react-router-dom';

import Root from '../pages/Root';

enum Paths {
  Root = '/',
}

const routes: RouteObject[] = [
  {
    id: 'root',
    path: Paths.Root,
    Component: Root,
    children: [],
  },
];

export default routes;
