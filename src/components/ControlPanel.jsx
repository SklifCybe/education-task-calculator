import React from 'react';
import styled from 'styled-components';

import { History } from './History';
import { Flex } from './Flex';

const ControlPanelStyle = styled.aside`
  text-align: center;
  width: 300px;
  max-height: 450px;
  overflow: auto;
  border-left: ${({ theme }) => `2px solid ${theme.color.disabled}`};
  overflow: ${({ visible }) => (visible ? 'auto' : 'hidden')};
`;

const ButtonStyle = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

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

export { ControlPanel };
