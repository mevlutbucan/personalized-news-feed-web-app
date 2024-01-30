import { StrictMode } from 'react';

import { ThemeProvider } from './ui/theme';
import { ReduxProvider } from './services/redux';
import { RouterProvider } from './services/router';

export default function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <ReduxProvider>
          <RouterProvider />
        </ReduxProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
