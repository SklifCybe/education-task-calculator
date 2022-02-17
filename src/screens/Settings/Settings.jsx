import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@/components/Flex/components';
import { Button } from '@/components/Button/components';
import { SwitchTheme } from '@/components/SwitchTheme';

import { SettingsStyle } from './components';

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

Settings.propTypes = {
  theme: PropTypes.string.isRequired,
  chooseTheme: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export { Settings };
