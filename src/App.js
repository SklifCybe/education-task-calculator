import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Calculator } from './screens/Calculator';
import { Settings } from './screens/Settings';
import { NotFound } from './screens/NotFound';
import { PageContext } from './utils/page-context';

import { lightTheme } from './styles/themes/light-theme';
import { GlobalStyle } from './styles/global-style';

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const [page, setPage] = React.useState('/');

  const changeTheme = (themeName) => {
    setTheme(themeName);
  };

  const getCurrentTheme = () => {
    if (theme === 'light') return lightTheme;
    // if (theme === 'dark') return darkTheme;
    // if (theme === 'colored') return coloredTheme;
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ThemeProvider theme={getCurrentTheme()}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export { App };
