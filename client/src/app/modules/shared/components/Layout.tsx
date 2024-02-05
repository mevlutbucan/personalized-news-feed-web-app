import { type FunctionComponent, type PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import AppBar from './AppBar';

import { useAppSelector } from '../../../services/redux/hooks';

import { Paths } from '../../../../core/enums/Paths';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate(Paths.SignIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <Box display="flex">
      <AppBar />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
