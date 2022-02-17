import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@/components/FunctionalComponents/Flex/components';
import { Button } from '@/components/FunctionalComponents/Button/components';
import { SwitchTheme } from '@/components/ClassComponents/SwitchTheme';

import { SettingsStyle } from './components';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { theme, chooseTheme, clearHistory } = this.props;

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
  }
}

Settings.propTypes = {
  theme: PropTypes.string.isRequired,
  chooseTheme: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
};

export { Settings };
