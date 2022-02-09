import React from 'react';
import styled from 'styled-components';

import { Flex } from './Flex';

const HistoryStyle = styled.div`
  width: 270px;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const History = ({ historyList, visible }) => {
  return (
    <HistoryStyle visible={visible}>
      <Flex direction="column" gap="10px">
        <p>History</p>
        <ul>{historyList && historyList.map((historyEl, id) => <li key={id}>{historyEl}</li>)}</ul>
      </Flex>
    </HistoryStyle>
  );
};

export { History };
