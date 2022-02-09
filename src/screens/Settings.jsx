import React from 'react';
import styled from 'styled-components';

import { Flex } from '../components/Flex';
import { Button } from '../components/Button';
import { SwitchTheme } from '../components/SwitchTheme';

const SettingsStyle = styled.main`
  padding: 2rem;
  width: 10rem;
`;

const Settings = ({ theme, chooseTheme, clearHistory }) => {
  return (
    <SettingsStyle>
      <Flex direction="column" gap="20px">
        <h1>Settings</h1>
        <SwitchTheme theme={theme} chooseTheme={chooseTheme} />
        <Button padding="10px" onClick={clearHistory}>
          Clear All History
        </Button>
      </Flex>
    </SettingsStyle>
  );
};

export { Settings };
