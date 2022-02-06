import React from 'react';
import styled from 'styled-components';

import { Navigator } from './Navigator';

const HeaderStyle = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <p>Calculator App</p>
      <Navigator />
    </HeaderStyle>
  );
};

export { Header };
