import React from 'react';
import styled from 'styled-components';

import { Navigator } from './Navigator';

const HeaderStyle = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  h1 {
    font-size: 16px;
    font-weight: normal;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>Calculator App</h1>
      <Navigator />
    </HeaderStyle>
  );
};

export { Header };
