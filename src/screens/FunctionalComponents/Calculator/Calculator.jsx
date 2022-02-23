import React from 'react';
import PropTypes from 'prop-types';

import { Display } from '@/components/FunctionalComponents/Display';
import { Keypad } from '@/components/FunctionalComponents/Keypad';
import { ControlPanel } from '@/components/FunctionalComponents/ControlPanel';
import { Flex } from '@/components/FunctionalComponents/Flex/components';
import { calculate as calc } from '@/utils/calculate';

import { CalculatorStyle } from './components';

const Calculator = ({ history, setHistory }) => {
  const [calculate, setCalculate] = React.useState({
    expression: '',
    result: '',
  });

  const pressEqual = () => {
    setCalculate((prevCalc) => {
      try {
        return {
          ...prevCalc,
          result: calc(prevCalc.expression).toString(),
        };
      } catch (err) {
        console.error(err.message);
        return {
          expression: '',
          result: '',
        };
      }
    });
  };

  const pressClear = () => {
    setCalculate((prevCalc) => {
      if (prevCalc.result) {
        return {
          result: '',
          expression: prevCalc.result.slice(0, prevCalc.result.length - 1),
        };
      }
      return {
        result: '',
        expression: prevCalc.expression.slice(0, prevCalc.expression.length - 1),
      };
    });
  };

  const handleButton = (event) => {
    if (event.target.localName === 'button') {
      const buttonValue = event.target.textContent;

      switch (buttonValue) {
        case '=':
          pressEqual();
          break;
        case 'CE':
          pressClear();
          break;
        case 'C':
          setCalculate({ expression: '', result: '' });
          break;
        default:
          setCalculate((prevCalc) => ({
            result: '',
            expression: prevCalc.result
              ? prevCalc.result + buttonValue
              : prevCalc.expression + buttonValue,
          }));
          break;
      }
    }
  };

  React.useEffect(() => {
    const { expression, result } = calculate;
    if (result) {
      setHistory((prevHistory) => [...prevHistory, `${expression}=${result}`]);
    }
  }, [calculate, setHistory]);

  return (
    <CalculatorStyle>
      <Flex gap="10px">
        <Flex direction="column" width="900px" justify="center">
          <Display value={calculate} />
          <Keypad setPress={handleButton} />
        </Flex>
        <ControlPanel historyList={history} />
      </Flex>
    </CalculatorStyle>
  );
};

Calculator.propTypes = {
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired,
};

export { Calculator };
