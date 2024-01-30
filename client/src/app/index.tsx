import { StrictMode } from 'react';

import { ThemeProvider } from './ui/theme';
import { ReduxProvider } from './services/redux';

export default function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <ReduxProvider></ReduxProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
