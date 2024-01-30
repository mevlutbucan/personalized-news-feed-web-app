import { RouteObject } from 'react-router-dom';

import { Paths } from '../../core/enums/Paths';

import Root from '../pages/Root';
import SignUp from '../pages/SignUp';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: Paths.Root,
    Component: Root,
    children: [],
  },
  { path: Paths.SignUp, Component: SignUp },
];

export default routes;
