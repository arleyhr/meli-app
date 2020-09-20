import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';
import { AppRouter } from './routes';

import GlobalStyle from './components/global-style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
