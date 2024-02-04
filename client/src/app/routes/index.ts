import { RouteObject } from 'react-router-dom';

import { Paths } from '../../core/enums/Paths';

import Root from '../pages/Root';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import News from '../pages/News';
import Preferences from '../pages/Preferences';

import { rootLoader } from './loaders/rootLoader';
import { checkAuth } from './loaders/checkAuth';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: Paths.Root,
    loader: rootLoader,
    Component: Root,
    children: [],
  },
  { path: Paths.SignIn, Component: SignIn },
  { path: Paths.SignUp, Component: SignUp },
  { path: Paths.News, loader: checkAuth, Component: News },
  { path: Paths.Preferences, loader: checkAuth, Component: Preferences },
];

export default routes;
