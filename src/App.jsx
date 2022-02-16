import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Header } from '@/components/Header';
import { Calculator } from '@/screens/Calculator';
import { Settings } from '@/screens/Settings';
import { NotFound } from '@/screens/NotFound';
import { PageContext } from '@/utils/page-context';
import { useTheme } from '@/hooks/useTheme';

import { GlobalStyle } from '@/styles/global-style';

const App = () => {
  const { theme, chooseTheme, getCurrentTheme } = useTheme();
  const [page, setPage] = React.useState('/');
  const [history, setHistory] = React.useState([]);

  const clearHistory = () => setHistory([]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ThemeProvider theme={getCurrentTheme()}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Calculator history={history} setHistory={setHistory} />} />
          <Route
            path="/settings"
            element={
              <Settings theme={theme} chooseTheme={chooseTheme} clearHistory={clearHistory} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export { App };
