import type { FunctionComponent, PropsWithChildren } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';

import theme from './theme';

import './index.css';

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
