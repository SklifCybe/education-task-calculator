import React from 'react';
import PropTypes from 'prop-types';

import { History } from '@/components/ClassComponents/History';
import { Flex } from '@/components/FunctionalComponents/Flex/components';

import { ControlPanelStyle, ButtonStyle } from './components';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHistory: true };
  }

  toggleHistory = () => {
    this.setState((prevState) => ({
      showHistory: !prevState.showHistory,
    }));
  };

  render() {
    return (
      <ControlPanelStyle visible={showHistory}>
        <Flex justify="center">
          <History historyList={historyList} visible={showHistory} />
          <ButtonStyle visible={showHistory} onClick={toggleHistory}>
            &times;
          </ButtonStyle>
        </Flex>
      </ControlPanelStyle>
    );
  }
}

ControlPanel.propTypes = {
  historyList: PropTypes.array.isRequired,
};

export { ControlPanel };
