import React from 'react';
import PropTypes from 'prop-types';

import { Display } from '@/components/Display';
import { Keypad } from '@/components/Keypad';
import { ControlPanel } from '@/components/ControlPanel';
import { Flex } from '@/components/Flex';

import { CalculatorStyle } from './styles';

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
          result: eval(prevCalc.expression).toString(),
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

  const buttonHandler = (event) => {
    if (event.target.localName === 'button') {
      const buttonValue = event.target.textContent;

      switch (buttonValue) {
        case '=':
          pressEqual();
          break;
        case 'CE':
          setCalculate({ expression: '', result: '' });
          break;
        case 'C':
          pressClear();
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
        <Flex direction="column" width="900px">
          <Display value={calculate} />
          <Keypad setPress={buttonHandler} />
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
