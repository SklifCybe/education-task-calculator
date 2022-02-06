import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageContext } from '../utils/page-context';
import { Button } from '../components/Button';

const NotFoundStyle = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NotFound = () => {
  const { setPage } = React.useContext(PageContext);

  const clickHandler = () => {
    setPage('home');
  };

  return (
    <NotFoundStyle>
      <h2>Not found page</h2>
      <Link to="/" onClick={clickHandler}>
        <Button padding="5px" width="100%">Go Home</Button>
      </Link>
    </NotFoundStyle>
  );
};

export { NotFound };
