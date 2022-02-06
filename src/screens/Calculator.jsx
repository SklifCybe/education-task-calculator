import React from 'react';
import styled from 'styled-components';

import { Display } from '../components/Display';
import { Keypad } from '../components/Keypad';
import { ControlPanel } from '../components/ControlPanel';
import { Flex } from '../components/Flex';

const CalculatorStyle = styled.main`
  padding: 1.5rem;
  display: flex;
  justify-content: center;
`;

const Calculator = () => {
  return (
    <CalculatorStyle>
      <Flex gap="10px">
        <Flex direction="column" width="900px">
          <Display />
          <Keypad />
        </Flex>
        <ControlPanel />
      </Flex>
    </CalculatorStyle>
  );
};

export { Calculator };
