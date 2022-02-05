import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <NotFoundStyle>
      <h2>Not found page</h2>
      <ButtonStyle>
        <Link to="/">Go Home</Link>
      </ButtonStyle>
    </NotFoundStyle>
  );
};

export { NotFound };
