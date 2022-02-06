import React from 'react';
import styled from 'styled-components';

import { History } from './History';

const ControlPanelStyle = styled.aside`
  text-align: center;
  width: 300px;
  max-height: 450px;
  overflow: auto;
  border-left: ${({ theme, visible }) => '2px ' + visible && `solid ${theme.color.disabled}`};
  position: relative;
`;

const ButtonStyle = styled.button`
  position: absolute;
  right: ${({ visible }) => (visible ? '1rem' : '2.05rem')};
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
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
