import { StrictMode } from 'react';

import { ThemeProvider } from './ui/theme';

export default function App() {
  return (
    <StrictMode>
      <ThemeProvider></ThemeProvider>
    </StrictMode>
  );
}
