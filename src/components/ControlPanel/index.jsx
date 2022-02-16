import React from 'react';
import PropTypes from 'prop-types';

import { History } from '@/components/History';
import { Flex } from '@/components/Flex';

import { ControlPanelStyle, ButtonStyle } from './styles';

const ControlPanel = ({ historyList }) => {
  const [showHistory, setShowHistory] = React.useState(true);

  const toggleHistory = () => {
    setShowHistory((prevShow) => !prevShow);
  };

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
};

ControlPanel.propTypes = {
  historyList: PropTypes.array.isRequired,
};

export { ControlPanel };
