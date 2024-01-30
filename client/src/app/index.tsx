import { StrictMode } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './ui/theme';
import { ReduxProvider } from './services/redux';
import { RouterProvider } from './services/router';

export default function App() {
  return (
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <ReduxProvider>
            <RouterProvider />
          </ReduxProvider>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>
  );
}
