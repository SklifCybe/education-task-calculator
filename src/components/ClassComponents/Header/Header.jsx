import React from 'react';

import { Navigator } from '@/components/ClassComponents/Navigator';

import { HeaderStyle } from './components';

class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <p>Calculator App</p>
        <Navigator />
      </HeaderStyle>
    );
  }
}

export { Header };
