import React from 'react';
import { Link } from 'react-router-dom';

import { PageContext } from '@/context/page-context';
import { Button } from '@/components/FunctionalComponents/Button/components';

import { NotFoundStyle } from './components';

const ButtonGoHome = () => {
  return (
    <Button padding="5px" width="100%">
      Go Home
    </Button>
  );
};

const NotFound = ({ error }) => {
  const { setPage } = React.useContext(PageContext);

  const handleClick = () => {
    setPage('home');
  };

  return (
    <NotFoundStyle>
      <h2>Not found page</h2>
      {error ? (
        <a href="/" onClick={handleClick}>
          <ButtonGoHome />
        </a>
      ) : (
        <Link to="/" onClick={handleClick}>
          <ButtonGoHome />
        </Link>
      )}
    </NotFoundStyle>
  );
};

export { NotFound };
