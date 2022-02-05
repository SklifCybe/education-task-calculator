import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Calculator } from './screens/Calculator';
import { Settings } from './screens/Settings';

import { lightTheme } from './styles/themes/light-theme';
import { GlobalStyle } from './styles/global-style';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  const changeTheme = (themeName) => {
    setTheme(themeName);
  };

  const getCurrentTheme = () => {
    if (theme === 'light') return lightTheme;
    // if (theme === 'dark') return darkTheme;
    // if (theme === 'colored') return coloredTheme;
  };

  return (
    <ThemeProvider theme={getCurrentTheme()}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </ThemeProvider>
  );
};

export { App };
