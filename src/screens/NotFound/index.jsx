import React from 'react';
import { Link } from 'react-router-dom';

import { PageContext } from '@/utils/page-context';
import { Button } from '@/components/Button';

import { NotFoundStyle } from './styles';

const NotFound = () => {
  const { setPage } = React.useContext(PageContext);

  const clickHandler = () => {
    setPage('home');
  };

  return (
    <NotFoundStyle>
      <h2>Not found page</h2>
      <Link to="/" onClick={clickHandler}>
        <Button padding="5px" width="100%">
          Go Home
        </Button>
      </Link>
    </NotFoundStyle>
  );
};

export { NotFound };
