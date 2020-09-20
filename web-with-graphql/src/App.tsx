import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { darkTheme, lightTheme } from './theme';
import { AppRouter } from './routes';

import GlobalStyle from './components/global-style';
import ButtonFab from './components/button-fab';

import { apolloClient } from './config/apollo-client';
import { useDarkMode } from './hooks/use-dark-mode';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <AppRouter />
      </ApolloProvider>
      <ButtonFab toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
