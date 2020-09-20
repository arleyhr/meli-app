import React from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './theme';
import { AppRouter } from './routes';
import { useDarkMode } from './hooks/use-dark-mode';

import GlobalStyle from './components/global-style';
import ButtonFab from './components/button-fab';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <AppRouter />
      <ButtonFab toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
