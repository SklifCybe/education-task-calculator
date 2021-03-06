import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@/components/FunctionalComponents/Flex/components';

import { HistoryStyle } from './components';

const History = ({ historyList, visible }) => {
  return (
    <HistoryStyle visible={visible} id="history">
      <Flex direction="column" gap="10px">
        <p>History</p>
        <ul id="history-list">
          {historyList && historyList.map((historyEl, id) => <li key={id}>{historyEl}</li>)}
        </ul>
      </Flex>
    </HistoryStyle>
  );
};

History.propTypes = {
  historyList: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
};

export { History };
