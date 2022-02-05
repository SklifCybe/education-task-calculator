import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PageContext } from '../utils/page-context';

const NotFoundStyle = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonStyle = styled.button`
  padding: 5px;
  cursor: pointer;
`;

const NotFound = () => {
  const { setPage } = React.useContext(PageContext);

  const clickHandler = () => {
    setPage('home');
  };

  return (
    <NotFoundStyle>
      <h2>Not found page</h2>
      <ButtonStyle>
        <Link to="/" onClick={clickHandler}>
          Go Home
        </Link>
      </ButtonStyle>
    </NotFoundStyle>
  );
};

export { NotFound };
