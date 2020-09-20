import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { theme } from './theme';
import { AppRouter } from './routes';

import GlobalStyle from './components/global-style';
import { apolloClient } from './config/apollo-client';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <AppRouter />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
