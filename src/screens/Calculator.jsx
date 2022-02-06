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
  const [calculateString, setCalculateString] = React.useState('');
  const [history, setHistory] = React.useState([]);

  const setCalculate = (event) => {
    if (event.target.localName === 'button') {
      const keyValue = event.target.textContent;

      if (keyValue === '=') {
        let result;
        setCalculateString((prevValue) => {
          try {
            result = eval(prevValue).toString();
          } catch (err) {
            console.error(err.message);
            return '';
          }
          return result;
        });
        setHistory((prevHistory) => {
          if (result) {
            return [...prevHistory, `${calculateString}=${result}`];
          }
          return prevHistory;
        });
        return;
      } else if (keyValue === 'CE') {
        setCalculateString('');
        return;
      } else if (keyValue === 'C') {
        setCalculateString((prevValue) => prevValue.slice(0, prevValue.length - 1));
        return;
      }

      setCalculateString((prevValue) => prevValue + keyValue);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <CalculatorStyle>
      <Flex gap="10px">
        <Flex direction="column" width="900px">
          <Display value={calculateString} />
          <Keypad setPress={setCalculate} />
        </Flex>
        <ControlPanel historyList={history} />
      </Flex>
    </CalculatorStyle>
  );
};

export { Calculator };
