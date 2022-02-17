import React from 'react';

import { Navigator } from '@/components/FunctionalComponents/Navigator';

import { HeaderStyle } from './components';

const Header = () => {
  return (
    <HeaderStyle>
      <p>Calculator App</p>
      <Navigator />
    </HeaderStyle>
  );
};

export { Header };
