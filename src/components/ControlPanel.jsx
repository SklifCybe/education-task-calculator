import React from 'react';
import styled from 'styled-components';

import { History } from './History';

const ControlPanelStyle = styled.aside`
  text-align: center;
  width: 300px;
  max-height: 450px;
  overflow: auto;
  border-left: ${({ theme, visible }) => visible && `2px solid ${theme.color.disabled}`};
  position: relative;
`;

const ButtonStyle = styled.button`
  position: absolute;
  right: ${({ visible }) => (visible ? '1rem' : '24px')};
  cursor: pointer;
  padding: 0 5px;
`;

const ControlPanel = () => {
  const [showHistory, setShowHistory] = React.useState(true);

  const toggleHistory = () => {
    setShowHistory((prevShow) => !prevShow);
  };

  return (
    <ControlPanelStyle visible={showHistory}>
      <ButtonStyle visible={showHistory} onClick={toggleHistory}>
        &times;
      </ButtonStyle>
      {showHistory && <History />}
    </ControlPanelStyle>
  );
};

export { ControlPanel };
