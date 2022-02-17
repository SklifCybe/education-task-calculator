import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Header } from '@/components/FunctionalComponents/Header';
import { Calculator } from '@/screens/FunctionalComponents/Calculator';
import { Settings } from '@/screens/FunctionalComponents/Settings';
import { NotFound } from '@/screens/FunctionalComponents/NotFound';
import { PageContext } from '@/utils/page-context';
import { useTheme } from '@/hooks/useTheme';
import { ErrorBoundary } from '@/components/ClassComponents/ErrorBoundary';

import { GlobalStyle } from '@/styles/global-style';

const App = () => {
  const { theme, chooseTheme, getCurrentTheme } = useTheme();
  const [page, setPage] = React.useState('/');
  const [history, setHistory] = React.useState([]);

  const clearHistory = () => setHistory([]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ThemeProvider theme={getCurrentTheme()}>
        <ErrorBoundary>
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
        </ErrorBoundary>
        <GlobalStyle />
      </ThemeProvider>
    </PageContext.Provider>
  );
};

export { App };
