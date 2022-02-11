import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex } from './Flex';

const HistoryStyle = styled.section`
  width: 270px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const History = ({ historyList, visible }) => {
  return (
    <HistoryStyle visible={visible} className="history">
      <Flex direction="column" gap="10px">
        <p>History</p>
        <ul className="history-list">
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

HistoryStyle.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export { History };
