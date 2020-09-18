import React from 'react';
import { useRoutes } from 'hookrouter';
import { ThemeProvider } from 'styled-components';

import NotFoundPage from './pages/not-found';

import { theme } from './theme';
import { routes } from './routes';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      {routeResult || <NotFoundPage />}
    </ThemeProvider>
  );
}

export default App;
